# honoEmployeeCrud
Crud Application using NodeJS, ReactJs

# Employee Management Dashboard
A simple employee management dashboard built using React, Node.js, and an in-memory database (JSON). The application allows users to view, add, update, and delete employee records via a clean and intuitive interface.

# Features
1. Employee List and Details
 Displays a list of employees showing their Name and Position.
 Clicking "More Details" opens a modal or a new view with the employee’s full details including Department, Email, and Phone Number.
2. Employee Registration
 Allows adding new employees through a form with fields for Name, Position, Department, Email, and Phone Number.
 Validates input and submits the new employee’s information to the backend for storage.
# Tech Stack
Frontend
 React: Built using functional components and hooks.
 CSS: For basic styling.
Backend
 Node.js with Express: Provides a REST API for employee management.
 In-memory database: Employee data is stored in a JSON file.
 
# API Endpoints
The backend provides the following RESTful API endpoints:

GET /backend/get-all: Retrieves the list of all employees.
GET /backend/get-by-id/:id: Retrieves details of a specific employee by ID.
POST /backend/register: Adds a new employee.
PUT /backend/update-by-id/:id: Updates an existing employee's details.
DELETE /backend/delete-by-id/:id: Deletes an employee by ID.

# Setup Instructions
To run the project locally, follow these steps:

1. Clone the repository
bash
Copy code
git clone https://github.com/Rishabh7409/honoEmployeeCrud.git
cd honoEmployeeCrud

3. Install dependencies
 # Backend
Navigate to the backend folder and install dependencies:
cd hono-crud-backend
npm install

 # Frontend
Navigate to the frontend folder and install dependencies:
cd hono-crud-frontend
npm install

3. Start the application
 # Backend
Run the Node.js backend server:
npm run dev
The backend will start on http://localhost:5000.

 # Frontend
Run the React frontend:
npm start
The frontend will be available at http://localhost:3000.

4. Test the application
Navigate to http://localhost:3000 to view the Employee List Dashboard.
Add, update, view, and delete employee records.
# Screenshots

Employee List View:
![Screenshot 2024-10-16 013744](https://github.com/user-attachments/assets/6cc1d8c7-d74d-4875-8614-114316221f91)


Employee Details View:
![Screenshot 2024-10-16 013803](https://github.com/user-attachments/assets/c74db679-c491-403f-bbf1-f8ee150a7af1)


Add Employee Form:
![Screenshot 2024-10-16 013847](https://github.com/user-attachments/assets/84c97788-9963-4277-8b6b-7bd145a92548)


Edit Employee Form:
![Screenshot 2024-10-16 013825](https://github.com/user-attachments/assets/c18e07cc-2739-47a8-9e48-8b2a4b91d208)

Thank you
