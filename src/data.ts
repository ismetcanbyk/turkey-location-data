import fs from "fs";
import path from "path";
import { Province } from "./interfaces";

export function readTurkeyLocationData(): Province[] {
  const filePath = path.join(__dirname, "../data/turkey_location_data.json");
  const rawData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(rawData);
}
