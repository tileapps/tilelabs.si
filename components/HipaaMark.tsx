/** The HIPAA compliant mark in the footer (the operator, 17 November 2026): a small shield, drawn here, that links to tilelabs.si/hipaa. The words are its name for anyone who cannot see it. */
export default function HipaaMark({ label }: { label: string }) {
  return (
    <a className="hipaa-mark" href="/hipaa" aria-label={label} title={label}>
      <svg viewBox="0 0 80 96" width="30" height="36" aria-hidden="true" focusable="false">
        <defs><clipPath id="hm-shield"><path d="M40 3 L73 13 V48 C73 69 58 85 40 93 C22 85 7 69 7 48 V13 Z" /></clipPath></defs>
        <g clipPath="url(#hm-shield)">
          <rect x="0" y="0" width="40" height="96" fill="var(--accent, #5e2ced)" />
          <rect x="40" y="0" width="40" height="96" fill="var(--accent-2, #4a1fc4)" />
          <rect x="0" y="39" width="80" height="26" fill="#fff" fillOpacity=".16" />
        </g>
        <path d="M40 3 L73 13 V48 C73 69 58 85 40 93 C22 85 7 69 7 48 V13 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M36 14 h8 v6 h6 v8 h-6 v6 h-8 v-6 h-6 v-8 h6 z" fill="#fff" />
        <text x="40" y="54" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="15" fill="#fff">HIPAA</text>
        <text x="40" y="63" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="6.6" fill="#fff">COMPLIANT</text>
        <circle cx="40" cy="77" r="8.5" fill="#fff" />
        <path d="M35.6 77.2 l3.2 3.2 l5.8 -6.4" fill="none" stroke="var(--accent, #5e2ced)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
