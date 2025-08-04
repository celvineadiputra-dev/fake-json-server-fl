# Fake JSON Server FL

> A free, open-source, and lightweight fake JSON server for frontend development, testing, and prototyping (💢 NOT PRODUCTION).

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

3. **Configure Environment Variables**

    Start by copying the example environment configuration and renaming it to `.env`:

    ```bash
    cp .env.example .env
    ```

    You can then customize the following variables within your `.env` file:
    - `PORT`: Define the port your server will run on.
    - `FRONTEND_DOMAIN`: Set the domain for CORS to allow frontend requests.
      <br/>
      💡 Use `FRONTEND_DOMAIN` to handle Cross-Origin Resource Sharing (CORS) correctly 😉.

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
`http://localhost:3000/api/<TYPE ROUTE>/:key` (Type Route : public or protected)

Specifically for sign-in and sign-up, the base URL is:
`http://localhost:3000/api`

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

| Method   | Example Endpoint                                    |
| :------- | :-------------------------------------------------- |
| `GET`    | `/api/<TYPE ROUTE>/products?page=1&size=5`          |
| `GET`    | `/api/<TYPE ROUTE>/products/all`                    |
| `GET`    | `/api/<TYPE ROUTE>/products/search/name?q=keyboard` |
| `GET`    | `/api/<TYPE ROUTE>/products/1`                      |
| `POST`   | `/api/<TYPE ROUTE>/products`                        |
| `PUT`    | `/api/<TYPE ROUTE>/products/1`                      |
| `DELETE` | `/api/<TYPE ROUTE>/products/1`                      |

---

## 📚 API Documentation

_👉 Open `docs` folder for details documentation_

<details>
    <summary>
        Fetching Related Data
    </summary>

## Fetching Related Data

You can get items from one resource that are related to another by using the **`search`** endpoint.

For example, to get all **ratings** for the **product** with an `id` of `5`, you would search the `ratings` resource. You need to target the field that links the rating to the product (e.g., `productId`) and use the product's ID as your search query.

### Example Request

```http
GET http://localhost:3000/api/<TYPE ROUTE>/ratings/search/product_id?q=5
```

- This request searches the `/api/<TYPE ROUTE>/ratings` endpoint.
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
