# 🏥 Patient Management API

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB (Mongoose)** that allows you to create and manage patient records.

## 🚀 Features

- 📅 Create new patients
- ✅ Input validation (required fields, unique constraints, email format)
- 🔒 Error handling
- 🌐 Ready to connect to MongoDB Atlas

## 📁 Project Structure

```
📆patient-management-api
🔚 models/
│   └── Patient.js         # Mongoose schema for Patient
🔚 routes/
│   └── createPatient.js   # Route for POST (create) patient
🔚 .env                   # MongoDB connection string (not shared)
🔚 server.js              # Entry point of the app
🔚 README.md              # Project documentation
```

## 📌 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/) or similar API testing tool

## ⚙️ Installation

1. **Clone the repo:**

```bash
git clone https://github.com/<your-username>/patient-management-api.git
cd patient-management-api
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up your **``** file:**

Create a `.env` file in the root directory and add your MongoDB connection string:

```
mongoURI=mongodb+srv://<username>:<password>@cluster.mongodb.net/patients?retryWrites=true&w=majority
```

4. **Start the server:**

```bash
nodemon server.js
```

The server will run on: [http://localhost:3000](http://localhost:3000)

## 🧪 Example POST Request

**Endpoint:**

```
POST /api/patient
```

**Body (JSON):**

```json
{
  "patient_id": "P001",
  "name": "Jane Doe",
  "gender": "female",
  "date_birth": "1995-08-15",
  "email": "janedoe@example.com"
}
```

## ✅ Validation Rules

- `patient_id`: required, unique
- `name`: required, minimum 2 characters
- `gender`: must be `"male"` or `"female"`
- `date_birth`: required (Date format)
- `email`: required, unique, valid format

## 📄 License

This project is licensed under the MIT License.

---

### 🛠️ Future Improvements

- Add full CRUD operations (Read, Update, Delete)
- Add authentication
- Add pagination and search
- Dockerize the app

---

### 👩‍💻 Author

Made with 💻 by **Fiorella Donayre**

