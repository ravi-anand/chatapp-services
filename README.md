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

## Technology Stack

Tech Stack used.
| Technology | Description                               | 
|------------|-------------------------------------------|
| `Node.js`      | Node.js Version 14              | 
| `Express`       | Express Server                    | 
| `Mongo DB` | Database used | 

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

#### Create Group

```https
    POST /group/creategroup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `groupname` | `string` | **Required**. Group name |
| `createdby` | `string` | **Required**. User ID  |

#### Add user to Group

```https
    POST /group/addgroupmember
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `groupid` | `string` | **Required**. Group ID |
| `userid` | `string` | **Required**. User ID  |

#### Get Group Member

```https
    POST /group/getgroupmember
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `groupid` | `string` | **Required**. Group ID |

#### Send Message

```https
    POST /group/sendmessage
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `groupid` | `string` | **Required**. Group ID |
| `message` | `string` | **Required**. Message |
| `userid` | `string` | **Required**. User id |

#### Get Message

```https
    POST /group/getgroupmessage
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `groupid` | `string` | **Required**. Group ID |

#### Get Group List

```https
    POST /group/getgrouplist
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userid` | `string` | **Required**. User id |

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

## Further inprovement
