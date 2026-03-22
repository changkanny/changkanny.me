import { Bluesky, Github, Globe, Envelope, Phone } from "react-bootstrap-icons";
import type { Locale } from "./types";

const en: Locale = {
  links: [
    {
      title: "Bluesky",
      description: "Idle thoughts, mostly nonsense",
      href: "https://bsky.app/profile/changkanny.bsky.social",
      accent: "#0085ff",
      icon: <Bluesky size={24} />,
    },
    {
      title: "Canimalocanis",
      description: "A blog that rarely moves",
      href: "https://canimalocanis.com/",
      accent: "#e67e22",
      icon: <Globe size={24} />,
    },
    {
      title: "GitHub",
      description: "A junkyard of code",
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
      description: "Launch apps from the Side Button",
      accent: "#999999",
    },
  ],
};

export default en;
