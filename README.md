# chatapp-services

Simple Chat app. 

## Setup

### .env File

Update below details in .env file

```env
API_PORT=Server_Port 
MONGO_URI=MongoDB_Host_URL
TOKEN_KEY=JWT_Secret_Key
```
Replace Server_Port, MongoDB_Host_URL and JWT_Secret_Key

### script to start server

```bash
npm install
```

To Start Server

```bash
npm start
```

To Test using Python
```python
py .\testscriptPython\chat-service-test.py
```

## Technology Stack

Tech Stack used.
| Technology | Description                               | 
|------------|-------------------------------------------|
| `Node.js`      | Node.js Version 14              | 
| `Express`       | Express Server                    | 
| `Mongo DB` | Database used | 

Testing
| Technology | Description                               | 
|------------|-------------------------------------------|
| `Python`      | Python Version 3              | 

## Package List

Package used.
| Technology | Description                               | 
|------------|-------------------------------------------|
| `bcryptjs`      | Encrypt data                | 
| `cors`       | Enable CORS                    | 
| `dotenv` | Setup Enviornment Variable | 
| `express`      | Node Server                | 
| `jsonwebtoken`       | Generate JWT token and validate it | 
| `moment` | To format Date and time | 
| `mongoose` | To connect MongoDB |

## API Reference

#### Register

```http
  POST /api/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `firstName` | `string` | **Required**. First Name  |
| `lastName` | `string` | **Required**. Last Name |
| `email` | `string` | **Required**. Email |
| `password` | `string` | **Required**. password |
| `role` | `string` | **Required**. role can be admin or user |

```curl
curl --location 'localhost:4001/api/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "firstName": "User2",
    "lastName": "2",
    "email": "3@gmail.com",
    "password": "1234",
    "role": "user"
}'
```

#### Login

```http
  POST /api/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Email |
| `password`      | `string` | **Required**. Password |

```curl
curl --location 'localhost:4001/api/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "2@gmail.com",
    "password": "1234"
}'
```

#### Get User List

```https
    POST /admin/getuserlist
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `       ` | `      ` | `       ` |

```curl
curl --location 'localhost:4001/admin/getuserlist' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ0NmFhMGY4ZDNhNmZiMTM1NTA5YjRiIiwiZW1haWwiOiIxQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4MjM1MzAwMywiZXhwIjoxNjgyMzcxMDAzfQ.PFScaDZhPwOfPmwUqjYNJDhQrZc-FMNn0bNPq9rM-mk' \
--header 'Content-Type: application/json' \
--data '{}'
```

#### Create User

```https
    POST /admin/createuser
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `firstName` | `string` | **Required**. First Name  |
| `lastName` | `string` | **Required**. Last Name |
| `email` | `string` | **Required**. Email |
| `password` | `string` | **Required**. password |
| `role` | `string` | **Required**. role can be admin or user |

```curl
curl --location 'localhost:4001/admin/createuser' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ0NmFhMGY4ZDNhNmZiMTM1NTA5YjRiIiwiZW1haWwiOiIxQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4MjM1MzAwMywiZXhwIjoxNjgyMzcxMDAzfQ.PFScaDZhPwOfPmwUqjYNJDhQrZc-FMNn0bNPq9rM-mk' \
--header 'Content-Type: application/json' \
--data-raw '{
     "firstName": "Ravi",
    "lastName": "Anand",
    "email": "user4@gmail.com",
    "password": "1234",
    "role": "user"
}'
```
#### Edit User

```https
    POST /admin/edituser
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userid` | `string` | **Required**. User ID |
| `firstName` | `string` | **Required**. First Name  |
| `lastName` | `string` | **Required**. Last Name |
| `email` | `string` | **Required**. Email |
| `role` | `string` | **Required**. role can be admin or user |

```curl
curl --location 'localhost:4001/admin/edituser' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ0NmFhMGY4ZDNhNmZiMTM1NTA5YjRiIiwiZW1haWwiOiIxQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4MjM1MzAwMywiZXhwIjoxNjgyMzcxMDAzfQ.PFScaDZhPwOfPmwUqjYNJDhQrZc-FMNn0bNPq9rM-mk' \
--header 'Content-Type: application/json' \
--data-raw '{
    "userid": "644396061316b97e6e2c38f1",
    "email": "ravi1@gmail.com",
    "firstName":"Ravianand",
    "lastName":"Anand",
    "role": "admin"
}'
```

#### Create Group

```https
    POST /group/creategroup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `groupname` | `string` | **Required**. Group name |
| `createdby` | `string` | **Required**. User ID  |

```curl
curl --location 'localhost:4001/group/creategroup' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ0NmFiNTg5ZTkyZGYwNDc1MTA3YWY1IiwiZW1haWwiOiIyQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjgyMzUzMDM1LCJleHAiOjE2ODIzNzEwMzV9.y6c51V9QEITeGnO0a0ZCB0uzLbvlpLodWmDB77PO6zg' \
--header 'Content-Type: application/json' \
--data '{
    "groupname": "Test Group 2",
    "createdby": "6446ab589e92df0475107af5"
}'
```
#### Add user to Group

```https
    POST /group/addgroupmember
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `groupid` | `string` | **Required**. Group ID |
| `userid` | `string` | **Required**. User ID  |

```curl
curl --location 'localhost:4001/group/addgroupmember' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ0NmFiNTg5ZTkyZGYwNDc1MTA3YWY1IiwiZW1haWwiOiIyQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjgyMzUzMDM1LCJleHAiOjE2ODIzNzEwMzV9.y6c51V9QEITeGnO0a0ZCB0uzLbvlpLodWmDB77PO6zg' \
--header 'Content-Type: application/json' \
--data '{
    "groupid": "6446b34e48d6fab3c7a92722",
    "userid": "6446aa0f8d3a6fb135509b4b"
}'
```

