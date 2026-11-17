# 🚀 Man of Focus Open APIs

A collection of free, publicly accessible REST APIs providing sample data for developers. These APIs are designed for learning, testing, and building frontend or full-stack applications.

Whether you're practicing React, Next.js, or other web technologies, you can use these APIs to fetch realistic data and experiment with different application features.

## 🌐 Live APIs

| API                | Description                                | Endpoint                                                                  |
| ------------------ | ------------------------------------------ | ------------------------------------------------------------------------- |
| 🍔 Foods API       | Food items and related information         | [Explore API](https://manoffocus-open-apis.vercel.app/api/v1/foods)       |
| 💻 Laptops API     | Laptop specifications and information      | [Explore API](https://manoffocus-open-apis.vercel.app/api/v1/laptops)     |
| 📱 Smartphones API | Smartphone specifications and information  | [Explore API](https://manoffocus-open-apis.vercel.app/api/v1/smartphones) |
| 🛋️ Furniture's API | Furniture's specifications and information | [Explore API](https://manoffocus-open-apis.vercel.app/api/v1/furniture)   |

## ✨ Features

- **Free to Use:** Access the APIs without a subscription.
- **Public Access:** No API key or authentication required for the listed endpoints.
- **JSON Responses:** Data is provided in JSON format.
- **Realistic Data:** Sample datasets for different categories.
- **Developer Friendly:** Easy integration with JavaScript and other programming languages.
- **Multiple Categories:** Access food, laptop, and smartphone datasets.

## 🛠️ Behind the Build

- Express.js
- MongoDB
- REST API
- JSON
- Vercel

## 🚀 Getting Started

You can start using these APIs immediately. No installation or configuration is required.

### 1. Fetch Data Using JavaScript

You can use the native JavaScript `fetch()` API to retrieve data.

**Example: Fetch Foods**

```javascript
const fetchFoods = async () => {
      try {
            const response = await fetch(
                  "https://manoffocus-open-apis.vercel.app/api/v1/foods",
            );

            if (!response.ok) {
                  throw new Error("Failed to fetch foods");
            }

            const data = await response.json();

            console.log(data);
      } catch (error) {
            console.error("Error fetching foods:", error);
      }
};

fetchFoods();
```

### 2. Fetch Data Using Axios

You can also use Axios to make API requests.

First, install Axios:

```bash
npm install axios
```

Then:

```javascript
import axios from "axios";

const getLaptops = async () => {
      try {
            const response = await axios.get(
                  "https://manoffocus-open-apis.vercel.app/api/v1/laptops",
            );

            console.log(response.data);
      } catch (error) {
            console.error("Error fetching laptops:", error);
      }
};

getLaptops();
```

## 📡 API Endpoints

All endpoints use the HTTP `GET` method.

### Foods API

```http
GET /api/v1/foods
```

Full URL:

```text
https://manoffocus-open-apis.vercel.app/api/v1/foods
```

### Laptops API

```http
GET /api/v1/laptops
```

Full URL:

```text
https://manoffocus-open-apis.vercel.app/api/v1/laptops
```

### Smartphones API

```http
GET /api/v1/smartphones
```

Full URL:

```text
https://manoffocus-open-apis.vercel.app/api/v1/smartphones
```

### Furniture's API

```http
GET /api/v1/furniture
```

Full URL:

```text
https://manoffocus-open-apis.vercel.app/api/v1/furniture
```

## 💡 Use Cases

You can use these APIs to build or practice:

- Food delivery applications
- Restaurant websites
- E-commerce applications
- Laptop comparison websites
- Smartphone comparison websites
- Product listing pages
- Search and filtering functionality
- Pagination and sorting
- Dashboard applications
- Data fetching with React Query or TanStack Query

## ⚠️ Important Notes

- These APIs are primarily intended for learning, development, and testing purposes.
- Data availability and API functionality may change over time.
- Please avoid excessive requests.
- Always handle loading states, errors, and empty responses in your applications.

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome!

If you find a bug or have an idea for improving the APIs, feel free to open an issue or submit a pull request.

## 📄 License

This project is intended for educational and development purposes. Please check the repository's license for usage and distribution permissions.

---

<p align="center">
  Made with ❤️ by <strong>Man of Focus</strong>
</p>

<p align="center">
  Happy Coding! 🚀
</p>
