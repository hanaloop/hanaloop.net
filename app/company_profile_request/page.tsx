import { SiteShell } from '@/components/layout/site-shell';

export default function Page() {
  return (
    <SiteShell>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeJEFIcUzy68oP-mA--noSht_3Bq8ctRC4aCTleWh6oYtmCQQ/viewform"
        style={{ width: '100vw', height: '90vh', border: 0, margin: 0, padding: 0 }}
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
      >
        Loading…
      </iframe>
    </SiteShell>
  );
}
