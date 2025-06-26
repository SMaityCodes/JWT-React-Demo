# JWT-React-Demo
A simple demo on how to use JWT (JSON Web Token) token with React for AUthentication and Authorized Access of Server Resources

## How to Use:-

- Download the two files: `server.js` and `App.jsx`
  
- Keep the `server.js` anywhere
- Go inside the folder where `server.js` is kept and run the following:-
  ```bash
  npm init -y
  npm install express cors
  npm install express jsonwebtoken
  ```
- Start the backend server using
  `node server.js`
- OPTIONAL: You can test the `server.js` using the folloiwng two `curl` commands:-
  ```bash
  curl -X POST http://localhost:3000/login  -H "Content-Type: application/json" -d '{"username":"Maity","password":"abcd"}'
  ```
  After running the above command, a JWT token (having three parts seperated by dot(.) will be printed on terminal, only if you give the above correct username and password. Copy the token and paste it in the following command:-
  ```bash
  curl http://localhost:3000/protected  -H "Authorization: Bearer <your_token_here>"
  ```
  
- Create a new React+vite project
- Cd inside the newly created Project-Root and run the following:
  ```bash
  npm install
  ```
- Copy the App.jsx file inside the Project-root/src/App.jsx
- start the frontend using
  ```bash
  npm run dev
  ```
  

