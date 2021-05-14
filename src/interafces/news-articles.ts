interface Iimage {
  name: string;
  width: number;
  alt: string;
  caption: string;
  url: string;
  height: number;
}
interface Inews {
  href: string;
}
interface Iself {
  href: string;
}
interface Iapi {
  news: Inews;
  self: Iself;
}
interface Iweb {
  href: string;
  short: object;
}
interface Ilinks {
  api: Iapi;
  web: Iweb;
}

export default interface Iarticle {
  images: Iimage[];
  description: string;
  published: string;
  type: string;
  premium: boolean;
  lastModified: string;
  headline: string;
  links: Ilinks;
  categories: object[];
}
