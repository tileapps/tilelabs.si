import type { Metadata } from 'next';
import { Brand } from '@/components/Bits';
import Footer from '@/components/Footer';
import ThemeSwitch from '@/components/ThemeSwitch';
import { COMPANY } from '@/lib/company';
import { FRAME } from '@/lib/legal-words';

export const metadata: Metadata = { title: 'HIPAA: Tile Labs', description: "Tile Labs' HIPAA notations." };

/* THE HIPAA PAGE (the operator, 17 November 2026): the HIPAA mark in Tile's footer, and in the foot of app.tilelabs.si, links here (snowai.app/hipaa is the Snow AI brand's own).
   For now it is the area for the notations and says so: the notations are the operator's to write and nothing is claimed here until they are. English only; the languages come later. */
export default function Page() {
  const f = FRAME.en;
  return (
    <div lang="en">
      <header className="top">
        <div className="wrap">
          <Brand href="/" label={f.homeAria} />
          <span className="sp" />
          <div className="hdr-r"><ThemeSwitch lang="en" /></div>
        </div>
      </header>
      <main className="lp wrap" id="top">
        <h1>HIPAA</h1>
        <p className="lp-date mono">Being written.</p>
        <p>This page is the home of Tile Labs&rsquo; HIPAA notations. It is being written.</p>
        <h2>Notations</h2>
        <p>No notations have been added yet.</p>
        <p className="lp-company"><b>{f.line}</b> · {f.companyNo} {COMPANY.uen} · {f.place}</p>
        <p><a href="/">{f.back}</a></p>
      </main>
      <Footer home lang="en" doc="home" />
    </div>
  );
}
