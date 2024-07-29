import { Province, District, Neighborhood } from "./interfaces";
import { readTurkeyLocationData } from "./data";

export function getAllProvinces(): { name: string; apiId: number }[] {
  const data: Province[] = readTurkeyLocationData();
  return data.map(({ name, apiId }) => ({ name, apiId }));
}

export function getDistrictsByProvinceApiId(
  provinceApiId: number
): { name: string; apiId: number }[] {
  const data: Province[] = readTurkeyLocationData();
  const province = data.find((p) => p.apiId === provinceApiId);
  return province?.districts.map(({ name, apiId }) => ({ name, apiId })) ?? [];
}

export function getNeighborhoodsByDistrictApiId(
  districtApiId: number
): string[] {
  const data: Province[] = readTurkeyLocationData();
  for (const province of data) {
    const district = province.districts.find((d) => d.apiId === districtApiId);
    if (district) {
      return district.neighborhoods.map((neighborhood) => neighborhood.name);
    }
  }
  return [];
}
