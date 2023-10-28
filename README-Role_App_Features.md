<b>ROLE_APP_FEATURES</b>

-- GET /api/role_app_features
```json
response ->
[
  {
    "id": 1,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "E-Commerce App",
    "appFeaturesCode": "PRODUCT_LIST",
    "appFeaturesDescription": "View Products List"
  },
  {
    "id": 2,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "E-Commerce App",
    "appFeaturesCode": "ORDER_MANAGEMENT",
    "appFeaturesDescription": "Manage Customer Orders"
  },
  {
    "id": 3,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "E-Commerce App",
    "appFeaturesCode": "CUSTOMER_REVIEWS",
    "appFeaturesDescription": "View Customer Reviews"
  },
  {
    "id": 4,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "College Management App",
    "appFeaturesCode": "STUDENT_DIRECTORY",
    "appFeaturesDescription": "Access Student Directory"
  },
  {
    "id": 5,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "College Management App",
    "appFeaturesCode": "COURSE_MANAGEMENT",
    "appFeaturesDescription": "Manage Courses"
  },
  {
    "id": 6,
    "roleCode": "ADMIN",
    "roleDescription": "Administrator",
    "appDescription": "College Management App",
    "appFeaturesCode": "EXAM_SCHEDULE",
    "appFeaturesDescription": "Manage Exam Schedules"
  },
  {
    "id": 7,
    "roleCode": "RESEARCHER",
    "roleDescription": "Researcher",
    "appDescription": "E-Commerce App",
    "appFeaturesCode": "E-COM_ANALYTICS",
    "appFeaturesDescription": "Access E-commerce Analytics"
  },
  {
    "id": 8,
    "roleCode": "USER",
    "roleDescription": "User",
    "appDescription": "E-Commerce App",
    "appFeaturesCode": "PRODUCT_LIST",
    "appFeaturesDescription": "View Products List"
  },
  {
    "id": 9,
    "roleCode": "USER",
    "roleDescription": "User",
    "appDescription": "E-Commerce App",
    "appFeaturesCode": "CUSTOMER_REVIEWS",
    "appFeaturesDescription": "View Customer Reviews"
  },
  {
    "id": 10,
    "roleCode": "USER",
    "roleDescription": "User",
    "appDescription": "College Management App",
    "appFeaturesCode": "STUDENT_DIRECTORY",
    "appFeaturesDescription": "Access Student Directory"
  }
]
```
</br>

-- POST /api/role_app_features
```json
request ->
{
  "roleCode": "ADMIN",
  "appFeaturesCode": "PRODUCT_LIST"
}

response ->
{
    "id": 1
}
```
<br/>

-- DELETE /api/role_app_features/<b>USER/STUDENT_DIRECTORY</b>
```sh
response ->
{
    "changes": 1
}
```
