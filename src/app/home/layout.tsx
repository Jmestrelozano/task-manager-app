import { LayoutWelcomeNotification } from "@/components/layouts/LayoutWelcomeNotification";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth";
import { redirect } from "next/navigation";
import { Navbar } from "@/components/navbar/Navbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <LayoutWelcomeNotification session={session}>
      <Navbar />
      <div className="pt-28 bg-gray-50 h-screen">
        <div className="p-4 2xl:px-10">{children}</div>
      </div>
    </LayoutWelcomeNotification>
  );
}
