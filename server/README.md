## Understanding URL Params and Dynamic Params

When working with web applications, particularly with RESTful APIs, it's important to understand the difference between URL parameters (often referred to as route parameters) and query parameters (often referred to as dynamic parameters). Both serve distinct purposes and are used in different contexts.


### URL Parameters (Route Parameters)

URL parameters are part of the URL path itself and are used to identify a specific resource. They are defined in the route path and accessed through the request object in Express.js using `req.params`.

- **Usage:** To access a specific resource by its unique identifier.
- **Syntax:** Defined in the URL path.
- **Example Route:** `/tasks/:id`
- **Example URL:** `/tasks/1`
- **Accessing in Code:**
  ```javascript
    taskController.updateTask = async (req,res)=>{
        try{
            const task = await Task.findById(req.params.id);
            if(!Task){
                throw new Error("App can not find the task");
            }
            const fields = Object.keys(req.body);
            fields.map((item)=>(task[item]=req.body[item]));
            await task.save();
            res.status(200).json({status:"success", data:task});
        } catch(err){
            res.status(400).json({status:"fail", error});
        }
    };
    ```

### Query Parameters (Dynamic Parameters)

Query parameters are part of the URL query string and are used to filter, sort, or provide additional information to the server. They follow the ? symbol in the URL and can be accessed through the request object in Express.js using req.query.

- **Usage:** To filter, sort, or provide additional options for a resource.
- **Syntax:** Defined after the ? in the URL.
- **Example Route:** `/tasks?name=john&age=30`
- **Example URL:** `Base URL + query params object`
    ```javascript
        // Base URL
        const baseUrl = '/tasks';

        // Query parameters object
        const queryParams = {
        name: 'john',
        age: 30
        };

        // Convert query parameters to a string
        const queryString = new URLSearchParams(queryParams).toString();

        // Construct the final URL
        const finalUrl = `${baseUrl}?${queryString}`;

        console.log(finalUrl); // '/tasks?name=john&age=30'
    ```
- **Accessing in Code:**
  ```javascript
    app.get('/users', (req, res) => {
        const name = req.query.name;
        const age = req.query.age;
        // Perform operations using name and age
        res.send(`User Name: ${name}, User Age: ${age}`);
    });