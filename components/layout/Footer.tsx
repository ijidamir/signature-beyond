import Link from "next/link";
import Image from "next/image";
import type { WebsiteSettings } from "@/types";
import { NAV_LINKS } from "@/lib/navigation";

const SOCIAL_LABELS: Record<keyof WebsiteSettings["social"], string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  youtube: "YouTube",
  tiktok: "TikTok",
  linkedin: "LinkedIn",
};

export function Footer({ settings }: { settings: WebsiteSettings }) {
  // Empty social URLs are hidden, never linked.
  const socials = (Object.keys(SOCIAL_LABELS) as (keyof typeof SOCIAL_LABELS)[]).filter(
    (k) => settings.social[k]
  );

  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
      <div>
          <Image src={settings.logoUrl || "/images/logo.png"} alt={settings.siteName} width={270} height={157} className="h-24 w-auto" />
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div className="space-y-2 text-sm">
          <p className="font-medium text-white">Get in touch</p>
          {settings.address && <p>{settings.address}</p>}
          {settings.phoneNumbers.map((p) => (
            <p key={p}><a href={`tel:${p.replace(/\s/g, "")}`}>{p}</a></p>
          ))}
          {settings.primaryEmail && (
            <p><a href={`mailto:${settings.primaryEmail}`}>{settings.primaryEmail}</a></p>
          )}
          {socials.length > 0 && (
            <ul className="flex flex-wrap gap-4 pt-2">
              {socials.map((k) => (
                <li key={k}>
                  <a href={settings.social[k]} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {SOCIAL_LABELS[k]}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs">
        © {new Date().getFullYear()} {settings.siteName}. All rights reserved.
      </p>
    </footer>
  );
}
