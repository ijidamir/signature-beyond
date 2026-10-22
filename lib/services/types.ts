import type { Artwork, Auction, Exhibition, JournalPost, Testimonial, WebsiteSettings } from "@/types";

/** Every data source (demo or Supabase) must implement this contract. */
export interface DataProvider {
  getSettings(): Promise<WebsiteSettings>;
  getPublishedArtworks(): Promise<Artwork[]>;
  getFeaturedArtworks(): Promise<Artwork[]>;
  getArtworkBySlug(slug: string): Promise<Artwork | null>;
  getPublishedAuctions(): Promise<Auction[]>;
  getAuctionBySlug(slug: string): Promise<Auction | null>;
  getPublishedExhibitions(): Promise<Exhibition[]>;
  getExhibitionBySlug(slug: string): Promise<Exhibition | null>;
  getPublishedJournalPosts(): Promise<JournalPost[]>;
  getJournalPostBySlug(slug: string): Promise<JournalPost | null>;
  getPublishedTestimonials(): Promise<Testimonial[]>;
}
