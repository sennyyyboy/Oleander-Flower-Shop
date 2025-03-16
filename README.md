🌸 Oleander Flower Shop CRUD App
A web-based CRUD application for managing flowers, built with Django for the backend and React.js for the frontend.

📌 Features
Add, edit, delete, and view flowers
API built using Django REST Framework
Frontend built with React.js and CSS
PostgreSQL (or Django models) for database management

🚀 Installation
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/oleander-flower-shop.git
cd oleander-flower-shop

2️⃣ Backend Setup (Django)
bash
Copy
Edit
cd backend
python -m venv venv
source venv/bin/activate  # For macOS/Linux
venv\Scripts\activate  # For Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

3️⃣ Frontend Setup (React.js)
bash
Copy
Edit
cd ../frontend
npm install
npm start

⚙️ API Endpoints
Method    Endpoint    Description
GET    /api/flowers/    Get all flowers
POST    /api/flowers/    Add a new flower
GET    /api/flowers/{id}/    Get flower details
PUT    /api/flowers/{id}/    Update flower details
DELETE    /api/flowers/{id}/    Delete a flower

🛠 Technologies Used
Django (Backend)
Django REST Framework (API)
React.js (Frontend)
PostgreSQL / Django Models (Database)

📜 License
This project is for educational purposes only. 
