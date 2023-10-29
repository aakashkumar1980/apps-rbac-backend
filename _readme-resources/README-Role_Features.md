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
    "featureCode": "PRODUCT_LIST",
    "featureDescription": "View Products List"
  },
  {
    "id": 2,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "E-Commerce App",
    "featureCode": "ORDER_MANAGEMENT",
    "featureDescription": "Manage Customer Orders"
  },
  {
    "id": 3,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "E-Commerce App",
    "featureCode": "CUSTOMER_REVIEWS",
    "featureDescription": "View Customer Reviews"
  },
  {
    "id": 4,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "College Management App",
    "featureCode": "STUDENT_DIRECTORY",
    "featureDescription": "Access Student Directory"
  },
  {
    "id": 5,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "College Management App",
    "featureCode": "COURSE_MANAGEMENT",
    "featureDescription": "Manage Courses"
  },
  {
    "id": 6,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "College Management App",
    "featureCode": "EXAM_SCHEDULE",
    "featureDescription": "Manage Exam Schedules"
  },
  {
    "id": 7,
    "roleCode": "RESEARCHER",
    "roleDescription": "Researcher",
    "appDescription": "E-Commerce App",
    "featureCode": "E-COM_ANALYTICS",
    "featureDescription": "Access E-commerce Analytics"
  },
  {
    "id": 8,
    "roleCode": "USER",
    "roleDescription": "User",
    "appDescription": "E-Commerce App",
    "featureCode": "PRODUCT_LIST",
    "featureDescription": "View Products List"
  },
  {
    "id": 9,
    "roleCode": "USER",
    "roleDescription": "User",
    "appDescription": "E-Commerce App",
    "featureCode": "CUSTOMER_REVIEWS",
    "featureDescription": "View Customer Reviews"
  },
  {
    "id": 10,
    "roleCode": "USER",
    "roleDescription": "User",
    "appDescription": "College Management App",
    "featureCode": "STUDENT_DIRECTORY",
    "featureDescription": "Access Student Directory"
  }
]
```
</br>

-- POST /api/role_features
```json
request ->
{
  "roleCode": "ADMIN",
  "featureCode": "PRODUCT_LIST"
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
