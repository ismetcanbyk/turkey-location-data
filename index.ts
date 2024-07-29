import {
  getAllProvinces,
  getDistrictsByProvinceApiId,
  getNeighborhoodsByDistrictApiId,
} from "./src/functions";

const provinceApiId = 80;
const districtApiId = 844;

console.log(
  `Province API ID ${provinceApiId} districts:`,
  getDistrictsByProvinceApiId(provinceApiId)
);
console.log(
  `District API ID ${districtApiId} neighborhoods:`,
  getNeighborhoodsByDistrictApiId(districtApiId)
);

console.log("All provinces:", getAllProvinces());
