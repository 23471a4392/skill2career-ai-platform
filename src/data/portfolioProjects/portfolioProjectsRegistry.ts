// Master Portfolio Projects Registry
import { frontendPortfolioProjects } from "./frontendPortfolioProjects";
import { backendPortfolioProjects } from "./backendPortfolioProjects";
import { fullstackPortfolioProjects } from "./fullstackPortfolioProjects";
import { aiMlPortfolioProjects } from "./aiMlPortfolioProjects";
import { dataEngPortfolioProjects } from "./dataEngPortfolioProjects";
import { devopsPortfolioProjects } from "./devopsPortfolioProjects";
import { mobilePortfolioProjects } from "./mobilePortfolioProjects";

export const ALL_PORTFOLIO_COLLECTIONS = [
  frontendPortfolioProjects,
  backendPortfolioProjects,
  fullstackPortfolioProjects,
  aiMlPortfolioProjects,
  dataEngPortfolioProjects,
  devopsPortfolioProjects,
  mobilePortfolioProjects
];

export function getPortfolioProjectsByDomain(domain: string) {
  return ALL_PORTFOLIO_COLLECTIONS.find(p => p.domain === domain) || ALL_PORTFOLIO_COLLECTIONS[0];
}
