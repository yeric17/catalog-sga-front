import type {Product } from "$lib/types"




const products: Product[] = [
    {
        "id": 1,
        "code": "KUKF",
        "name": "Mangostein",
        "type": 2,
        "location": "Miscellaneous",
        "brand": "Zillow Group, Inc.",
        "pictograms": [
            'GHS01'
        ],
        "supplier": "NASDAQ",
        "protections": [
            'EQ1',
            'EQ2',
        ]
    },
    {
        "id": 2,
        "code": "MA53",
        "name": "Everfresh Products",
        "type": 1,
        "location": "Axion",
        "brand": "Arbor Realty Trust",
        "pictograms": [
            'GHS03',
            'GHS04'
        ],
        "supplier": "NYSE",
        "protections": [
            'EQ2',
        ]
    },
    {
        "id": 3,
        "code": "YCOO",
        "name": "Tea - Lemon Green Tea",
        "type": 2,
        "location": "Consumer Services",
        "brand": "Playa Hotels & Resorts N.V.",
        "pictograms": [
            'GHS02',
            'GHS04',
            'GHS08'
        ],
        "supplier": "NASDAQ",
        "protections": [
            'EQ1',
            'EQ2',
            'EQ3'
        ]
    },
    {
        "id": 4,
        "code": "VTSH",
        "name": "Beans - Fava Fresh",
        "type": 1,
        "location": "Consumer Services",
        "brand": "Realty Income Corporation",
        "pictograms": [
            'GHS04',
            'GHS06',
            'GHS07',
            'GHS05'
        ],
        "supplier": "NYSE",
        "protections": [
            'EQ1',
            'EQ2',
        ]
    }
]

export const GetProducts = () => {
    return products
}
