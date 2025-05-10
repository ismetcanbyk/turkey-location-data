import fs from "fs";
import path from "path";
import { Province } from "./interfaces";

export function readTurkeyLocationData(): Province[] {
  const filePath = path.join(__dirname, "../data/turkey_location_data.json");
  const rawData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(rawData);
}

export function readPlateCodes(): { [key: number]: string } {
  const filePath = path.join(__dirname, "../data/plate_codes.json");
  const rawData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(rawData);
  return Object.entries(data).reduce((acc, [key, value]) => {
    acc[Number(key)] = value as string;
    return acc;
  }, {} as { [key: number]: string });
}
