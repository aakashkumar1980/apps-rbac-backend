<b>APP</b>

-- GET /api/app
```json
response ->
[
  {
    "id": 1,
    "code":"E-COMMERCE",
    "description":"E-Commerce App"
  },  
  {
    "id": 2,
    "code": "COLLEGE",
    "description": "College Management App"
  }
]
```
</br>

-- POST /api/app
```json
request ->
{
  "code":"E-COMMERCE",
  "description":"E-Commerce App"
}

response ->
{
    "id":1
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
