# JWT-React-Demo
A simple demo on how to use JWT (JSON Web Token) token with React for AUthentication and Authorized Access of Server Resources

## How to Use this Repo?:-

- Download the two files: `server.js` and `App.jsx`

### Setup the Backend Server

- Keep the `server.js` anywhere
- Go inside the folder where `server.js` is kept and run the following:-
  ```bash
  npm init -y
  npm install express cors
  npm install express jsonwebtoken
  ```
- Start the backend server using
  `node server.js`
- OPTIONAL: You can test the `server.js` using the folloiwng two `curl` commands (from a different terminal):-
  ```bash
  curl -X POST http://localhost:3000/login  -H "Content-Type: application/json" -d '{"username":"Maity","password":"abcd"}'
  ```
  After running the above command, a JWT token (having three parts seperated by dot(.) will be printed on terminal, only if you give the above correct username and password. This is a Base64 encoded string - having three parts, viz., Header.Payload.Signature. Copy the token and paste it in the following command:-
  ```bash
  curl http://localhost:3000/protected  -H "Authorization: Bearer <your_token_here>"
  ```
  If the above works correctly, you'll see a message like the following:-

 ```bash
    {"message":"Access granted ABcd","user":{"username":"Maity","iat":1750928735,"exp":1750932335}}
  ```
Note that "iat" and "exp" are the issuance and expiration time (UNIX timestamp) of the token.

### Setup the Frontend Server

- Create a new React+vite project
  ```bash
  npm create vite@latest my-app -- --template react
  ```
- Copy the `App.jsx` file inside the Project-root/src/App.jsx (replace the existing)
- Cd inside the newly created Project-Root and run the following:
  ```bash
  npm install
  npm install axios
  ```
- NOTE: `axios` is a popular HTTP client library for making requests from the browser (or Node.js). Compared to the built-in `fetch`, axios is simpler to use for `POST/GET` with JSON.

  
- start the frontend using
  ```bash
  npm run dev
  ```


