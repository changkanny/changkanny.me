import { Bluesky, Github, Globe, Envelope, Phone } from "react-bootstrap-icons";
import type { Locale } from "./types";

const ja: Locale = {
  links: [
    {
      title: "Bluesky",
      description: "どうでもいいつぶやき",
      href: "https://bsky.app/profile/changkanny.bsky.social",
      accent: "#0085ff",
      icon: <Bluesky size={24} />,
    },
    {
      title: "Canimalocanis",
      description: "ほぼ動かないブログ",
      href: "https://canimalocanis.com/",
      accent: "#e67e22",
      icon: <Globe size={24} />,
    },
    {
      title: "GitHub",
      description: "がらくた置き場",
      href: "https://github.com/changkanny",
      accent: "#999999",
      icon: <Github size={24} />,
    },
    {
      title: "Mail",
      description: "hi@changkanny.me",
      href: "mailto:hi@changkanny.me",
      accent: "#999999",
      icon: <Envelope size={24} />,
    },
  ],
  works: [
    {
      title: "SideLauncher",
      tags: ["Software", "iOS", "Swift"],
      description: "サイドボタンからアプリを起動",
      accent: "#999999",
    },
  ],
};

export default ja;
