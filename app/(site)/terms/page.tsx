import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Terms of Use", description: "The terms that apply when you use the Signature Beyond website." };

const sections: LegalSection[] = [
  { heading: "Introduction", paragraphs: ["These terms apply to your use of the Signature Beyond website. Please read them before using the website."] },
  { heading: "Acceptance of These Terms", paragraphs: ["By using this website you are agreeing to use it in line with these terms. If you do not agree with them, please do not use the website."] },
  { heading: "Use of the Website", paragraphs: ["You must use the website lawfully. Please do not attempt to disrupt its operation, gain unauthorised access to it, or misuse its content or services."] },
  { heading: "Artwork Information", paragraphs: ["Artwork descriptions, images, dimensions, availability and prices are provided for general information and should be checked with the gallery. We try to keep information accurate, but we cannot promise that it is free of errors or always up to date. If anything is incomplete or unclear, please contact the gallery."] },
  { heading: "Intellectual Property", paragraphs: ["Text, images, branding and other content on this website may be protected by intellectual property rights, including the rights of artists and other rights holders. Please do not copy, redistribute or use protected material commercially without permission, except where applicable law allows. We do not claim ownership of material that belongs to others."] },
  { heading: "Enquiries and Communications", paragraphs: ["Sending an enquiry through this website, by email or by WhatsApp does not on its own create a purchase agreement, representation agreement or any other contract with the gallery."] },
  { heading: "Auctions and Transactions", paragraphs: ["Any auction participation, bidding, payment, collection or delivery is governed by the specific terms and arrangements that apply to that auction or transaction. An auction listing on this website does not mean that the website itself takes bids or payments. See the Auction Terms and Conditions page for more."] },
  { heading: "Third-Party Links", paragraphs: ["Links to other websites are provided for convenience. The gallery does not control those websites and is not responsible for their content or practices."] },
  { heading: "Website Availability", paragraphs: ["The website may sometimes be unavailable, for example during maintenance or because of technical problems."] },
  { heading: "Limitation of Liability", paragraphs: ["To the extent permitted by applicable law, the gallery is not liable for losses that arise from your use of, or inability to use, this website. Nothing in these terms removes any rights or protections that the law says cannot be excluded.", "[Wording to be reviewed by a legal adviser before publication.]"] },
  { heading: "Changes to These Terms", paragraphs: ["We may update these terms from time to time. The current version will be published on this page with its last-updated date."] },
  { heading: "Contact Information", paragraphs: ["If you have questions about these terms, please contact the gallery:"], contact: true },
];

export default function TermsPage() {
  return <LegalPage title="Terms of Use" updated="26 October 2026" sections={sections} />;
}
