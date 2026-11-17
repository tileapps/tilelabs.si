/* THE FOOT'S MARKS (the operator, 17 November 2026): the padlock for Privacy and the sealed page for Terms, drawn here (this site carries no family kit; the art is the kit's, family/components/FootMarks.tsx) in the page's own accent. Their names stay as the accessible name and the hover title, in the page's language. */
const INK = '#16223a';
const TEAL = 'var(--accent, #5e2ced)';

export function PadlockArt() {
  return (
    <svg viewBox="0 0 64 64" width="38" height="38" aria-hidden="true" focusable="false">
      <rect x="14" y="28" width="36" height="28" rx="4" fill={TEAL} stroke={INK} strokeWidth="3" />
      <path d="M22 28 V20 a10 10 0 0 1 20 0 V28" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <circle cx="32" cy="41" r="4" fill="#fff" />
      <rect x="30.5" y="43" width="3" height="8" rx="1.5" fill="#fff" />
    </svg>
  );
}

export function SealedPageArt() {
  return (
    <svg viewBox="0 0 64 64" width="38" height="38" aria-hidden="true" focusable="false">
      <path d="M14 6 H38 L50 18 V58 H14 Z" fill="#fff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M38 6 V18 H50" fill="var(--soft, #efe9ff)" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M21 28 H43 M21 35 H43 M21 42 H34" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <circle cx="43" cy="50" r="8" fill={TEAL} stroke={INK} strokeWidth="3" />
      <path d="M39.5 50 l2.6 2.6 l4.6 -5" fill="none" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
