# 🇹🇷 Turkey Location Data

[![NPM Version](https://img.shields.io/npm/v/turkey-location-data.svg)](https://www.npmjs.com/package/turkey-location-data)
![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](#)

Access Turkey's location data including provinces, districts, neighborhoods, and plate codes with ease.

---

## ✨ Features

- 📍 Get all provinces with their API IDs
- 🏘️ Get districts by province name or API ID
- 🏡 Get neighborhoods by district API ID
- 🚗 Get province name by plate code
- ⚙️ Written in TypeScript
- 🚀 Lightweight & fast

---

## 📦 Installation

```bash
npm install turkey-location-data
```

## 🔧 Usage

### 📍 Get All Provinces

```ts
import { getAllProvinces } from "turkey-location-data";

const provinces = getAllProvinces();
// Returns: [{ name: "İstanbul", apiId: 34 }, ...]
```

### 🏘️ Get Districts by Province

```ts
import {
  getDistrictsByProvinceName,
  getDistrictsByProvinceApiId,
} from "turkey-location-data";

// By province name
const districts = getDistrictsByProvinceName("İstanbul");
// Returns: [{ name: "Kadıköy", apiId: 1234 }, ...]

// By province API ID
const districts2 = getDistrictsByProvinceApiId(34);
// Returns: [{ name: "Kadıköy", apiId: 1234 }, ...]
```

### 🏡 Get Neighborhoods

```ts
import { getNeighborhoodsByDistrictApiId } from "turkey-location-data";

const neighborhoods = getNeighborhoodsByDistrictApiId(1234);
// Returns: ["Caferağa", "Fenerbahçe", ...]
```

### 🚗 Get Province by Plate Code

```ts
import { getProvinceNameByPlateCode } from "turkey-location-data";

const province = getProvinceNameByPlateCode(34); // "İstanbul"
```

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

Feel free to contact me with any questions or suggestions.

- 📧 Email: [ismetcanbyk@gmail.com](mailto:ismetcanbyk@gmail.com)
- 💬 Instagram: [@ismetcanbyk](https://www.instagram.com/ismetcanbyk/)
- 💬 LinkedIn: [ismetcanbyk](https://www.linkedin.com/in/ismetcanbyk/)
- 💬 GitHub: [ismetcanbyk](https://github.com/ismetcanbyk)
