import { Home } from "../components/home";
import ja from "../i18n/ja";

export default function Page() {
  return <Home locale={ja} altLang={{ href: "/en", label: "English" }} />;
}
