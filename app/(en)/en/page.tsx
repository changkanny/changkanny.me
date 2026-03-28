import type { Metadata } from "next";
import { Home } from "../../components/home";
import en from "../../i18n/en";

export const metadata: Metadata = {
  title: "changkanny",
};

export default function Page() {
  return <Home locale={en} altLang={{ href: "/", label: "日本語" }} />;
}
