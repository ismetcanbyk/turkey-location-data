# Turkey Location Data

#### With this package, you can access the most up-to-date list of provinces, districts and neighborhoods in Turkey.

### Installation

To install the package, use npm:

```bash
npm install turkey-location-data
```

### Usage

Import the functions you need from the package:

```javascript
import {
  getAllProvinces,
  getDistrictsByProvinceApiId,
  getNeighborhoodsByDistrictApiId,
  getDistrictsByProvinceName,
} from "turkey-location-data";
```

<br>

### Methods

#### getAllProvinces

Fetches all provinces with their `apiId`:

```javascript
const provinces = getAllProvinces();
console.log(provinces);
```

##### Response

```javascript
[
  { name: 'Adana', apiId: 23 },
  { name: 'Adıyaman', apiId: 24 },
  { name: 'Afyonkarahisar', apiId: 25 },
  ...
];
```

<br>

#### getDistrictsByProvinceApiId

Fetches districts based on the province's `apiId`:

```javascript
const districts = getDistrictsByProvinceApiId(23);
console.log(districts);
```

##### Response

```javascript
[
  { name: 'Aladağ', apiId: 104 },
  { name: 'Ceyhan', apiId: 105 },
  { name: 'Çukurova', apiId: 6113 },
  ...
];
```

<br>

#### getNeighborhoodsByDistrictApiId

Fetches neighborhoods based on the district's `apiId`:

```javascript
const neighborhoods = getNeighborhoodsByDistrictApiId(104);
console.log(neighborhoods);
```

##### Response

```javascript
[
  'Akören',    'Akpınar',       'Başpınar',
  'Boztahta',  'Büyüksofulu',   'Ceritler',
  ...
];
```

<br>

#### getDistrictsByProvinceName

Fetches districts based on the province's `name`:

```javascript
const districts = getDistrictsByProvinceName("Adana");
console.log(districts);
```

##### Response

```javascript
[
  { name: 'Aladağ', apiId: 104 },
  { name: 'Ceyhan', apiId: 105 },
  { name: 'Çukurova', apiId: 6113 },
    ...
];
```

<br>

## Contact

### Feel free to contact me with any questions or suggestions.
