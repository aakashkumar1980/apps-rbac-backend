# Privilege Pass (Role Based Access Control)
## Backend App
This app is API server of the <b>Role Based Access Control</b> setup system. This server manages the RBAC configuration in an embedded SQLite3 database. You can fork the repository and modify the code to use alternate database. 
> src/components/db/db-connection.ts.

NOTE: Corresponding <b><u>UI App</u></b> of the <b>Role Based Access Control</b> setup system:  
https://github.com/aakashkumar1980/apps-rbac-ui


### API specs
The below data is the sample values just to show a set of an Application, related Features along with mappings of the User having Roles.

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
</details>

<details>
<summary>APP_FEATURES</summary>

-- GET /api/app_features
```json
response ->
[
    {
        "code":"STUDENT_DIRECTORY",
        "description":"Access Student Directory",
        "appCode":"COLLEGE",
        "appDescription":"College Management App"
    },
    {
        "code":"COURSE_MANAGEMENT",
        "description":"Manage Courses",
        "appCode":"COLLEGE",
        "appDescription":"College Management App"
    },
    {
        "code":"EXAM_SCHEDULE",
        "description":"Manage Exam Schedules",
        "appCode":"COLLEGE",
        "appDescription":"College Management App"
    },
    
    {
        "code":"E-COM_ANALYTICS",
        "description":"Access E-commerce Analytics",
        "appCode":"E-COMMERCE",
        "appDescription":"E-Commerce App"
    },
    {
        "code":"ORDER_MANAGEMENT",
        "description":"Manage Customer Orders",
        "appCode":"E-COMMERCE",
        "appDescription":"E-Commerce App"
    },
    {
        "code":"CUSTOMER_REVIEWS",
        "description":"View Customer Reviews",
        "appCode":"E-COMMERCE",
        "appDescription":"E-Commerce App"
    },
    {
        "code":"PRODUCT_LIST",
        "description":"View Products List",
        "appCode":"E-COMMERCE",
        "appDescription":"E-Commerce App"
    }
]
```
</br>

-- POST /api/app_features
```json
request ->
{
    "code":"STUDENT_DIRECTORY",
    "description":"Access Student Directory",
    "appCode":"COLLEGE"
}

response ->
{
    "id": 1
}
```
<br/>

-- DELETE /api/app_features/<b>STUDENT_DIRECTORY</b>
```sh
response ->
{
    "changes": 1
}
```
</details>