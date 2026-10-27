import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy", description: "How Signature Beyond handles personal information on this website." };

const sections: LegalSection[] = [
  { heading: "Introduction", paragraphs: ["This policy describes how Signature Beyond (\"the gallery\", \"we\") handles personal information in connection with your use of this website."] },
  { heading: "Information We May Collect", paragraphs: [
    "Information you give us: if you use the contact form, the name, email address, optional phone number, optional subject and message that you submit. If you contact us by email or WhatsApp, the details you include in those messages.",
    "Technical information: like most websites, our hosting and security services may process technical information such as your IP address, browser type and the pages requested. If website analytics are switched on (see section 5), they may process information about how the website is used.",
  ] },
  { heading: "How We Use Information", paragraphs: ["We use information to respond to enquiries, to operate, maintain and secure the website, to understand how the website is used where analytics are enabled, and to meet any legal obligations that apply to us."] },
  { heading: "Contact Forms and Enquiries", paragraphs: [
    "Messages sent through the contact form are saved in the gallery's website database so that gallery staff can read and respond to them. They can be seen by authorised gallery administrators.",
    "If you choose to message the gallery through WhatsApp, that conversation takes place in WhatsApp and is also subject to WhatsApp's own terms and privacy policy.",
  ] },
  { heading: "Cookies and Similar Technologies", paragraphs: [
    "Cookies are small files stored on your device. The website uses essential cookies to keep gallery administrators signed in and to remember their display preferences in the administration area. These are not used for advertising.",
    "[To be confirmed by the gallery: whether Google Analytics is enabled on the live website. If it is, it may use cookies or similar technologies to measure website use, and a consent notice may be required for visitors in some regions.]",
  ] },
  { heading: "Third-Party Services", paragraphs: [
    "The website relies on the following services: Supabase (database, administrator sign-in and image storage), Vercel (website hosting), and WhatsApp (an optional link that opens a chat with the gallery). Google Analytics is used only if it has been enabled, as noted above.",
    "[To be confirmed by the gallery: that this list is complete for the live website.]",
  ] },
  { heading: "Data Storage and Security", paragraphs: ["Information submitted through the website is stored using the services listed above. Access to administrative functions is restricted to authorised users, and the database is set up so that visitors can only read published content. We take reasonable steps to protect information, but no online service can be guaranteed to be completely secure."] },
  { heading: "Data Retention", paragraphs: ["We keep information for as long as it is needed for the purposes described in this policy or as required by applicable obligations.", "[Retention period to be confirmed by the gallery.]"] },
  { heading: "Your Privacy Rights", paragraphs: ["Depending on where you live, you may have rights relating to your personal information, such as asking to see, correct or delete it. The rights that apply depend on applicable law. To make a privacy request, please contact the gallery using the details below."] },
  { heading: "External Links", paragraphs: ["This website links to other websites, such as social media accounts and WhatsApp. Those sites have their own privacy practices, and we are not responsible for them."] },
  { heading: "Changes to This Policy", paragraphs: ["We may update this policy from time to time. The current version will be published on this page with its last-updated date."] },
  { heading: "Contact Information", paragraphs: ["For privacy questions or requests, please contact the gallery:"], contact: true },
];

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" updated="26 October 2026" sections={sections} />;
}
