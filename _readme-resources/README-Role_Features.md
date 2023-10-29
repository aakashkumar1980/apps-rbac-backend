<b>ROLE_FEATURES</b>

-- GET /api/role_features
```json
response ->
[
  {
    "id": 1,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "E-Commerce App",
    "featuresCode": "PRODUCT_LIST",
    "featuresDescription": "View Products List"
  },
  {
    "id": 2,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "E-Commerce App",
    "featuresCode": "ORDER_MANAGEMENT",
    "featuresDescription": "Manage Customer Orders"
  },
  {
    "id": 3,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "E-Commerce App",
    "featuresCode": "CUSTOMER_REVIEWS",
    "featuresDescription": "View Customer Reviews"
  },
  {
    "id": 4,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "College Management App",
    "featuresCode": "STUDENT_DIRECTORY",
    "featuresDescription": "Access Student Directory"
  },
  {
    "id": 5,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "College Management App",
    "featuresCode": "COURSE_MANAGEMENT",
    "featuresDescription": "Manage Courses"
  },
  {
    "id": 6,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "College Management App",
    "featuresCode": "EXAM_SCHEDULE",
    "featuresDescription": "Manage Exam Schedules"
  },
  {
    "id": 7,
    "roleCode": "RESEARCHER",
    "roleDescription": "Researcher",
    "appDescription": "E-Commerce App",
    "featuresCode": "E-COM_ANALYTICS",
    "featuresDescription": "Access E-commerce Analytics"
  },
  {
    "id": 8,
    "roleCode": "USER",
    "roleDescription": "User",
    "appDescription": "E-Commerce App",
    "featuresCode": "PRODUCT_LIST",
    "featuresDescription": "View Products List"
  },
  {
    "id": 9,
    "roleCode": "USER",
    "roleDescription": "User",
    "appDescription": "E-Commerce App",
    "featuresCode": "CUSTOMER_REVIEWS",
    "featuresDescription": "View Customer Reviews"
  },
  {
    "id": 10,
    "roleCode": "USER",
    "roleDescription": "User",
    "appDescription": "College Management App",
    "featuresCode": "STUDENT_DIRECTORY",
    "featuresDescription": "Access Student Directory"
  }
]
```
</br>

-- POST /api/role_features
```json
request ->
{
  "roleCode": "ADMIN",
  "featuresCode": "PRODUCT_LIST"
}

response ->
{
    "id": 1
}
```
<br/>

-- DELETE /api/role_features/<b>USER/STUDENT_DIRECTORY</b>
```sh
response ->
{
    "changes": 1
}
```
