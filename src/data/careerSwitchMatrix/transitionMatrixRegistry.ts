// Master Career Switch Transition Registry
import { mechanicalToSoftwareBridge } from "./mechanicalToSoftwareBridge";
import { civilToDataEngineeringBridge } from "./civilToDataEngineeringBridge";
import { electricalToEmbeddedCloudBridge } from "./electricalToEmbeddedCloudBridge";
import { bcomFintechBridge } from "./bcomFintechBridge";
import { bcaFullstackBridge } from "./bcaFullstackBridge";
import { artsUiUxBridge } from "./artsUiUxBridge";
import { salesToProductBridge } from "./salesToProductBridge";
import { supportToDevopsBridge } from "./supportToDevopsBridge";
import { diplomaToDeveloperBridge } from "./diplomaToDeveloperBridge";
import { nonTechToTechMasterBridge } from "./nonTechToTechMasterBridge";

export const ALL_CAREER_SWITCH_BRIDGES = [
  mechanicalToSoftwareBridge,
  civilToDataEngineeringBridge,
  electricalToEmbeddedCloudBridge,
  bcomFintechBridge,
  bcaFullstackBridge,
  artsUiUxBridge,
  salesToProductBridge,
  supportToDevopsBridge,
  diplomaToDeveloperBridge,
  nonTechToTechMasterBridge
];

export function getBridgeByBackgroundAndTarget(sourceBg: string, targetRole: string) {
  return ALL_CAREER_SWITCH_BRIDGES.find(
    b => b.sourceBackground.toLowerCase() === sourceBg.toLowerCase() ||
         b.targetRole.toLowerCase() === targetRole.toLowerCase()
  ) || ALL_CAREER_SWITCH_BRIDGES[0];
}
