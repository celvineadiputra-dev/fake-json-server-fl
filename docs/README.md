---
title: test
language_tabs:
    - shell: Shell
    - http: HTTP
    - javascript: JavaScript
    - ruby: Ruby
    - python: Python
    - php: PHP
    - java: Java
    - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: '@tarslib/widdershins v4.0.30'
---

# test

Base URLs:

- <a href="http://localhost:3006">FakeJsonServerFL: http://localhost:3006</a>

# Authentication

# Default

## GET Check Service

GET /BASE_URL/up

> Response Examples

> 200 Response

```json
{
    "meta": {
        "status": 200,
        "message": "Server up"
    },
    "data": null
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

## GET Get Uploaded File

GET /BASE_URL/storage/uploads/FILENAME.png

> Response Examples

> 200 Response

```json
{}
```

> 404 Response

```json
{
    "meta": {
        "status": 404,
        "message": "File not found"
    },
    "data": null
}
```

### Responses

| HTTP Status Code | Meaning                                                        | Description | Data schema |
| ---------------- | -------------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | none        | Inline      |
| 404              | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | none        | Inline      |

### Responses Data Schema

HTTP Status Code **404**

| Name       | Type    | Required | Restrictions | Title | description |
| ---------- | ------- | -------- | ------------ | ----- | ----------- |
| » meta     | object  | true     | none         |       | none        |
| »» status  | integer | true     | none         |       | none        |
| »» message | string  | true     | none         |       | none        |
| » data     | null    | true     | none         |       | none        |

# Auth

## POST SignIn

POST /BASE_URL/api/auth/signIn

> Body Parameters

```json
{
    "email": "string",
    "password": "string"
}
```

### Params

| Name         | Location | Type   | Required | Description |
| ------------ | -------- | ------ | -------- | ----------- |
| Accept       | header   | string | no       | none        |
| Content-Type | header   | string | no       | none        |
| body         | body     | object | no       | none        |
| » email      | body     | string | yes      | none        |
| » password   | body     | string | yes      | none        |

> Response Examples

> 200 Response

```json
{
    "meta": {
        "status": 200,
        "message": "Login successful"
    },
    "data": {
        "user": {
            "email": "example@mail.com",
            "user_name": "Fake API JSON",
            "profile_picture": null
        },
        "token": "TOKEN_EXAMPLE_FAKE_JSON_HAPPY_LEARN_example@mail.com"
    }
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

## POST SignUp

POST /BASE_URL/api/auth/signUp

> Body Parameters

```json
{
    "user_name": "string",
    "email": "string",
    "password": "string"
}
```

### Params

| Name         | Location | Type   | Required | Description |
| ------------ | -------- | ------ | -------- | ----------- |
| Accept       | header   | string | no       | none        |
| Content-Type | header   | string | no       | none        |
| body         | body     | object | no       | none        |
| » user_name  | body     | string | yes      | none        |
| » email      | body     | string | yes      | none        |
| » password   | body     | string | yes      | none        |

> Response Examples

> 200 Response

```json
{
    "meta": {
        "status": 201,
        "message": "Sign up successful"
    },
    "data": null
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

# Public

## GET Get Data Paginate

GET /BASE_URL/api/public/products

### Params

| Name | Location | Type   | Required | Description |
| ---- | -------- | ------ | -------- | ----------- |
| page | query    | string | yes      | none        |
| size | query    | string | yes      | none        |

> Response Examples

> 200 Response

```json
{
    "meta": {
        "status": 200,
        "message": "Paginate Response"
    },
    "data": {
        "page": 1,
        "size": 5,
        "total": 50,
        "totalPages": 10,
        "data": [
            {
                "id": "50",
                "product_name": "Memory Foam Pillow",
                "price": 480000,
                "image_url": "https://picsum.photos/seed/50/400/300",
                "is_active": true
            },
            {
                "id": "49",
                "product_name": "Webcam 1080p with Microphone",
                "price": 670000,
                "image_url": "https://picsum.photos/seed/49/400/300",
                "is_active": true
            },
            {
                "id": "48",
                "product_name": "Cast Iron Skillet",
                "price": 580000,
                "image_url": "https://picsum.photos/seed/48/400/300",
                "is_active": false
            },
            {
                "id": "47",
                "product_name": "Jigsaw Puzzle 1000 Pieces",
                "price": 250000,
                "image_url": "https://picsum.photos/seed/47/400/300",
                "is_active": true
            },
            {
                "id": "46",
                "product_name": "Professional Hair Dryer",
                "price": 850000,
                "image_url": "https://picsum.photos/seed/46/400/300",
                "is_active": true
            }
        ]
    }
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

## POST Add New Data Without File Upload

POST /BASE_URL/api/public/products

> Body Parameters

```json
{
    "product_name": "string",
    "price": "string",
    "image_url": "string",
    "is_active": true
}
```

### Params

| Name           | Location | Type    | Required | Description |
| -------------- | -------- | ------- | -------- | ----------- |
| body           | body     | object  | no       | none        |
| » product_name | body     | string  | yes      | none        |
| » price        | body     | string  | yes      | none        |
| » image_url    | body     | string  | yes      | none        |
| » is_active    | body     | boolean | yes      | none        |

> Response Examples

> 200 Response

```json
{
    "meta": {
        "status": 200,
        "message": "Success create new products"
    },
    "data": {
        "product_name": "Licensed Concrete Soap",
        "price": 175.4,
        "image_url": "https://via.placeholder.com/272x665/dfde32/58bd98.png",
        "is_active": false,
        "id": "32511d9a-d6b0-4495-a447-633a25d59f53"
    }
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

## GET Get Data

GET /BASE_URL/api/public/products/all

> Response Examples

> 200 Response

```json
{
    "meta": {
        "status": 200,
        "message": "List products"
    },
    "data": [
        {
            "id": "1",
            "product_name": "Acoustic Guitar",
            "price": 1499000,
            "image_url": "https://picsum.photos/seed/1/400/300",
            "is_active": true
        },
        {
            "id": "2",
            "product_name": "Smart LED TV 42-inch",
            "price": 4250000,
            "image_url": "https://picsum.photos/seed/2/400/300",
            "is_active": true
        },
        {
            "id": "3",
            "product_name": "Wireless Bluetooth Headphones",
            "price": 799000,
            "image_url": "https://picsum.photos/seed/3/400/300",
            "is_active": false
        },
        {
            "id": "4",
            "product_name": "Espresso Coffee Machine",
            "price": 2100000,
            "image_url": "https://picsum.photos/seed/4/400/300",
            "is_active": true
        },
        {
            "id": "5",
            "product_name": "Ergonomic Office Chair",
            "price": 1850000,
            "image_url": "https://picsum.photos/seed/5/400/300",
            "is_active": true
        },
        {
            "id": "6",
            "product_name": "Mountain Bike 27-speed",
            "price": 3500000,
            "image_url": "https://picsum.photos/seed/6/400/300",
            "is_active": true
        },
        {
            "id": "7",
            "product_name": "Portable Power Bank 20000mAh",
            "price": 450000,
            "image_url": "https://picsum.photos/seed/7/400/300",
            "is_active": false
        },
        {
            "id": "8",
            "product_name": "Digital Drawing Tablet",
            "price": 1100000,
            "image_url": "https://picsum.photos/seed/8/400/300",
            "is_active": true
        },
        {
            "id": "9",
            "product_name": "Yoga Mat Premium",
            "price": 250000,
            "image_url": "https://picsum.photos/seed/9/400/300",
            "is_active": true
        },
        {
            "id": "10",
            "product_name": "Hard Cover Notebook Set",
            "price": 150000,
            "image_url": "https://picsum.photos/seed/10/400/300",
            "is_active": true
        },
        {
            "id": "11",
            "product_name": "Stainless Steel Water Bottle",
            "price": 180000,
            "image_url": "https://picsum.photos/seed/11/400/300",
            "is_active": true
        },
        {
            "id": "12",
            "product_name": "Air Purifier with HEPA Filter",
            "price": 1600000,
            "image_url": "https://picsum.photos/seed/12/400/300",
            "is_active": true
        },
        {
            "id": "13",
            "product_name": "Mechanical Gaming Keyboard",
            "price": 950000,
            "image_url": "https://picsum.photos/seed/13/400/300",
            "is_active": false
        },
        {
            "id": "14",
            "product_name": "Electric Standing Desk",
            "price": 4800000,
            "image_url": "https://picsum.photos/seed/14/400/300",
            "is_active": true
        },
        {
            "id": "15",
            "product_name": "Smartwatch Fitness Tracker",
            "price": 1200000,
            "image_url": "https://picsum.photos/seed/15/400/300",
            "is_active": true
        },
        {
            "id": "16",
            "product_name": "Blender for Smoothies",
            "price": 600000,
            "image_url": "https://picsum.photos/seed/16/400/300",
            "is_active": true
        },
        {
            "id": "17",
            "product_name": "Camping Tent for 4 Persons",
            "price": 850000,
            "image_url": "https://picsum.photos/seed/17/400/300",
            "is_active": true
        },
        {
            "id": "18",
            "product_name": "Drone with 4K Camera",
            "price": 5500000,
            "image_url": "https://picsum.photos/seed/18/400/300",
            "is_active": false
        },
        {
            "id": "19",
            "product_name": "Leather Wallet for Men",
            "price": 350000,
            "image_url": "https://picsum.photos/seed/19/400/300",
            "is_active": true
        },
        {
            "id": "20",
            "product_name": "Noise Cancelling Earbuds",
            "price": 1900000,
            "image_url": "https://picsum.photos/seed/20/400/300",
            "is_active": true
        },
        {
            "id": "21",
            "product_name": "Ceramic Dinnerware Set",
            "price": 1150000,
            "image_url": "https://picsum.photos/seed/21/400/300",
            "is_active": true
        },
        {
            "id": "22",
            "product_name": "Running Shoes for Women",
            "price": 999000,
            "image_url": "https://picsum.photos/seed/22/400/300",
            "is_active": true
        },
        {
            "id": "23",
            "product_name": "Vintage Desk Lamp",
            "price": 450000,
            "image_url": "https://picsum.photos/seed/23/400/300",
            "is_active": true
        },
        {
            "id": "24",
            "product_name": "External SSD 1TB",
            "price": 1750000,
            "image_url": "https://picsum.photos/seed/24/400/300",
            "is_active": false
        },
        {
            "id": "25",
            "product_name": "Digital Kitchen Scale",
            "price": 220000,
            "image_url": "https://picsum.photos/seed/25/400/300",
            "is_active": true
        },
        {
            "id": "26",
            "product_name": "Home Security Camera",
            "price": 890000,
            "image_url": "https://picsum.photos/seed/26/400/300",
            "is_active": true
        },
        {
            "id": "27",
            "product_name": "Cordless Vacuum Cleaner",
            "price": 2900000,
            "image_url": "https://picsum.photos/seed/27/400/300",
            "is_active": true
        },
        {
            "id": "28",
            "product_name": "Scented Candle Set",
            "price": 310000,
            "image_url": "https://picsum.photos/seed/28/400/300",
            "is_active": true
        },
        {
            "id": "29",
            "product_name": "Travel Backpack 40L",
            "price": 750000,
            "image_url": "https://picsum.photos/seed/29/400/300",
            "is_active": false
        },
        {
            "id": "30",
            "product_name": "Portable Bluetooth Speaker",
            "price": 650000,
            "image_url": "https://picsum.photos/seed/30/400/300",
            "is_active": true
        },
        {
            "id": "31",
            "product_name": "Electric Kettle 1.7L",
            "price": 380000,
            "image_url": "https://picsum.photos/seed/31/400/300",
            "is_active": true
        },
        {
            "id": "32",
            "product_name": "Gaming Mouse Pad XXL",
            "price": 290000,
            "image_url": "https://picsum.photos/seed/32/400/300",
            "is_active": true
        },
        {
            "id": "33",
            "product_name": "Air Fryer 5.5L",
            "price": 1300000,
            "image_url": "https://picsum.photos/seed/33/400/300",
            "is_active": true
        },
        {
            "id": "34",
            "product_name": "Set of 5 Resistance Bands",
            "price": 195000,
            "image_url": "https://picsum.photos/seed/34/400/300",
            "is_active": true
        },
        {
            "id": "35",
            "product_name": "Ultra-Wide Curved Monitor 34-inch",
            "price": 7500000,
            "image_url": "https://picsum.photos/seed/35/400/300",
            "is_active": true
        },
        {
            "id": "36",
            "product_name": "Weighted Blanket 7kg",
            "price": 1100000,
            "image_url": "https://picsum.photos/seed/36/400/300",
            "is_active": false
        },
        {
            "id": "37",
            "product_name": "Fountain Pen with Ink Bottle",
            "price": 550000,
            "image_url": "https://picsum.photos/seed/37/400/300",
            "is_active": true
        },
        {
            "id": "38",
            "product_name": "Waterproof Action Camera",
            "price": 2200000,
            "image_url": "https://picsum.photos/seed/38/400/300",
            "is_active": true
        },
        {
            "id": "39",
            "product_name": "Robot Vacuum Cleaner",
            "price": 4100000,
            "image_url": "https://picsum.photos/seed/39/400/300",
            "is_active": true
        },
        {
            "id": "40",
            "product_name": "Insulated Lunch Box",
            "price": 280000,
            "image_url": "https://picsum.photos/seed/40/400/300",
            "is_active": true
        },
        {
            "id": "41",
            "product_name": "Foldable Laptop Stand",
            "price": 320000,
            "image_url": "https://picsum.photos/seed/41/400/300",
            "is_active": true
        },
        {
            "id": "42",
            "product_name": "USB C Hub Multiport Adapter",
            "price": 490000,
            "image_url": "https://picsum.photos/seed/42/400/300",
            "is_active": false
        },
        {
            "id": "43",
            "product_name": "Electric Toothbrush",
            "price": 720000,
            "image_url": "https://picsum.photos/seed/43/400/300",
            "is_active": true
        },
        {
            "id": "44",
            "product_name": "Cotton Bath Towel Set",
            "price": 400000,
            "image_url": "https://picsum.photos/seed/44/400/300",
            "is_active": true
        },
        {
            "id": "45",
            "product_name": "Indoor Herb Garden Kit",
            "price": 600000,
            "image_url": "https://picsum.photos/seed/45/400/300",
            "is_active": true
        },
        {
            "id": "46",
            "product_name": "Professional Hair Dryer",
            "price": 850000,
            "image_url": "https://picsum.photos/seed/46/400/300",
            "is_active": true
        },
        {
            "id": "47",
            "product_name": "Jigsaw Puzzle 1000 Pieces",
            "price": 250000,
            "image_url": "https://picsum.photos/seed/47/400/300",
            "is_active": true
        },
        {
            "id": "48",
            "product_name": "Cast Iron Skillet",
            "price": 580000,
            "image_url": "https://picsum.photos/seed/48/400/300",
            "is_active": false
        },
        {
            "id": "49",
            "product_name": "Webcam 1080p with Microphone",
            "price": 670000,
            "image_url": "https://picsum.photos/seed/49/400/300",
            "is_active": true
        },
        {
            "id": "50",
            "product_name": "Memory Foam Pillow",
            "price": 480000,
            "image_url": "https://picsum.photos/seed/50/400/300",
            "is_active": true
        }
    ]
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

## GET Search Paginate

GET /BASE_URL/api/public/products/search/product_name

### Params

| Name | Location | Type   | Required | Description |
| ---- | -------- | ------ | -------- | ----------- |
| q    | query    | string | yes      | none        |

> Response Examples

> 200 Response

```json
{
    "meta": {
        "status": 200,
        "message": "Paginate Response"
    },
    "data": {
        "page": 1,
        "size": 5,
        "total": 1,
        "totalPages": 1,
        "data": [
            {
                "id": "2",
                "product_name": "Smart LED TV 42-inch",
                "price": 4250000,
                "image_url": "https://picsum.photos/seed/2/400/300",
                "is_active": true
            }
        ]
    }
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

## GET Get By Id

GET /BASE_URL/api/public/products/1

> Response Examples

> 200 Response

```json
{
    "meta": {
        "status": 200,
        "message": "Paginate Response"
    },
    "data": [
        {
            "id": "1",
            "product_name": "Acoustic Guitar",
            "price": 1499000,
            "image_url": "https://picsum.photos/seed/1/400/300",
            "is_active": true
        }
    ]
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

## PUT Update Data Without File Upload

PUT /BASE_URL/api/public/products/1

> Body Parameters

```json
{
    "product_name": "string",
    "price": "string",
    "image_url": "string",
    "is_active": true
}
```

### Params

| Name           | Location | Type    | Required | Description |
| -------------- | -------- | ------- | -------- | ----------- |
| body           | body     | object  | no       | none        |
| » product_name | body     | string  | yes      | none        |
| » price        | body     | string  | yes      | none        |
| » image_url    | body     | string  | yes      | none        |
| » is_active    | body     | boolean | yes      | none        |

> Response Examples

> 200 Response

```json
{
    "meta": {
        "status": 200,
        "message": "Item updated successfully"
    },
    "data": null
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

## DELETE Delete Data

DELETE /BASE_URL/api/public/products/1

> Response Examples

> 200 Response

```json
{
    "meta": {
        "status": 200,
        "message": "Item deleted successfully"
    },
    "data": null
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

## POST Add New Data With File Upload

POST /BASE_URL/api/public/canStoreFile/products

> Body Parameters

```yaml
product_name: '{{$commerce.productName}}'
price: '{{$commerce.price}}'
image: ''
is_active: 'true'
```

### Params

| Name           | Location | Type           | Required | Description |
| -------------- | -------- | -------------- | -------- | ----------- |
| body           | body     | object         | no       | none        |
| » product_name | body     | string         | no       | none        |
| » price        | body     | string         | no       | none        |
| » image        | body     | string(binary) | no       | none        |
| » is_active    | body     | boolean        | no       | none        |

> Response Examples

> 200 Response

```json
{
    "meta": {
        "status": 200,
        "message": "Success create new products"
    },
    "data": {
        "id": "15fe5424-8a33-4b90-93aa-a055ac607ccd",
        "product_name": "Handmade Plastic Table",
        "price": 290.39,
        "is_active": true,
        "image_url": "storage/uploads/3dcb02c2-e09c-4481-b167-a1afd01aed37.png"
    }
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

## PUT Update Data With File Upload

PUT /BASE_URL/api/public/canStoreFile/products/1

> Body Parameters

```yaml
product_name: '{{$commerce.productName}}'
price: '{{$commerce.price}}'
image: ''
is_active: 'true'
```

### Params

| Name           | Location | Type           | Required | Description |
| -------------- | -------- | -------------- | -------- | ----------- |
| body           | body     | object         | no       | none        |
| » product_name | body     | string         | no       | none        |
| » price        | body     | string         | no       | none        |
| » image        | body     | string(binary) | no       | none        |
| » is_active    | body     | boolean        | no       | none        |

> Response Examples

> 200 Response

```json
{
    "meta": {
        "status": 200,
        "message": "Item updated successfully"
    },
    "data": null
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

# Protected

## DELETE Delete Data

DELETE /BASE_URL/api/protected/products/1

### Params

| Name          | Location | Type   | Required | Description |
| ------------- | -------- | ------ | -------- | ----------- |
| Authorization | header   | string | no       | none        |

> Response Examples

> 200 Response

```json
{
    "meta": {
        "status": 200,
        "message": "Item deleted successfully"
    },
    "data": null
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

## PUT Update Data Without File Upload

PUT /BASE_URL/api/protected/products/1

> Body Parameters

```json
{
    "product_name": "string",
    "price": "string",
    "image_url": "string",
    "is_active": true
}
```

### Params

| Name           | Location | Type    | Required | Description |
| -------------- | -------- | ------- | -------- | ----------- |
| Authorization  | header   | string  | no       | none        |
| body           | body     | object  | no       | none        |
| » product_name | body     | string  | yes      | none        |
| » price        | body     | string  | yes      | none        |
| » image_url    | body     | string  | yes      | none        |
| » is_active    | body     | boolean | yes      | none        |

> Response Examples

> 200 Response

```json
{
    "meta": {
        "status": 404,
        "message": "Item not found"
    },
    "data": null
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

## GET Get By Id

GET /BASE_URL/api/protected/products/1

### Params

| Name          | Location | Type   | Required | Description |
| ------------- | -------- | ------ | -------- | ----------- |
| Authorization | header   | string | no       | none        |

> Response Examples

> 200 Response

```json
{
    "meta": {
        "status": 200,
        "message": "Paginate Response"
    },
    "data": []
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

## POST Add New Data With File Upload

POST /BASE_URL/api/protected/canStoreFile/products

> Body Parameters

```yaml
product_name: '{{$commerce.productName}}'
price: '{{$commerce.price}}'
image: ''
is_active: 'true'
```

### Params

| Name           | Location | Type           | Required | Description |
| -------------- | -------- | -------------- | -------- | ----------- |
| Authorization  | header   | string         | no       | none        |
| body           | body     | object         | no       | none        |
| » product_name | body     | string         | no       | none        |
| » price        | body     | string         | no       | none        |
| » image        | body     | string(binary) | no       | none        |
| » is_active    | body     | boolean        | no       | none        |

> Response Examples

> 200 Response

```json
{
    "meta": {
        "status": 401,
        "message": "Unauthorized"
    },
    "data": null
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

## POST Add New Data Without File Upload

POST /BASE_URL/api/protected/products

> Body Parameters

```json
{
    "product_name": "string",
    "price": "string",
    "image_url": "string",
    "is_active": true
}
```

### Params

| Name           | Location | Type    | Required | Description |
| -------------- | -------- | ------- | -------- | ----------- |
| Authorization  | header   | string  | no       | none        |
| body           | body     | object  | no       | none        |
| » product_name | body     | string  | yes      | none        |
| » price        | body     | string  | yes      | none        |
| » image_url    | body     | string  | yes      | none        |
| » is_active    | body     | boolean | yes      | none        |

> Response Examples

> 200 Response

```json
{
    "meta": {
        "status": 200,
        "message": "Success create new products"
    },
    "data": {
        "product_name": "Licensed Concrete Soap",
        "price": 175.4,
        "image_url": "https://via.placeholder.com/272x665/dfde32/58bd98.png",
        "is_active": false,
        "id": "d96dad47-5ee3-4c6b-904d-49f1204dd178"
    }
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

## GET Get Data Paginate

GET /BASE_URL/api/protected/products

### Params

| Name          | Location | Type   | Required | Description |
| ------------- | -------- | ------ | -------- | ----------- |
| page          | query    | string | yes      | none        |
| size          | query    | string | yes      | none        |
| Authorization | header   | string | no       | none        |

> Response Examples

> 200 Response

```json
{
    "meta": {
        "status": 200,
        "message": "Paginate Response"
    },
    "data": {
        "page": 1,
        "size": 5,
        "total": 53,
        "totalPages": 11,
        "data": [
            {
                "id": "46b6d4c7-16f7-41aa-b4a9-f4176a6fd874",
                "product_name": "Refined Cotton Sausages",
                "price": 752.85,
                "is_active": true,
                "image_url": "storage/uploads/a9ba2e05-b56a-42a9-823d-87eb019e3433.png"
            },
            {
                "id": "15fe5424-8a33-4b90-93aa-a055ac607ccd",
                "product_name": "Handmade Plastic Table",
                "price": 290.39,
                "is_active": true,
                "image_url": "storage/uploads/3dcb02c2-e09c-4481-b167-a1afd01aed37.png"
            },
            {
                "product_name": "Licensed Concrete Soap",
                "price": 175.4,
                "image_url": "https://via.placeholder.com/272x665/dfde32/58bd98.png",
                "is_active": false,
                "id": "a6bb8376-1516-44ff-906e-dcfab990a8eb"
            },
            {
                "product_name": "Licensed Concrete Soap",
                "price": 175.4,
                "image_url": "https://via.placeholder.com/272x665/dfde32/58bd98.png",
                "is_active": false,
                "id": "32511d9a-d6b0-4495-a447-633a25d59f53"
            },
            {
                "id": "50",
                "product_name": "Memory Foam Pillow",
                "price": 480000,
                "image_url": "https://picsum.photos/seed/50/400/300",
                "is_active": true
            }
        ]
    }
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

## GET Search Paginate

GET /BASE_URL/api/protected/products/search/product_name

### Params

| Name          | Location | Type   | Required | Description |
| ------------- | -------- | ------ | -------- | ----------- |
| q             | query    | string | yes      | none        |
| Authorization | header   | string | no       | none        |

> Response Examples

> 200 Response

```json
{
    "meta": {
        "status": 200,
        "message": "Paginate Response"
    },
    "data": {
        "page": 1,
        "size": 5,
        "total": 1,
        "totalPages": 1,
        "data": [
            {
                "id": "2",
                "product_name": "Smart LED TV 42-inch",
                "price": 4250000,
                "image_url": "https://picsum.photos/seed/2/400/300",
                "is_active": true
            }
        ]
    }
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

## GET Get Data

GET /BASE_URL/api/protected/products/all

### Params

| Name          | Location | Type   | Required | Description |
| ------------- | -------- | ------ | -------- | ----------- |
| Authorization | header   | string | no       | none        |

> Response Examples

> 200 Response

```json
{
    "meta": {
        "status": 200,
        "message": "List products"
    },
    "data": [
        {
            "id": "2",
            "product_name": "Smart LED TV 42-inch",
            "price": 4250000,
            "image_url": "https://picsum.photos/seed/2/400/300",
            "is_active": true
        },
        {
            "id": "3",
            "product_name": "Wireless Bluetooth Headphones",
            "price": 799000,
            "image_url": "https://picsum.photos/seed/3/400/300",
            "is_active": false
        },
        {
            "id": "4",
            "product_name": "Espresso Coffee Machine",
            "price": 2100000,
            "image_url": "https://picsum.photos/seed/4/400/300",
            "is_active": true
        },
        {
            "id": "5",
            "product_name": "Ergonomic Office Chair",
            "price": 1850000,
            "image_url": "https://picsum.photos/seed/5/400/300",
            "is_active": true
        },
        {
            "id": "6",
            "product_name": "Mountain Bike 27-speed",
            "price": 3500000,
            "image_url": "https://picsum.photos/seed/6/400/300",
            "is_active": true
        },
        {
            "id": "7",
            "product_name": "Portable Power Bank 20000mAh",
            "price": 450000,
            "image_url": "https://picsum.photos/seed/7/400/300",
            "is_active": false
        },
        {
            "id": "8",
            "product_name": "Digital Drawing Tablet",
            "price": 1100000,
            "image_url": "https://picsum.photos/seed/8/400/300",
            "is_active": true
        },
        {
            "id": "9",
            "product_name": "Yoga Mat Premium",
            "price": 250000,
            "image_url": "https://picsum.photos/seed/9/400/300",
            "is_active": true
        },
        {
            "id": "10",
            "product_name": "Hard Cover Notebook Set",
            "price": 150000,
            "image_url": "https://picsum.photos/seed/10/400/300",
            "is_active": true
        },
        {
            "id": "11",
            "product_name": "Stainless Steel Water Bottle",
            "price": 180000,
            "image_url": "https://picsum.photos/seed/11/400/300",
            "is_active": true
        },
        {
            "id": "12",
            "product_name": "Air Purifier with HEPA Filter",
            "price": 1600000,
            "image_url": "https://picsum.photos/seed/12/400/300",
            "is_active": true
        },
        {
            "id": "13",
            "product_name": "Mechanical Gaming Keyboard",
            "price": 950000,
            "image_url": "https://picsum.photos/seed/13/400/300",
            "is_active": false
        },
        {
            "id": "14",
            "product_name": "Electric Standing Desk",
            "price": 4800000,
            "image_url": "https://picsum.photos/seed/14/400/300",
            "is_active": true
        },
        {
            "id": "15",
            "product_name": "Smartwatch Fitness Tracker",
            "price": 1200000,
            "image_url": "https://picsum.photos/seed/15/400/300",
            "is_active": true
        },
        {
            "id": "16",
            "product_name": "Blender for Smoothies",
            "price": 600000,
            "image_url": "https://picsum.photos/seed/16/400/300",
            "is_active": true
        },
        {
            "id": "17",
            "product_name": "Camping Tent for 4 Persons",
            "price": 850000,
            "image_url": "https://picsum.photos/seed/17/400/300",
            "is_active": true
        },
        {
            "id": "18",
            "product_name": "Drone with 4K Camera",
            "price": 5500000,
            "image_url": "https://picsum.photos/seed/18/400/300",
            "is_active": false
        },
        {
            "id": "19",
            "product_name": "Leather Wallet for Men",
            "price": 350000,
            "image_url": "https://picsum.photos/seed/19/400/300",
            "is_active": true
        },
        {
            "id": "20",
            "product_name": "Noise Cancelling Earbuds",
            "price": 1900000,
            "image_url": "https://picsum.photos/seed/20/400/300",
            "is_active": true
        },
        {
            "id": "21",
            "product_name": "Ceramic Dinnerware Set",
            "price": 1150000,
            "image_url": "https://picsum.photos/seed/21/400/300",
            "is_active": true
        },
        {
            "id": "22",
            "product_name": "Running Shoes for Women",
            "price": 999000,
            "image_url": "https://picsum.photos/seed/22/400/300",
            "is_active": true
        },
        {
            "id": "23",
            "product_name": "Vintage Desk Lamp",
            "price": 450000,
            "image_url": "https://picsum.photos/seed/23/400/300",
            "is_active": true
        },
        {
            "id": "24",
            "product_name": "External SSD 1TB",
            "price": 1750000,
            "image_url": "https://picsum.photos/seed/24/400/300",
            "is_active": false
        },
        {
            "id": "25",
            "product_name": "Digital Kitchen Scale",
            "price": 220000,
            "image_url": "https://picsum.photos/seed/25/400/300",
            "is_active": true
        },
        {
            "id": "26",
            "product_name": "Home Security Camera",
            "price": 890000,
            "image_url": "https://picsum.photos/seed/26/400/300",
            "is_active": true
        },
        {
            "id": "27",
            "product_name": "Cordless Vacuum Cleaner",
            "price": 2900000,
            "image_url": "https://picsum.photos/seed/27/400/300",
            "is_active": true
        },
        {
            "id": "28",
            "product_name": "Scented Candle Set",
            "price": 310000,
            "image_url": "https://picsum.photos/seed/28/400/300",
            "is_active": true
        },
        {
            "id": "29",
            "product_name": "Travel Backpack 40L",
            "price": 750000,
            "image_url": "https://picsum.photos/seed/29/400/300",
            "is_active": false
        },
        {
            "id": "30",
            "product_name": "Portable Bluetooth Speaker",
            "price": 650000,
            "image_url": "https://picsum.photos/seed/30/400/300",
            "is_active": true
        },
        {
            "id": "31",
            "product_name": "Electric Kettle 1.7L",
            "price": 380000,
            "image_url": "https://picsum.photos/seed/31/400/300",
            "is_active": true
        },
        {
            "id": "32",
            "product_name": "Gaming Mouse Pad XXL",
            "price": 290000,
            "image_url": "https://picsum.photos/seed/32/400/300",
            "is_active": true
        },
        {
            "id": "33",
            "product_name": "Air Fryer 5.5L",
            "price": 1300000,
            "image_url": "https://picsum.photos/seed/33/400/300",
            "is_active": true
        },
        {
            "id": "34",
            "product_name": "Set of 5 Resistance Bands",
            "price": 195000,
            "image_url": "https://picsum.photos/seed/34/400/300",
            "is_active": true
        },
        {
            "id": "35",
            "product_name": "Ultra-Wide Curved Monitor 34-inch",
            "price": 7500000,
            "image_url": "https://picsum.photos/seed/35/400/300",
            "is_active": true
        },
        {
            "id": "36",
            "product_name": "Weighted Blanket 7kg",
            "price": 1100000,
            "image_url": "https://picsum.photos/seed/36/400/300",
            "is_active": false
        },
        {
            "id": "37",
            "product_name": "Fountain Pen with Ink Bottle",
            "price": 550000,
            "image_url": "https://picsum.photos/seed/37/400/300",
            "is_active": true
        },
        {
            "id": "38",
            "product_name": "Waterproof Action Camera",
            "price": 2200000,
            "image_url": "https://picsum.photos/seed/38/400/300",
            "is_active": true
        },
        {
            "id": "39",
            "product_name": "Robot Vacuum Cleaner",
            "price": 4100000,
            "image_url": "https://picsum.photos/seed/39/400/300",
            "is_active": true
        },
        {
            "id": "40",
            "product_name": "Insulated Lunch Box",
            "price": 280000,
            "image_url": "https://picsum.photos/seed/40/400/300",
            "is_active": true
        },
        {
            "id": "41",
            "product_name": "Foldable Laptop Stand",
            "price": 320000,
            "image_url": "https://picsum.photos/seed/41/400/300",
            "is_active": true
        },
        {
            "id": "42",
            "product_name": "USB C Hub Multiport Adapter",
            "price": 490000,
            "image_url": "https://picsum.photos/seed/42/400/300",
            "is_active": false
        },
        {
            "id": "43",
            "product_name": "Electric Toothbrush",
            "price": 720000,
            "image_url": "https://picsum.photos/seed/43/400/300",
            "is_active": true
        },
        {
            "id": "44",
            "product_name": "Cotton Bath Towel Set",
            "price": 400000,
            "image_url": "https://picsum.photos/seed/44/400/300",
            "is_active": true
        },
        {
            "id": "45",
            "product_name": "Indoor Herb Garden Kit",
            "price": 600000,
            "image_url": "https://picsum.photos/seed/45/400/300",
            "is_active": true
        },
        {
            "id": "46",
            "product_name": "Professional Hair Dryer",
            "price": 850000,
            "image_url": "https://picsum.photos/seed/46/400/300",
            "is_active": true
        },
        {
            "id": "47",
            "product_name": "Jigsaw Puzzle 1000 Pieces",
            "price": 250000,
            "image_url": "https://picsum.photos/seed/47/400/300",
            "is_active": true
        },
        {
            "id": "48",
            "product_name": "Cast Iron Skillet",
            "price": 580000,
            "image_url": "https://picsum.photos/seed/48/400/300",
            "is_active": false
        },
        {
            "id": "49",
            "product_name": "Webcam 1080p with Microphone",
            "price": 670000,
            "image_url": "https://picsum.photos/seed/49/400/300",
            "is_active": true
        },
        {
            "id": "50",
            "product_name": "Memory Foam Pillow",
            "price": 480000,
            "image_url": "https://picsum.photos/seed/50/400/300",
            "is_active": true
        },
        {
            "product_name": "Licensed Concrete Soap",
            "price": 175.4,
            "image_url": "https://via.placeholder.com/272x665/dfde32/58bd98.png",
            "is_active": false,
            "id": "32511d9a-d6b0-4495-a447-633a25d59f53"
        },
        {
            "product_name": "Licensed Concrete Soap",
            "price": 175.4,
            "image_url": "https://via.placeholder.com/272x665/dfde32/58bd98.png",
            "is_active": false,
            "id": "a6bb8376-1516-44ff-906e-dcfab990a8eb"
        },
        {
            "id": "15fe5424-8a33-4b90-93aa-a055ac607ccd",
            "product_name": "Handmade Plastic Table",
            "price": 290.39,
            "is_active": true,
            "image_url": "storage/uploads/3dcb02c2-e09c-4481-b167-a1afd01aed37.png"
        },
        {
            "id": "46b6d4c7-16f7-41aa-b4a9-f4176a6fd874",
            "product_name": "Refined Cotton Sausages",
            "price": 752.85,
            "is_active": true,
            "image_url": "storage/uploads/a9ba2e05-b56a-42a9-823d-87eb019e3433.png"
        }
    ]
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

## PUT Update Data With File Upload

PUT /BASE_URL/api/protected/canStoreFile/products/1

> Body Parameters

```yaml
product_name: '{{$commerce.productName}}'
price: '{{$commerce.price}}'
image: ''
is_active: 'true'
```

### Params

| Name           | Location | Type           | Required | Description |
| -------------- | -------- | -------------- | -------- | ----------- |
| Authorization  | header   | string         | no       | none        |
| body           | body     | object         | no       | none        |
| » product_name | body     | string         | no       | none        |
| » price        | body     | string         | no       | none        |
| » image        | body     | string(binary) | no       | none        |
| » is_active    | body     | boolean        | no       | none        |

> Response Examples

> 200 Response

```json
{
    "meta": {
        "status": 404,
        "message": "Item not found"
    },
    "data": null
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

# Data Schema
