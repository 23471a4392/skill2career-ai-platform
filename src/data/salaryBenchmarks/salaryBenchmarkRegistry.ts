// Master Salary Benchmarks Registry
import { indiaSalaryBenchmarks } from "./indiaSalaryBenchmarks";
import { globalSalaryBenchmarks } from "./globalSalaryBenchmarks";
import { remoteWorkSalaryBenchmarks } from "./remoteWorkSalaryBenchmarks";
import { equityAndBenefitsGuide } from "./equityAndBenefitsGuide";

export const ALL_SALARY_BENCHMARKS = [
  indiaSalaryBenchmarks,
  globalSalaryBenchmarks,
  remoteWorkSalaryBenchmarks,
  equityAndBenefitsGuide
];

export function getSalaryBenchmarkByRegion(region: string) {
  return ALL_SALARY_BENCHMARKS.find(s => s.region === region) || ALL_SALARY_BENCHMARKS[0];
}
