import { StaticImageData } from "next/image";
import { Filters } from "../types/FiltersEnum";

type IFrameStuff = {
  title: string;
  description: string;
  src: string;
  component: "iframe";
  filter: Filters;
  sort: number;
  date: Date;
  isYoutube?: boolean;
};
type ImageStuff = {
  title: string;
  description: string;
  src: StaticImageData;
  href: string;
  component: "Image";
  filter: Filters;
  sort: number;
  date: Date;
};

export type DevStuff = IFrameStuff | ImageStuff;
