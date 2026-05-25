import { Mail, Phone } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

export const CONTACT_LINKS = {
  github: "https://github.com/mubarak-cod",
  linkedin: "https://www.linkedin.com/in/ososanya-ola-15b199346/",
  email: "mailto:ososanyaola8@gmail.com",
  whatsapp: "https://wa.me/2347039978994",
  phone: "tel:+2347039978994",
};

export const CONTACT_DETAILS = {
  email: "ososanyaola8@gmail.com",
  phone: "07039978994",
  whatsapp: "+234 703 997 8994",
};

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: CONTACT_LINKS.github,
    icon: SiGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    href: CONTACT_LINKS.linkedin,
    icon: FaLinkedinIn,
    external: true,
  },
  {
    label: "WhatsApp",
    href: CONTACT_LINKS.whatsapp,
    icon: FaWhatsapp,
    external: true,
  },
  {
    label: "Email",
    href: CONTACT_LINKS.email,
    icon: Mail,
    external: false,
  },
];

export const CONTACT_METHODS = [
  {
    label: "Email",
    value: CONTACT_DETAILS.email,
    href: CONTACT_LINKS.email,
    icon: Mail,
    external: false,
  },
  {
    label: "Phone",
    value: CONTACT_DETAILS.phone,
    href: CONTACT_LINKS.phone,
    icon: Phone,
    external: false,
  },
  {
    label: "WhatsApp",
    value: CONTACT_DETAILS.whatsapp,
    href: CONTACT_LINKS.whatsapp,
    icon: FaWhatsapp,
    external: true,
  },
];