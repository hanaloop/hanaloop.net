#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const defaultBase = '61f9503a7b94ab36540ec4cf1d7969bddee2f063';
const defaultRef = 'main';

const mappings = [
  ['blog/', 'content/ko/blog/'],
  ['docs/', 'content/ko/docs/'],
  ['static/images/', 'public/images/'],
];

function parseArgs(argv) {
  const options = {
    base: defaultBase,
    ref: defaultRef,
    write: false,
    updateMeta: true,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === '--write') {
      options.write = true;
    } else if (arg === '--no-meta') {
      options.updateMeta = false;
    } else if (arg === '--from') {
      options.base = argv[++i];
    } else if (arg === '--ref') {
      options.ref = argv[++i];
    } else if (arg === '--help' || arg === '-h') {
      printHelp();
      process.exit(0);
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  return options;
}

function printHelp() {
  console.log(`Usage: node scripts/sync-main-content.mjs [options]

Copies content changes from an old Docusaurus-style tree into the active Fumadocs tree.

Default range:
  ${defaultBase}..${defaultRef}

Path mappings:
  blog/          -> content/ko/blog/
  docs/          -> content/ko/docs/
  static/images/ -> public/images/

Options:
  --write        Apply the changes. Without this, only prints a dry run.
  --from <sha>   Base commit, exclusive. Default: ${defaultBase}
  --ref <ref>    Source ref. Default: ${defaultRef}
  --no-meta      Do not regenerate docs meta.json files after writing docs.
  --help         Show this help.
`);
}

function git(args, options = {}) {
  return execFileSync('git', args, {
    cwd: process.cwd(),
    encoding: options.encoding ?? 'utf8',
    stdio: options.stdio ?? ['ignore', 'pipe', 'pipe'],
  });
}

function targetFor(sourcePath) {
  const mapping = mappings.find(([from]) => sourcePath.startsWith(from));
  if (!mapping) return null;

  const [from, to] = mapping;
  return path.join(to, sourcePath.slice(from.length));
}

function parseNameStatus(output) {
  return output
    .trim()
    .split('\n')
    .filter(Boolean)
    .map((line) => {
      const fields = line.split('\t');
      const status = fields[0];

      if (status.startsWith('R') || status.startsWith('C')) {
        return {
          status: status[0],
          oldPath: fields[1],
          sourcePath: fields[2],
        };
      }

      return {
        status,
        sourcePath: fields[1],
      };
    });
}

function fileExistsAtRef(ref, sourcePath) {
  try {
    git(['cat-file', '-e', `${ref}:${sourcePath}`]);
    return true;
  } catch {
    return false;
  }
}

function copyFromRef(ref, sourcePath, targetPath, write) {
  if (!fileExistsAtRef(ref, sourcePath)) {
    console.log(`skip missing at ${ref}: ${sourcePath}`);
    return;
  }

  console.log(`${write ? 'copy' : 'would copy'} ${sourcePath} -> ${targetPath}`);

  if (!write) return;

  fs.mkdirSync(path.dirname(targetPath), { recursive: true });

  const content = execFileSync('git', ['show', `${ref}:${sourcePath}`], {
    cwd: process.cwd(),
    encoding: 'buffer',
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  fs.writeFileSync(targetPath, content);
}

function removeTarget(sourcePath, write) {
  const targetPath = targetFor(sourcePath);
  if (!targetPath) return;

  console.log(`${write ? 'remove' : 'would remove'} ${targetPath}`);

  if (!write) return;
  fs.rmSync(targetPath, { force: true });
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const range = `${options.base}..${options.ref}`;
  const roots = mappings.map(([from]) => from);
  const diff = git(['diff', '--name-status', range, '--', ...roots]);
  const changes = parseNameStatus(diff);

  if (changes.length === 0) {
    console.log(`No mapped changes found in ${range}.`);
    return;
  }

  console.log(`${options.write ? 'Applying' : 'Dry run for'} ${range}`);

  let docsChanged = false;

  for (const change of changes) {
    if (change.oldPath && change.oldPath !== change.sourcePath) {
      removeTarget(change.oldPath, options.write);
    }

    if (change.status === 'D') {
      removeTarget(change.sourcePath, options.write);
      continue;
    }

    const targetPath = targetFor(change.sourcePath);
    if (!targetPath) continue;

    if (change.sourcePath.startsWith('docs/')) docsChanged = true;
    copyFromRef(options.ref, change.sourcePath, targetPath, options.write);
  }

  if (options.write && options.updateMeta && docsChanged) {
    console.log('regenerate docs meta.json');
    execFileSync('node', ['scripts/generate-docs-meta.mjs'], {
      cwd: process.cwd(),
      stdio: 'inherit',
    });
  }

  if (!options.write) {
    console.log('\nDry run only. Re-run with --write to apply.');
  }
}

main();
