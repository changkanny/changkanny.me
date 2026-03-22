import type { Metadata } from "next";
import { Home } from "../../components/home";
import ja from "../../i18n/ja";

export const metadata: Metadata = {
  title: "changkanny",
};

export default function Page() {
  return <Home locale={ja} altLang={{ href: "/", label: "English" }} />;
}
