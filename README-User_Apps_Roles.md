<b>USER_APPS_ROLES</b>

-- GET /api/user_apps_roles
```json
response ->
[
  {
    "id": 1,
    "email": "aakash.kumar@ad.aaditya-designers.com",
    "appCode": "E-COMMERCE",
    "appDescription": "E-Commerce App",
    "roleCode": "ADMIN",
    "roleDescription": "Administrator"
  },
  {
    "id": 2,
    "email": "aakash.kumar@ad.aaditya-designers.com",
    "appCode": "COLLEGE",
    "appDescription": "College Management App",
    "roleCode": "ADMIN",
    "roleDescription": "Administrator"
  },
  {
    "id": 3,
    "email": "aaditya.kumar@ad.aaditya-designers.com",
    "appCode": "E-COMMERCE",
    "appDescription": "E-Commerce App",
    "roleCode": "RESEARCHER",
    "roleDescription": "Researcher"
  },
  {
    "id": 4,
    "email": "kavita.raikwar@ad.aaditya-designers.com",
    "appCode": "E-COMMERCE",
    "appDescription": "E-Commerce App",
    "roleCode": "USER",
    "roleDescription": "User"
  },
  {
    "id": 5,
    "email": "kavita.raikwar@ad.aaditya-designers.com",
    "appCode": "COLLEGE",
    "appDescription": "College Management App",
    "roleCode": "USER",
    "roleDescription": "User"
  }
]
```
</br>

-- POST /api/user_apps_roles
```json
request ->
{
  "email": "aakash.kumar@ad.aaditya-designers.com",
  "appCode": "E-COMMERCE",
  "roleCode": "ADMIN"
}

response ->
{
    "id": 1
}
```
<br/>

-- DELETE /api/user_apps_roles/<b>kavita.raikwar@ad.aaditya-designers.com/COLLEGE/USER</b>
```sh
response ->
{
    "changes": 1
}
```
