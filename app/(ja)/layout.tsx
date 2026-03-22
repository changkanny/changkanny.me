import type { Metadata } from "next";
import { RootLayout } from "../components/root-layout";

export const metadata: Metadata = {
  title: "changkanny",
};

export default function JaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayout lang="ja">{children}</RootLayout>;
}
