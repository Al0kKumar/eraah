
## Student API - Backend Assignment

A backend REST API built using **Node.js**, **Express**, and **MongoDB**. The app fetches student data from a third-party API, stores and processes it in a MongoDB database, and exposes secured endpoints to access the processed data.

---

### 🔧 Tech Stack

-   **Node.js + Express**

-   **TypeScript**

-   **MongoDB + Mongoose**

-   **JWT (Authentication)**

-   **Axios**

-   **Dotenv**


---

### 📦 Installation

```bash
git clone https://github.com/Al0kKumar/eraah.git
npm install
```

### ⚙️ Environment Variables

Create a `.env` file in the root:

```env
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
```

---

### 🚀 Usage


#### Start Server

```bash
npm run dev
```

---

### 📥 One-Time Data Sync

When the server starts for the first time, the data from the third-party API is fetched and inserted into MongoDB (only once).

```ts
import { syncStudentData } from "./utils/sync";

mongoose.connect(MONGO_URI).then(() => {
  syncStudentData(); // One-time DB sync
});
```

---

### 📊 API Endpoints

#### 🔐 Auth Protected

All routes require a valid JWT token in the `Authorization` header as `Bearer <token>`.

#### GET `/api/students`

Fetch students (processed data)

**Query Params:**

-   `active=true/false` → Filter students based on active status.

-   `sortBy=name` → Sort students alphabetically by name.


**Example:**

```http
GET /api/students?active=true&sortBy=name
```

#### 🛠 Data Processing Includes:

-   Adds `lastUpdated` timestamp field

-   Filters by active status

-   Sorts by name (if specified)


---

### 🧪 Testing JWT Middleware (Dummy)

Use any dummy token for testing in the header (since no auth/signup is implemented):

```http
Authorization: Bearer <your_jwt_token>
```

You can create a token manually using:

```js
jwt.sign({ userId: '1234' }, JWT_SECRET);
```

---

### 📁 Folder Structure

```
├── controllers
│   └── studentController.ts
├── middleware
│   └── auth.ts
├── models
│   └── students.ts
├── routes
│   └── studentRoutes.ts
├── utils
│   └── sync.ts
├── index.ts
├── .env
├── tsconfig.json
├── package.json
```

---

### 📌 Notes

-   This is a backend-only project.

-   No login/signup implemented, use JWT directly for protected routes.

-   Data is fetched once during initial boot.


---

### 🤝 Contact

For any queries, reach out via [Mail]( mishraalok189381@gmail.com) , [LinkedIn](https://www.linkedin.com/in/alok-kumar09/)