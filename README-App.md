<b>APP</b>

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
    "code":"E-COMMERCE",
    "description":"E-Commerce App"
  }
]
```
</br>

-- POST /api/app
```json
request ->
{
    "code":"COLLEGE",
    "description":"College Management App"
}

response ->
{
    "id":2
}
```
<br/>

-- DELETE /api/app/<b>COLLEGE</b>
```sh
response ->
{
    "changes":1
}
```
