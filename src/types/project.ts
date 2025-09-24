export type ProjectId = 'nbtrip' | 'budget' | 'ggujun' | 'berry' | 'portfolio';

export type Link = { href: string; text: string };

export interface ProjectDetailData {
  id: ProjectId;
  title: string;
  cover: string;
  coverDark?: string;
  oneLiner: string;
  people: string;
  period: string;
  features: string[];
  contrib: string[];
  tech?: string;
  techChips?: string[];
  links?: { href: string; text: string }[];
  screenshots?: ProjectScreenshot[];
  screenshotLayout?: 'grid' | 'stack';
}

export type ProjectScreenshot =
  | string
  | { src: string; width?: string | number; height?: string | number };

export interface ProjectCard {
  id: ProjectId;
  title: string;
  img: string;
  one: string;
  tag?: string | string[];
  category: 'team' | 'personal';
}
