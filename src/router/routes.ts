import {
  AboutUsIcon,
  ConsultationRequestsIcon,
  CoursesIcon,
  DashboardIcon,
  FieldsOfExpertiseIcon,
  OurVisionIcon,
  PartnersIcon,
  SettingsIcon,
  TestimonialsIcon,
} from "../assets/Icons";
import About from "../pages/About/About";
import Dashborad from "../pages/Dashborad";
import { RoutesI } from "./route";

export const routes: RoutesI[] = [
  {
    id: 1,
    path: "",
    title: "Dashboard",
    Icon: DashboardIcon,
    element: Dashborad,
  },
  {
    id: 2,
    title: "About Us",
    path: "about-us",
    Icon: AboutUsIcon,
    element: About,
  },
  {
    id: 3,
    title: "Field sOf Expertise",
    path: "fields-of-expertise",
    Icon: FieldsOfExpertiseIcon,
    element: About,
  },
  {
    id: 4,
    title: "Our Vision",
    path: "our-vision",
    Icon: OurVisionIcon,
    element: About,
  },
  {
    id: 5,
    title: "Consultation Requests",
    path: "consultation-requests",
    Icon: ConsultationRequestsIcon,
    element: About,
  },
  {
    id: 6,
    title: "Contact Support",
    path: "contact-support",
    Icon: ConsultationRequestsIcon,
    element: About,
  },
  {
    id: 7,
    title: "Courses",
    path: "courses",
    Icon: CoursesIcon,
    element: About,
  },
  {
    id: 8,
    title: "Partners",
    path: "partners",
    Icon: PartnersIcon,
    element: About,
  },
  {
    id: 9,
    title: "Testimonials",
    path: "testimonials",
    Icon: TestimonialsIcon,
    element: About,
  },
  {
    id: 10,
    title: "settings",
    path: "settings",
    Icon: SettingsIcon,
    element: About,
  },
];
