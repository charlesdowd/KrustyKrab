# Project Krabby Patty
Built off of template project 

- Use npm install in root folder of both client and server
- Create a .env file inside the root of the Server folder and set DATABASE_URI to your local mongo uri.
- Create a .env file inside of the root of the client and set the REACT_APP_BASE_URL to `http://localhost:PORT/api/v1` and replace PORT with whatever port you are running the server on. The default is 4000.
- Weird bug on client... Need to change name of file `client/src/components/layouts.tsx` to `client/src/components/Layout.tsx`.

Run Client Locally:
  Inside of client folder `npm run dev` which will run default on Port 3000 - http://localhost:3000/ 
  
Run Server Locally:
  Inside of server folder `npm run start`

TODO: Add more relevant info to the readme.
