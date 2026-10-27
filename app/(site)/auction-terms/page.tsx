import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Auction Terms and Conditions", description: "How auctions listed on the Signature Beyond website work." };

const tbc = "[To be confirmed by the gallery.]";

const sections: LegalSection[] = [
  { heading: "About These Terms", paragraphs: ["This page explains how auctions are presented on this website. The specific terms for an individual auction may be published or provided separately by the gallery, and those terms apply to that auction."] },
  { heading: "What This Website Does", paragraphs: ["This website displays information about past and upcoming auctions. It does not take bids, register bidders or process auction payments. Please do not assume that you can bid or pay through this website."] },
  { heading: "Registration and Participation", paragraphs: ["Whether registration is needed, and how to take part, depends on the individual auction. Please check the information for that auction or contact the gallery before taking part.", tbc] },
  { heading: "Bidding", paragraphs: ["The way bids may be placed, and any bidding rules, are set by the gallery for each auction.", tbc] },
  { heading: "Fees and Taxes", paragraphs: ["Any buyer's premium, taxes, delivery charges or other fees that apply should be stated in the terms for the relevant auction.", tbc] },
  { heading: "Payment", paragraphs: ["Payment methods and deadlines are set by the gallery for each auction.", tbc] },
  { heading: "Collection and Delivery", paragraphs: ["Arrangements for collection, packing, shipping and delivery are agreed with the gallery.", tbc] },
  { heading: "Artwork Descriptions and Condition", paragraphs: ["Descriptions on this website are for general information. If you need more detail about an artwork, including its condition or documentation, please ask the gallery before taking part."] },
  { heading: "Contact Information", paragraphs: ["For questions about an auction, please contact the gallery:"], contact: true },
];

export default function AuctionTermsPage() {
  return <LegalPage title="Auction Terms and Conditions" updated="26 October 2026" sections={sections} />;
}
