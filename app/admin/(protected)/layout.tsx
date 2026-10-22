import type { Metadata } from "next";
import { AdminNav } from "@/components/admin/AdminNav";
import { DemoNotice } from "@/components/admin/DemoNotice";
import { requireAdmin } from "@/lib/admin/auth";
import { logout } from "@/lib/admin/actions";
import { isDemoMode } from "@/lib/services";

export const metadata: Metadata = { title: "Admin", robots: { index: false, follow: false } };

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  if (isDemoMode) return <DemoNotice />;
  await requireAdmin();
  return (
    <div className="min-h-screen md:flex">
      <aside className="bg-ink md:w-56 md:shrink-0"><AdminNav logoutAction={logout} /></aside>
      <main className="min-w-0 flex-1 p-4 sm:p-8">{children}</main>
    </div>
  );
}
