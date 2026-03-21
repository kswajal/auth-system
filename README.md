# Auth System API (JWT + MongoDB)

This project is a backend authentication system that I built to understand how real-world login systems work using JWT and MongoDB.
It covers the complete flow from user signup to protected routes using secure authentication practices.

## Features
- User signup and login
- JWT token-based authentication
- Password hashing with bcrypt
- MongoDB database integration
- Input validation with Zod
- Protected API endpoints
- Error handling

## How Authentication Works
1. User signs up → password is hashed using bcrypt and stored in database
2. User logs in → server verifies credentials and generates a JWT token
3. Client sends token in headers → for accessing protected routes
4. Middleware verifies token → grants or denies access

## Tech Stack
- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT (jsonwebtoken)
- **Security**: Bcrypt
- **Validation**: Zod
- **Environment**: Dotenv

## Installation
```bash
git clone https://github.com/kswajal/auth-system.git
```
```bash
cd auth-system
```
```bash
npm install
```

## Setup

1. Create `.env` file:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

2. Start server:
```bash
node server.js
```

## API Endpoints

### Public Routes
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - User login

### Protected Routes
- `GET /api/auth/profile` - Get user profile (requires token)

#### Example header:
- Authorization: Bearer <your_token>

## Testing

You can test all endpoints using Postman or any API client. Make sure to include the JWT token in headers for protected routes. See [Testing Guide](https://quartz-metal-5b2.notion.site/Server-Testing-Postman-Guide-Auth-System-329ce74620698189834ac1da4e6f88c1?source=copy_link) for detailed steps.

## Project Structure
```
auth-system/
├── controllers/      # Business logic
├── middleware/       # Authentication & validation
├── models/           # Database schemas
├── routes/           # API endpoints
├── .env              # Environment variables
├── server.js         # Main server file
└── package.json      # Dependencies
```

## What I Learned

- How JWT authentication works internally
- How middleware protects routes
- Secure password handling using bcrypt
- Structuring scalable backend projects
- Handling API requests and responses properly

## Future Improvements

- Refresh Token system
- Email verification
- Forgot/Reset password
- Role-based access control (Admin/User)
- Rate limiting & enhanced security
- Logging system (Winston)

## License

MIT
