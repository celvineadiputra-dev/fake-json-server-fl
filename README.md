# Fake JSON Server FL

> A free, open-source, and lightweight fake JSON server for frontend development, testing, and prototyping.

[](https://choosealicense.com/licenses/mit/)
[](http://makeapullrequest.com)

This project is a fake REST API built with [Hono.js](https://hono.dev), a small, simple, and ultrafast web framework for the Edge. It's designed to help frontend developers practice their skills, prototype interfaces, or test applications without needing a complex, fully-fledged backend.

---

## ✨ Key Features

- **Free & Open Source**: Use it without any limitations.
- **Lightweight & Fast**: Powered by the high-performance Hono.js framework.
- **Built with TypeScript**: Enjoy type safety and modern JavaScript features.
- **Dynamic Endpoints**: Automatically generates RESTful endpoints from a simple JSON file.
- **Plug-and-Play**: Ready for integration with any frontend framework like React, Vue, Svelte, or Angular.

---

## 🚀 Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

Make sure you have one of the following runtimes installed:

- [Node.js](https://nodejs.org/) (v22.x or higher)
- [Bun](https://bun.sh/)

### Installation & Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/celvineadiputra-dev/fake-json-server-fl.git
    cd fake-json-server-fl
    ```

2. **Install dependencies** using your preferred package manager:

    ```bash
    # With Bun
    bun install

    # With npm
    npm install

    # With yarn
    yarn install
    ```

3. **Set up your environment variables:**
   Copy the example environment file and rename it to `.env`.

    ```bash
    cp .env.example .env
    ```

    You can modify the `PORT` inside the `.env` file if needed.

4. **Run the development server:**

    ```bash
    # With Bun
    bun run dev

    # With npm
    npm run dev

    # With yarn
    dev
    ```

    The server should now be running at `http://localhost:3000` (or your configured port).

---

## ⚙️ How It Works

The server dynamically creates API endpoints based on the top-level keys in the `db.fake.json` file.

For every key you define, a corresponding RESTful resource is exposed, supporting all standard HTTP methods (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`).

**For example**, given the following `db.fake.json` you can change as you want:

```json
{
  "products": [
    { "id": 1, "name": "Wireless Mouse", "price": 49.99, ... },
    { "id": 2, "name": "Mechanical Keyboard", "price": 129.99, ... }
  ],
  "ratings": [
    {
      "rating_id": "RT001",
      "product_id": "15",
      ...
    },
    {
      "rating_id": "RT002",
      "product_id": "5",
      ...
    },
  ]
}
```

> The API endpoints listed below are generated automatically. You can create additional endpoints by adding new keys to the db.fake.json file; they will become available immediately.

#### Base URL

The base URL for all data endpoints follows this pattern:
`http://localhost:3000/api/:key`

#### Endpoints

| Method          | Endpoint         | Description                                                                                                  |
| :-------------- | :--------------- | :----------------------------------------------------------------------------------------------------------- |
| `GET`           | `/`              | **Get a paginated list of items**. <br/>_Query Params_: `page` (e.g., `?page=1`), `size` (e.g., `&size=10`). |
| `GET`           | `/all`           | **Get all items** for a resource, without pagination.                                                        |
| `GET`           | `/search/:field` | **Search for items** in a specific `field`. <br/> _Query Params_: `q` (search term), `page`, `size`.         |
| `GET`           | `/:id`           | **Get a single item** by its `id`.                                                                           |
| `POST`          | `/`              | **Create a new item**. The item's data must be in the JSON request body.                                     |
| `PUT` / `PATCH` | `/:id`           | **Update an item** by its `id`. Supports both full and partial updates.                                      |
| `DELETE`        | `/:id`           | **Delete an item** by its `id`.                                                                              |

---

### Example Usage with `products` key

If your `db.fake.json` has a `"products"` key, the endpoints would be:

| Method   | Example Endpoint                       |
| :------- | :------------------------------------- |
| `GET`    | `/api/products?page=1&size=5`          |
| `GET`    | `/api/products/all`                    |
| `GET`    | `/api/products/search/name?q=keyboard` |
| `GET`    | `/api/products/1`                      |
| `POST`   | `/api/products`                        |
| `PUT`    | `/api/products/1`                      |
| `DELETE` | `/api/products/1`                      |

---

## 📚 API Documentation

<details>
    <summary>
        User Sign In
    </summary>

### User Sign In

Authenticates an existing user with their email and password. On success, it returns the user's data along with a session token.

- **Method:** `POST`
- **Endpoint:** `/auth/signIn`

#### Request Body

The request body must be a JSON object containing the user's email and password.

```json
{
    "email": "user@example.com",
    "password": "yourpassword"
}
```

#### Success Response (200 OK)

If the credentials are valid, the API will respond with the user's data and a token.

```json
{
    "status": 200,
    "message": "Login successful",
    "data": {
        "user": {
            "user_name": "John Doe",
            "email": "user@example.com"
        },
        "token": "TOKEN_EXAMPLE_FAKE_JSON_HAPPY_LEARN_user@example.com"
    }
}
```

#### Error Responses

- **`401 Unauthorized`**: Returned if the provided email or password is incorrect.
- **`422 Unprocessable Entity`**: Returned if the request body fails validation (e.g., missing fields, invalid email format).
- **`500 Internal Server Error`**: Returned for unexpected server-side errors.

</details>

<details>
    <summary>
        User Sign Up
    </summary>

### User Sign Up

Creates a new user account.

- **Method:** `POST`
- **Endpoint:** `/auth/signUp`

#### Request Body

The request body must be a JSON object containing the new user's details. The `profile_picture` field is optional.

- **`user_name`** (required): The user's full name.
- **`email`** (required): The user's unique email address.
- **`password`** (required): The user's password.
- **`profile_picture`** (optional): A URL to the user's profile picture.

<!-- end list -->

```json
{
    "user_name": "Jane Doe",
    "email": "jane.doe@example.com",
    "password": "a-very-secure-password",
    "profile_picture": "https://example.com/path/to/image.jpg"
}
```

#### Success Response (201 Created)

Upon successful creation, the API returns a confirmation message and the updated list of all users.

```json
{
    "status": 201,
    "message": "Sign up successful",
    "data": null
}
```

#### Error Responses

- **`422 Unprocessable Entity`**: Returned if the request body fails validation (e.g., email already in use, password too weak, missing required fields).
- **`500 Internal Server Error`**: Returned for unexpected server-side errors.

</details>

<details>
    <summary>
        Fetch Data (Paginated)
    </summary>

### Fetch Data (Paginated)

Retrieves a paginated list of items from the specified resource.

- **Method:** `GET`
- **Endpoint:** `/api/:key`

#### URL Parameters

- **`key`** (required): The name of the key from `db.fake.json` (e.g., `products`).

#### Query Parameters

- **`page`** (optional): The page number to display. Default: `1`.
- **`size`** (optional): The number of items per page. Default: `5`.

#### Example Request

```http
GET http://localhost:3000/api/products?page=1&size=2
```

#### Success Response (200 OK)

```json
{
    "status": 200,
    "message": "Paginate Response",
    "data": {
        "page": 1,
        "size": 2,
        "total": 10,
        "totalPages": 5,
        "data": [
            { "id": "1", "name": "Item A" },
            { "id": "2", "name": "Item B" }
        ]
    }
}
```

</details>

<details>
    <summary>Search Data</summary>

### Search Data

Performs a search for items within a specific field of a resource.

- **Method:** `GET`
- **Endpoint:** `/api/:key/search/:field`

#### URL Parameters

- **`key`** (required): The name of the key from `db.fake.json` (e.g., `products`).
- **`field`** (required): The name of the field to target for the search (e.g., `name`).

#### Query Parameters

- **`q`** (required): The search keyword.
- **`page`** (optional): The page number. Default: `1`.
- **`size`** (optional): The number of items per page. Default: `5`.

#### Example Request

```http
GET http://localhost:3000/api/products/search/name?q=item
```

#### Success Response (200 OK)

```json
{
    "status": 200,
    "message": "Paginate Response",
    "data": {
        "page": 1,
        "size": 5,
        "total": 3,
        "totalPages": 1,
        "data": [
            { "id": "1", "name": "Item A" },
            { "id": "2", "name": "Item B" },
            { "id": "5", "name": "Another Item" }
        ]
    }
}
```

</details>

<details>
    <summary>
        Fetch All Data
    </summary>

### Fetch All Data

Retrieves all items from the specified resource without pagination.

- **Method:** `GET`
- **Endpoint:** `/api/:key/all`

#### URL Parameters

- **`key`** (required): The name of the key from `db.fake.json` (e.g., `products`).

#### Example Request

```http
GET http://localhost:3000/api/products/all
```

#### Success Response (200 OK)

```json
{
    "status": 200,
    "message": "List products",
    "data": [
        { "id": "1", "name": "Item A" },
        { "id": "2", "name": "Item B" }
    ]
}
```

</details>

<details>
    <summary>
        Fetch Data by ID
    </summary>

### Fetch Data by ID

Retrieves a single, specific item by its id.

- **Method:** `GET`
- **Endpoint:** `/api/:key/:id`

#### URL Parameters

- **`key`** (required): The name of the key from `db.fake.json`.
- **`id`** (required): The unique ID of the item to retrieve.

#### Example Request

```http
GET http://localhost:3000/api/products/1
```

#### Success Response (200 OK)

```json
{
    "status": 200,
    "message": "Paginate Response",
    "data": [
        {
            "id": "1",
            "name": "Item A"
        }
    ]
}
```

</details>

<details>
    <summary>
        Add New Data
    </summary>

### Add New Data

Creates a new item in the specified resource.

- **Method:** `POST`
- **Endpoint:** `/api/:key`

#### URL Parameters

- **`key`** (required): The name of the key from `db.fake.json`.

#### Request Body

```json
{
    "id": 3,
    "product_name": "New Product",
    "price": 25000,
    ....
}
```

</details>

<details>
    <summary>
        Update Data
    </summary>

### Update Data

Updates an existing item by its id. Supports both full (`PUT`) and partial (`PATCH`) updates.

- **Method:** `PUT` / `PATCH`
- **Endpoint:** `/api/:key/:id`

#### URL Parameters

- **`key`** (required): The name of the key from `db.fake.json`.
- **`id`** (required): The unique ID of the item to update.

#### Request Body

```json
{
    "name": "Updated Product Name",
    "price": 30000,
    ...
}
```

</details>

<details>
    <summary>
        Delete Data
    </summary>

### Delete Data

Deletes a specific item by its id.

- **Method:** `DELETE`
- **Endpoint:** `/api/:key/:id`

#### URL Parameters

- **`key`** (required): The name of the key from `db.fake.json`.
- **`id`** (required): The unique ID of the item to delete.

#### Example Request

```http
DELETE http://localhost:3000/api/products/3
```

</details>

<details>
    <summary>
        Fetching Related Data
    </summary>

## Fetching Related Data

You can get items from one resource that are related to another by using the **`search`** endpoint.

For example, to get all **ratings** for the **product** with an `id` of `5`, you would search the `ratings` resource. You need to target the field that links the rating to the product (e.g., `productId`) and use the product's ID as your search query.

### Example Request

```http
GET http://localhost:3000/api/ratings/search/product_id?q=5
```

- This request searches the `/api/ratings` endpoint.
- It specifically looks within the `productId` field.
- It returns all ratings where `productId` is `5`.

</details>

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. **Fork** the Project
2. Create your **Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** your Changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the Branch (`git push origin feature/AmazingFeature`)
5. Open a **Pull Request**

Don't forget to give the project a star\! Thanks again\! ⭐

---

## 📄 License

Distributed under the Apache License 2.0. See `LICENSE` for more information.
