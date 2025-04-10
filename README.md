
## Student API - Assignment

🚀 A full-stack web application built using Node.js, Express, MongoDB, and React with TypeScript and TailwindCSS. The backend exposes secure RESTful APIs for managing student data, including authentication using JWT, data analytics like average age and course distribution, and CRUD operations. The frontend provides a clean, modular dashboard with dynamic charts, statistics cards, and responsive UI for managing and visualizing student records efficiently

---

### Screenshot 

![Dashboard Screenshot](/client/public/01.png)
![Dashboard Screenshot](/client/public/02.png)
![Dashboard Screenshot](/client/public/03.png)
![Dashboard Screenshot](/client/public/04.png)


---


### 🔧 Tech Stack

-   **React.js + Tailwind**

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
cd client 
npm install
cd ..
cd server
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
cd server
npm run dev
```

#### Start Client

```bash
cd client
npm run dev
```

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

#### Get `/api/token`
Fetch dummy token for future protected routes

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

### 🤝 Contact

For any queries, reach out via [Mail]( mishraalok189381@gmail.com) , [LinkedIn](https://www.linkedin.com/in/alok-kumar09/)