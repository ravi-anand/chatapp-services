import requests
host_url = 'http://localhost:4001'

def login(email, password):
    Headers = {'Content-Type': 'application/json'}
    body = {
    "email": email,
    "password": password
    }
    response = requests.post(host_url+'/api/login', headers=Headers, json= body)
    print("Status Code", response.status_code)
    if response.status_code == 200:
        print("Successful")
    resdata = response.json()
    return resdata['data']['token']


def testAdminApi(endpoint, payload, token):
    Headers = {'Content-Type': 'application/json',
              'Authorization' : token}
    body = payload
    response = requests.post(host_url+endpoint, headers=Headers, json= body)
    print("Status Code", response.status_code)
    resdata = response.json()
    if response.status_code == 200:
        print(resdata['message'])
    else:
        print(resdata['message'])
    return resdata['data']


# Admin login
print("1. Testing Admin login")
print()
admintoken = login('1@gmail.com', '1234')
print()

print("2. Testing Normal login")
# User Login
print()
normaltoken = login('2@gmail.com', '1234')
print()

print("3. Create User")
print()
payload ={
     "firstName": "Ravi",
    "lastName": "Anand",
    "email": "user6@gmail.com",
    "password": "1234",
    "role": "user"
}
endpoint='/admin/createuser'
print("payload:",payload)
print("Endpoint",endpoint)
result = testAdminApi(endpoint, payload, admintoken)
print(result)
print()

print("4. Edit User")
print()
payload ={
    "userid": "644396061316b97e6e2c38f1",
    "email": "ravi1@gmail.com",
    "firstName":"Ravianand",
    "lastName":"Anand",
    "role": "admin"
}
endpoint='/admin/edituser'
print("payload:",payload)
print("Endpoint",endpoint)
result = testAdminApi(endpoint, payload, admintoken)
print(result)
print()

print("5. Get User List")
print()
payload ={}
endpoint='/admin/getuserlist'
print("payload:",payload)
print("Endpoint",endpoint)
result = testAdminApi(endpoint, payload, normaltoken)
print(result)
print()

print("6. Create Group")
print()
payload ={
    "groupname": "Test Group 2",
    "createdby": "6446ab589e92df0475107af5"
}
endpoint='/group/creategroup'
print("payload:",payload)
print("Endpoint",endpoint)
result = testAdminApi(endpoint, payload, normaltoken)
print(result)
print()

print("7. Add Group Members")
print()
payload ={
    "groupid": "6446b34e48d6fab3c7a92722",
    "userid": "6446aa0f8d3a6fb135509b4b"
}
endpoint='/group/addgroupmember'
print("payload:",payload)
print("Endpoint",endpoint)
result = testAdminApi(endpoint, payload, normaltoken)
print(result)
print()


print("8. Get Group Members")
print()
payload ={
    "groupid": "6446b34e48d6fab3c7a92722"
}
endpoint='/group/getgroupmember'
print("payload:",payload)
print("Endpoint",endpoint)
result = testAdminApi(endpoint, payload, normaltoken)
print(result)
print()

print("9. Get Group Members")
print()
payload ={
    "groupid": "6446b34e48d6fab3c7a92722",
    "userid": "6446aa0f8d3a6fb135509b4b",
    "message": "Hello"
}
endpoint='/group/sendmessage'
print("payload:",payload)
print("Endpoint",endpoint)
result = testAdminApi(endpoint, payload, normaltoken)
print(result)
print()

print("10. Get Group Message")
print()
payload ={
    "groupid": "6446b34e48d6fab3c7a92722"
}
endpoint='/group/getgroupmessage'
print("payload:",payload)
print("Endpoint",endpoint)
result = testAdminApi(endpoint, payload, normaltoken)
print(result)
print()

print("11. Get Group Message")
print()
payload ={
     "userid": "6446aa0f8d3a6fb135509b4b"
}
endpoint='/group/getgrouplist'
print("payload:",payload)
print("Endpoint",endpoint)
result = testAdminApi(endpoint, payload, normaltoken)
print(result)
print()

print("12. Like Message")
print()
payload ={
    "messageid": "6446b43848d6fab3c7a9272d",
    "userid": "6446aa0f8d3a6fb135509b4b"
}
endpoint='/group/likemessage'
print("payload:",payload)
print("Endpoint",endpoint)
result = testAdminApi(endpoint, payload, normaltoken)
print(result)
print()