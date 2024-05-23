# To-Do List Application
This application allows users to perform CRUD operations on to-do items. Users can:
1. **Create** a to-do item (C)  -> /tasks post
2. **Read** the list of to-do items (R) -> /tasks get
3. **Update** a to-do item to mark it as complete or incomplete (U)  -> /tasks/:id put
4. **Delete** a to-do item (D) -> /tasks/:id delete

   - using restfulAPI : address + http method
      - tasks post
      - tasks get
      - tasks put
      - tasks delete

## Backend Setup

1. **Initial Setup**
   - Set up npm
   - Use Express for the serverss
   - Use Mongoose for database interaction
   - Create an app listener

2. **Define Routes**
   - Define the necessary routes for CRUD operations

3. **Database Schema**
   - Define the database schema for to-do items
    ``` Javascript
    const todoSchema = new mongoose.Schema({
       task: {
         type: String,
         required: true,
       },
       isComplete: {
         type: Boolean,
         default: false,
       },
     });
    ```

4. **Functionality**
   - Implement CRUD operations

5. **Testing**
   - Use Postman for testing API endpoints


## Frontend Setup

1. **Initial Setup**
   - Set up npm
   - Use React

2. **Functionality Implementation**
   - Implement CRUD operations on the frontend

3. **Testing**
   - Test the frontend functionalities

## Getting Started

### Prerequisites

- Node.js
- npm

## Deployment

### Database Deployment
- **MongoDB Atlas**: Use MongoDB Atlas for database deployment.

### Backend Deployment
- **AWS Elastic Beanstalk**: Deploy the backend using AWS Elastic Beanstalk.
- **Heroku**: Alternatively, you can deploy the backend on Heroku.

### Frontend Deployment
- Deploy the frontend using your preferred hosting service (e.g., Vercel, Netlify, AWS S3, etc.).

### Testing
- Ensure to thoroughly test the application, both backend and frontend functionalities, before and after deployment.

## Error Encountered

### Gateway Error

I encountered a gateway error:

```plaintext
2024/05/23 09:14:17 [error] 2117#2117: *1 connect() failed (111: Connection refused) while connecting to upstream, client: 50.175.105.250, server: , request: "GET / HTTP/1.1", upstream: "http://127.0.0.1:8080/", host: "todo-mayster.us-east-2.elasticbeanstalk.com"
2024/05/23 09:14:17 [error] 2117#2117: *1 connect() failed (111: Connection refused) while connecting to upstream, client: 50.175.105.250, server: , request: "GET /favicon.ico HTTP/1.1", upstream: "http://127.0.0.1:8080/favicon.ico", host: "todo-mayster.us-east-2.elasticbeanstalk.com", referrer: "http://todo-mayster.us-east-2.elasticbeanstalk.com/"
2024/05/23 09:14:31 [error] 2117#2117: *1 connect() failed (111: Connection refused) while connecting to upstream, client: 50.175.105.250, server: , request: "GET / HTTP/1.1", upstream: "http://127.0.0.1:8080/", host: "todo-mayster.us-east-2.elasticbeanstalk.com"
2024/05/23 09:14:31 [error] 2117#2117: *1 connect() failed (111: Connection refused) while connecting to upstream, client: 50.175.105.250, server: , request: "GET /favicon.ico HTTP/1.1", upstream: "http://127.0.0.1:8080/favicon.ico", host: "todo-mayster.us-east-2.elasticbeanstalk.com", referrer: "http://todo-mayster.us-east-2.elasticbeanstalk.com/"
```

### solution
The server was configured to use port 5050. To fix this, I updated the server configuration to:
```javascript
app.listen(process.env.PORT || 5000, () => {
  console.log("server on");
});
```