#### Get Group Member

```https
    POST /group/getgroupmember
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `groupid` | `string` | **Required**. Group ID |

```curl
curl --location 'localhost:4001/group/getgroupmember' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ0NmFiNTg5ZTkyZGYwNDc1MTA3YWY1IiwiZW1haWwiOiIyQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjgyMzUzMDM1LCJleHAiOjE2ODIzNzEwMzV9.y6c51V9QEITeGnO0a0ZCB0uzLbvlpLodWmDB77PO6zg' \
--header 'Content-Type: application/json' \
--data '{
    "groupid": "6446b34e48d6fab3c7a92722"
}'
```

#### Send Message

```https
    POST /group/sendmessage
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `groupid` | `string` | **Required**. Group ID |
| `message` | `string` | **Required**. Message |
| `userid` | `string` | **Required**. User id |

```curl
curl --location 'localhost:4001/group/sendmessage' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ0NmFiNTg5ZTkyZGYwNDc1MTA3YWY1IiwiZW1haWwiOiIyQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjgyMzUzMDM1LCJleHAiOjE2ODIzNzEwMzV9.y6c51V9QEITeGnO0a0ZCB0uzLbvlpLodWmDB77PO6zg' \
--header 'Content-Type: application/json' \
--data '{
    "groupid": "6446b34e48d6fab3c7a92722",
    "userid": "6446aa0f8d3a6fb135509b4b",
    "message": "Hello"
}'
```

#### Get Message

```https
    POST /group/getgroupmessage
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `groupid` | `string` | **Required**. Group ID |

```curl
curl --location 'localhost:4001/group/getgroupmessage' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ0NmFiNTg5ZTkyZGYwNDc1MTA3YWY1IiwiZW1haWwiOiIyQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjgyMzUzMDM1LCJleHAiOjE2ODIzNzEwMzV9.y6c51V9QEITeGnO0a0ZCB0uzLbvlpLodWmDB77PO6zg' \
--header 'Content-Type: application/json' \
--data '{
    "groupid": "6446b34e48d6fab3c7a92722"
}'
```

#### Get Group List

```https
    POST /group/getgrouplist
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userid` | `string` | **Required**. User id |

```curl
curl --location 'localhost:4001/group/getgrouplist' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ0NmFiNTg5ZTkyZGYwNDc1MTA3YWY1IiwiZW1haWwiOiIyQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjgyMzUzMDM1LCJleHAiOjE2ODIzNzEwMzV9.y6c51V9QEITeGnO0a0ZCB0uzLbvlpLodWmDB77PO6zg' \
--header 'Content-Type: application/json' \
--data '{
   "userid": "6446aa0f8d3a6fb135509b4b"
}'
```

#### Like Message

```https
    POST /group/likemessage
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userid` | `string` | **Required**. User id |
| `messageid` | `string` | **Required**. Message id |

```curl
curl --location 'localhost:4001/group/likemessage' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ0NmFiNTg5ZTkyZGYwNDc1MTA3YWY1IiwiZW1haWwiOiIyQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjgyMzUzMDM1LCJleHAiOjE2ODIzNzEwMzV9.y6c51V9QEITeGnO0a0ZCB0uzLbvlpLodWmDB77PO6zg' \
--header 'Content-Type: application/json' \
--data '{
    "messageid": "6446b43848d6fab3c7a9272d",
    "userid": "6446aa0f8d3a6fb135509b4b"
}'
```

## Response Format

### Succesful
```json
{
    "code": 200,
    "status": "Successful",
    "message": "",
    "data": {},
    "endpoint": "/api/register"
}

```
### Failuer or Conflict
```json
{
    "code": 400,
    "status": "Bad Request",
    "message": "All input is required: firstName, lastName, email, password, role",
    "data": {},
    "endpoint": "/api/register"
}
```
### Server Error
```json
{
    "code": 500,
    "status": "Failed",
    "message": "Something Went wrong",
    "data": {},
    "endpoint": "/api/register"
}
```

## DB Collection

### users
| Column | 
| :-------- | 
| `_id` | 
| `first_name` | 
| `last_name` | 
| `email` | 
| `password` | 
| `role` | 

### groupmessages
| Column | 
| :-------- | 
| `_id` | 
| `groupid` | 
| `message` | 
| `userid` | 
| `status` | 
| `createdat` | 

### groupmembers
| Column | 
| :-------- | 
| `_id` | 
| `groupid` | 
| `userid` | 
| `status` | 
| `createdat` | 

### groupmasters
| Column | 
| :-------- | 
| `_id` | 
| `groupname` | 
| `createdby` | 
| `status` | 
| `createdat` | 

### grouplikes
| Column | 
| :-------- | 
| `_id` | 
| `messageid` | 
| `likestatus` | 
| `userid` | 
| `createdat` | 

## Project Structure

```
chatapp-services
├─ package-lock.json
├─ package.json
├─ postmanCollection
│  └─ chat-service.postman_collection.json
├─ README.md
├─ server
│  ├─ app.js
│  ├─ config
│  │  └─ database.js
│  ├─ handler
│  │  ├─ common
│  │  │  └─ commonfunction.js
│  │  └─ controller
│  │     ├─ admin.controller.js
│  │     ├─ auth.controller.js
│  │     ├─ group.controller.js
│  │     ├─ message.controller.js
│  │     └─ user.controller.js
│  ├─ index.js
│  ├─ middleware
│  │  └─ auth.js
│  └─ model
│     ├─ grouplike.js
│     ├─ groupmaster.js
│     ├─ groupmembers.js
│     ├─ groupmessage.js
│     └─ user.js
└─ testscriptPython
   └─ chat-service-test.py

```

## Further inprovement