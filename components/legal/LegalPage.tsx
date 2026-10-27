import { getSettings } from "@/lib/services";
import { PageBanner } from "@/components/ui/PageBanner";

export interface LegalSection { heading: string; paragraphs: string[]; contact?: boolean }

/** Shared layout for the legal pages. Static text, plus the gallery's existing contact details. */
export async function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: LegalSection[] }) {
  const s = await getSettings();
  const emails = [s.primaryEmail, ...s.additionalEmails].filter(Boolean);

  return (
    <>
      <PageBanner title={title} />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="mb-8 rounded border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          <strong>Draft for review.</strong> This page has not yet been reviewed by the gallery or a legal adviser, and is not legal advice. Text in [square brackets] still needs confirmation. Last updated: {updated}.
        </p>
        {sections.map((sec, i) => (
          <section key={sec.heading} aria-labelledby={`sec-${i}`} className="mb-8">
            <h2 id={`sec-${i}`} className="mb-3 font-serif text-2xl">{i + 1}. {sec.heading}</h2>
            <div className="space-y-3 text-sm leading-relaxed text-stone-700">
              {sec.paragraphs.map((p) => <p key={p}>{p}</p>)}
              {sec.contact && (
                <ul className="space-y-1">
                  {emails.map((e) => <li key={e}>Email: <a href={`mailto:${e}`} className="underline">{e}</a></li>)}
                  {s.phoneNumbers.map((p) => <li key={p}>Phone: {p}</li>)}
                  {s.address && <li>Address: {s.address}</li>}
                  {!emails.length && !s.phoneNumbers.length && !s.address && <li>Please use the contact options on the Contact page.</li>}
                </ul>
              )}
            </div>
          </section>
        ))}
      </article>
    </>
  );
}
