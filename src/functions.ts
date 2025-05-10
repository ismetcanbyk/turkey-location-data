import { Province } from "./interfaces";
import { readTurkeyLocationData, readPlateCodes } from "./data";

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

export function getDistrictsByProvinceName(
  provinceName: string
): { name: string; apiId: number }[] {
  const data: Province[] = readTurkeyLocationData();
  const normalizedProvinceName = normalizeName(provinceName);
  const province = data.find((p) => p.name === normalizedProvinceName);
  return province?.districts.map(({ name, apiId }) => ({ name, apiId })) ?? [];
}

function normalizeName(name: string): string {
  return (
    name.charAt(0).toLocaleUpperCase("tr-TR") +
    name.slice(1).toLocaleLowerCase("tr-TR")
  );
}

export function getProvinceNameByPlateCode(plateCode: number): string | null {
  const plateCodeMap = readPlateCodes();
  return plateCodeMap[plateCode] || null;
}
