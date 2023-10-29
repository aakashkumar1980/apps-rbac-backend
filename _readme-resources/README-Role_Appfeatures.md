<b>ROLE_APPFEATURES</b>

-- GET /api/role_appfeatures
```json
response ->
[
  {
    "id": 1,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "E-Commerce App",
    "appfeaturesCode": "PRODUCT_LIST",
    "appfeaturesDescription": "View Products List"
  },
  {
    "id": 2,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "E-Commerce App",
    "appfeaturesCode": "ORDER_MANAGEMENT",
    "appfeaturesDescription": "Manage Customer Orders"
  },
  {
    "id": 3,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "E-Commerce App",
    "appfeaturesCode": "CUSTOMER_REVIEWS",
    "appfeaturesDescription": "View Customer Reviews"
  },
  {
    "id": 4,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "College Management App",
    "appfeaturesCode": "STUDENT_DIRECTORY",
    "appfeaturesDescription": "Access Student Directory"
  },
  {
    "id": 5,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "College Management App",
    "appfeaturesCode": "COURSE_MANAGEMENT",
    "appfeaturesDescription": "Manage Courses"
  },
  {
    "id": 6,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "College Management App",
    "appfeaturesCode": "EXAM_SCHEDULE",
    "appfeaturesDescription": "Manage Exam Schedules"
  },
  {
    "id": 7,
    "roleCode": "RESEARCHER",
    "roleDescription": "Researcher",
    "appDescription": "E-Commerce App",
    "appfeaturesCode": "E-COM_ANALYTICS",
    "appfeaturesDescription": "Access E-commerce Analytics"
  },
  {
    "id": 8,
    "roleCode": "USER",
    "roleDescription": "User",
    "appDescription": "E-Commerce App",
    "appfeaturesCode": "PRODUCT_LIST",
    "appfeaturesDescription": "View Products List"
  },
  {
    "id": 9,
    "roleCode": "USER",
    "roleDescription": "User",
    "appDescription": "E-Commerce App",
    "appfeaturesCode": "CUSTOMER_REVIEWS",
    "appfeaturesDescription": "View Customer Reviews"
  },
  {
    "id": 10,
    "roleCode": "USER",
    "roleDescription": "User",
    "appDescription": "College Management App",
    "appfeaturesCode": "STUDENT_DIRECTORY",
    "appfeaturesDescription": "Access Student Directory"
  }
]
```
</br>

-- POST /api/role_appfeatures
```json
request ->
{
  "roleCode": "ADMIN",
  "appfeaturesCode": "PRODUCT_LIST"
}

response ->
{
    "id": 1
}
```
<br/>

-- DELETE /api/role_appfeatures/<b>USER/STUDENT_DIRECTORY</b>
```sh
response ->
{
    "changes": 1
}
```
