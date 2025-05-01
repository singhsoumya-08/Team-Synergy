# Team Tracker

**Team Tracker** is a simple MERN-stack application for managing student team members. Users can:

- **Add** new team members (with profile photos)  
- **View** all members in a responsive card grid  
- **Inspect** individual member details on their own page  

Built with:
- **Frontend:** React (Vite), Material-UI, React Router, Axios  
- **Backend:** Node.js, Express, MongoDB, Mongoose, Multer (file uploads)  

---

## 📂 Repository Structure

```
team-tracker/              
├─ client/                 
│   ├─ public/
│   ├─ src/
│   │   ├─ components/     ← Home, AddMember, ViewMembers, MemberDetails
│   │   ├─ App.jsx
│   │   └─ main.jsx
│   ├─ .gitignore
│   ├─ package.json
│   └─ vite.config.js
│
├─ server/                 
│   ├─ models/             ← Mongoose schemas
│   ├─ routes/             ← API route definitions
│   ├─ uploads/            ← Stored profile images
│   ├─ .env                ← Environment variables (git-ignored)
│   ├─ .gitignore
│   ├─ index.js
│   └─ package.json
│
├─ .gitignore
└─ README.md
```

---

## 📝 Project Description

Team Tracker helps you:

1. **Add** new team members (name, role, email, contact, profile image)  
2. **View** all members in a clean, responsive grid  
3. **Inspect** individual member details on a separate page  

---

## 🚀 Installation & Setup

### Prerequisites

- Node.js v14+ & npm  
- MongoDB Atlas account _or_ local MongoDB server  

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/<your-team-name>.git
cd <your-team-name>
```

### 2. Configure & start the backend

```bash
cd server
npm install
```

1. Create a `.env` file in `server/`:
   ```env
   MONGO_URI=<your-mongodb-connection-URI>
   PORT=5000
   ```
2. Ensure the `uploads/` folder exists:
   ```bash
   mkdir uploads
   ```
3. Start the server:
   ```bash
   npm run dev
   # should log: “Server running on port 5000”
   ```

### 3. Install & start the frontend

```bash
cd ../client
npm install
npm run dev
# opens http://localhost:3000 (proxies /api → http://localhost:5000)
```

---

## 🔌 API Endpoints

All endpoints are available under the `/api/members` base path:

| Method | Endpoint             | Description                           |
| ------ | -------------------- | ------------------------------------- |
| GET    | `/api/members`       | Fetch all team members                |
| GET    | `/api/members/:id`   | Fetch a single member by their ID     |
| POST   | `/api/members`       | Create a new member (multipart/form-data) |

**Example: Create a new member via curl**  
```bash
curl -X POST http://localhost:5000/api/members   -F "name=Alice"   -F "role=Developer"   -F "email=alice@example.com"   -F "contact=1234567890"   -F "image=@/path/to/photo.jpg"
```

---

## ▶️ Running the App

1. **Backend**  
   ```bash
   cd server
   npm run dev
   ```
2. **Frontend**  
   ```bash
   cd client
   npm run dev
   ```
3. Open your browser to `http://localhost:3000`

---


