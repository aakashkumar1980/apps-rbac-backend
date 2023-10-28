# Role Based Access Control (RBAC) - Backend App
This <b><u>Backend App</u></b> is API server of the <b>Role Based Access Control</b> setup system. This server stores the RBAC configuration API data in an embedded SQLite3 database. You can fork the repository and modify the code to use alternate database. 
> src/components/db/db-connection.ts.

NOTE: Corresponding <b><u>UI App</u></b> of the <b>Role Based Access Control</b> setup system:  
https://github.com/aakashkumar1980/apps-rbac-ui


## Operation API specs

<details>
<summary>APP</summary>

-- GET /api/app
```json
response ->
[
  {
    "id": 2,
    "code": "COLLEGE",
    "description": "College Management App"
  },
  {
    "id": 1,
    "code": "E-COMMERCE",
    "description": "E-Commerce App"
  }
]
```
</br>

-- POST /api/app
```json
request ->
{
    "code": "COLLEGE",
    "description": "College Management App"
}

response ->
{
    "id": 2
}
```
<br/>

-- DELETE /api/app/<span style="color:red">COLLEGE</span>
```sh
response ->
{
    "changes": 1
}
```
</details>