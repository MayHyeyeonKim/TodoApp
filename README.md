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
   - Implement User Registration
     - Accept email, password, and username
     - Store received information in the database
     - Encrypt passwords before storing
   - Implement User Login
      - Enter email and password and send
      - Check in the database if there is a user with the corresponding email and password
      - If not, login fails
      - If yes, user information + token
      - The frontend stores this information

5. **Testing**
   - Use Postman for testing API endpoints

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
```

![Error](https://github.com/MayHyeyeonKim/TodoApp/blob/main/images/deploy_err.png)
![Error](https://github.com/MayHyeyeonKim/TodoApp/blob/main/images/gateway_err.png)
![Error](https://github.com/MayHyeyeonKim/TodoApp/blob/main/images/deploy_err_2.png)

### solution
The server was configured to use port 5050. To fix this, I updated the server configuration to:
```javascript
app.listen(process.env.PORT || 5000, () => {
  console.log("server on");
});
```

### The error where const ```isMatch = bcrypt.compareSync(password, user.password);``` returns ```false```
```Javascript
userController.loginWithEmail= async(req,res)=>{
    try{
        const {email, password} = req.body
        const user = await User.findOne({email}, "-createdAt -updatedAt -__v");
        if(user){
            const isMatch = bcrypt.compareSync(password, user.password);
            if(isMatch){
                const token = user.generateToken();
                return res.status(200).json({status:"success", user, token})
            }
        }
        throw new Error("userId or password is incorrect!")
    }catch(err){
        res.status(400).json({status: "fail~", err});
    }
};
```

### solution
 I changed the password to something other than '0000'