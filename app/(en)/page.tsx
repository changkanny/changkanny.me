import { Home } from "../components/home";
import en from "../i18n/en";

export default function Page() {
  return <Home locale={en} altLang={{ href: "/ja", label: "日本語" }} />;
}
