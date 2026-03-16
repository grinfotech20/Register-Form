# GR Info Tech Project Registration

This is a full-stack application for project registration at GR Info Tech.

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or cloud service like MongoDB Atlas)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up MongoDB:
   - Install MongoDB locally from https://www.mongodb.com/try/download/community
   - Or use MongoDB Atlas (cloud): https://www.mongodb.com/atlas
   - Update the `MONGO_URI` in `.env` file with your connection string

3. Start MongoDB service (if using local):
   ```bash
   mongod
   ```

4. Start the backend server:
   ```bash
   npm start
   ```
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

5. Open `index.html` in your browser to access the registration form.

## API Endpoints

- `POST /api/register` - Submit registration form data

## Technologies Used

- Frontend: HTML5, CSS3, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose