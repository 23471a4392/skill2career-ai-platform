// Master Company Guides Registry
import { faangCompanyGuides } from "./faangCompanyGuides";
import { tier1StartupsGuides } from "./tier1StartupsGuides";
import { indianTechGiantsGuides } from "./indianTechGiantsGuides";
import { fintechEnterpriseGuides } from "./fintechEnterpriseGuides";
import { consultingTechGuides } from "./consultingTechGuides";

export const ALL_COMPANY_GUIDES = [
  faangCompanyGuides,
  tier1StartupsGuides,
  indianTechGiantsGuides,
  fintechEnterpriseGuides,
  consultingTechGuides
];

export function getCompanyGuidesByCategory(category: string) {
  return ALL_COMPANY_GUIDES.find(g => g.category === category) || ALL_COMPANY_GUIDES[0];
}
