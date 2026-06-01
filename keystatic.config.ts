// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';
import { createElement } from 'react';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    blogs: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'content/en/blog/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Published date' }),
        subtitle: fields.text({ label: 'Subtitle' }),
        description: fields.text({ label: 'Description' }),
        summary: fields.text({ label: 'Summary' }),
        image: fields.image({ label: 'Image' }),
        authors: fields.array(fields.text({ label: 'Author' }), { label: 'Authors' }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags' }),

        content: fields.mdx({ 
            label: 'Content',
            components: {
                CaptionedImage: {
                    kind: 'block',
                    icon: createElement('div', null, 'Image'),
                    label: 'Captioned Image',
                    schema: {
                        imageSrc: fields.text({ label: 'Image URL' }),
                        alt: fields.text({ label: 'Alt text' }),
                        containerClassName: fields.text({ label: 'Classname' }),
                        imageClassName: fields.text({ label: 'Classname' }),
                        caption: fields.text({ label: 'Caption' }),
                    },
                },
            }
        }),

      },
    }),
  },
});
