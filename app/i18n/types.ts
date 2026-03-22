export type CardItem = {
  title: string;
  description?: string;
  tags?: string[];
  href?: string;
  accent: string;
  icon?: React.ReactNode;
};

export type Locale = {
  links: CardItem[];
  works: CardItem[];
};
