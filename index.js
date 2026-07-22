import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

let users = [
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "department": "Engineering",
    "salary": 85000
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "email": "bob.smith@example.com",
    "department": "Human Resources",
    "salary": 65000
  },
  {
    "id": 3,
    "name": "Charlie Brown",
    "email": "charlie.brown@example.com",
    "department": "Finance",
    "salary": 78000
  },
  {
    "id": 4,
    "name": "Diana Miller",
    "email": "diana.miller@example.com",
    "department": "Marketing",
    "salary": 72000
  },
  {
    "id": 5,
    "name": "Ethan Davis",
    "email": "ethan.davis@example.com",
    "department": "Information Technology",
    "salary": 91000
  }
];

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});