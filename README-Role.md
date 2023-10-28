<b>ROLE</b>

-- GET /api/role
```json
response ->
[
  {
    "id": 1,
    "code": "ADMIN",
    "description": "Administrator"
  },
  {
    "id": 2,
    "code": "RESEARCHER",
    "description": "Researcher"
  },
  {
    "id": 3,
    "code": "USER",
    "description": "User"
  }
]
```
</br>

-- POST /api/role
```json
request ->
{
  "code": "ADMIN",
  "description": "Administrator"
}

response ->
{
    "id":1
}
```
<br/>

-- DELETE /api/role/<b>USER</b>
```sh
response ->
{
    "changes":1
}
```
