import Ummah from "../../public/assets/ummah2.webp";
import PNF from "../../public/assets/pnf.png";
import SS from "../../public/assets/ss.png";
import { Filters } from "../types/FiltersEnum";
import { DevStuff } from "../types/DevStuffType";

export const devStuff: DevStuff[] = [
  {
    title: "Creating a Pong Game",
    description: "Tutorial for Creating a Pong Game with JavaScript",
    src: "https://www.youtube.com/embed/U4QSE7-ySDo",
    component: "iframe",
    filter: Filters.TEACHING,
    sort: 2,
    date: new Date("2024-09-01"),
    isYoutube: true
  },
  {
    title: "Creating a TicTacToe Game",
    description: "Tutorial for Creating a TicTacToe Game with JavaScript",
    src: "https://www.youtube.com/embed/IOa2FkX4fGI",
    component: "iframe",
    filter: Filters.TEACHING,
    sort: 7,
    date: new Date("2024-09-04"),
    isYoutube: true
  },
  {
    title: "Into The Woods",
    description: "Into The Woods Wedding Website and registry",
    src: "https://www.intothewoods.wedding/",
    component: "iframe",
    filter: Filters.CONTRACT,
    sort: 1,
    date: new Date("2024-07-01")
  },
  {
    title: "Our Ummah",
    description: "Social Media App for religious communities",
    src: Ummah,
    href: "https://apps.apple.com/in/app/ourummah/id1638542613",
    component: "Image",
    filter: Filters.PROJECTS,
    sort: 3,
    date: new Date("2022-09-01")
  },
  {
    title: "ParkNFly",
    description: "Airport parking app used nationwide by millions",
    src: PNF,
    href: "https://www.pnf.com/",
    component: "Image",
    filter: Filters.WORK,
    sort: 4,
    date: new Date("2021-09-01")
  },
  {
    title: "E Clinic Notes",
    description: "Automated medical notes app for doctors",
    src: "https://www.youtube.com/embed/Ix4_OQ0F_4I",
    component: "iframe",
    filter: Filters.PROJECTS,
    sort: 5,
    date: new Date("2020-09-01"),
    isYoutube: true
  },
  {
    title: "ShowSeeker",
    description:
      "End to end, cloud-based advertising order management platform",
    src: SS,
    href: "https://www.showseeker.com/",
    component: "Image",
    filter: Filters.WORK,
    sort: 6,
    date: new Date("2024-10-01")
  }
  // TODO: add Rower
  // TODO: add volunteer work at school
];
