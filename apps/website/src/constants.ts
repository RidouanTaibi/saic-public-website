import { readFileSync } from "node:fs";
import { parse as yaml } from "yaml";

export const site = {
  title: "SA Integration Company",
  shortName: "SAIC",
  tagline: "Identity Orchestration · IAM Advisory",
  description: "Orchestrating enterprise identity. Automating compliance. Securing hybrid cloud & business applications — vendor-neutral IAM and IGA advisory for Human, Non-Personal, Machine, and AI Agent identities.",
  url: "https://saintegrationcompany.com",
  email: "info@saintegrationcompany.com",
  phone: "+31 (0)20 555 0148",
}

export interface Link {
  label: string;
  path: string;
}

export interface Group {
  label: string;
  link?: string;
  path?: string;
  items?: Link[];
}
  
export const navbar = yaml(
  readFileSync("data/navbar.yaml", "utf8"),
) as Group[]; 

export function pagePath(id: string) {
  return id === "_index" ? "/" : `/${id.replace(/\/_index$/, "")}/`;
}