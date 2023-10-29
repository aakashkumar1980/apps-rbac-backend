<b>  FEATURE</b>

-- GET /api/feature
```json
response ->
[
  {
    "id": 1,
    "code": "PRODUCT_LIST",
    "description": "View Products List",
    "appCode": "E-COMMERCE",
    "appDescription": "E-Commerce App"
  },    
  {
    "id": 2,
    "code": "ORDER_MANAGEMENT",
    "description": "Manage Customer Orders",
    "appCode": "E-COMMERCE",
    "appDescription": "E-Commerce App"
  },  
  {
    "id": 3,
    "code": "CUSTOMER_REVIEWS",
    "description": "View Customer Reviews",
    "appCode": "E-COMMERCE",
    "appDescription": "E-Commerce App"
  },  
  {
    "id": 4,
    "code": "E-COM_ANALYTICS",
    "description": "Access E-commerce Analytics",
    "appCode": "E-COMMERCE",
    "appDescription": "E-Commerce App"
  },  
  {
    "id": 5,
    "code": "STUDENT_DIRECTORY",
    "description": "Access Student Directory",
    "appCode": "COLLEGE",
    "appDescription": "College Management App"
  },
  {
    "id": 6,
    "code": "COURSE_MANAGEMENT",
    "description": "Manage Courses",
    "appCode": "COLLEGE",
    "appDescription": "College Management App"
  },
  {
    "id": 7,
    "code": "EXAM_SCHEDULE",
    "description": "Manage Exam Schedules",
    "appCode": "COLLEGE",
    "appDescription": "College Management App"
  }
]
```
</br>

-- POST /api/feature
```json
request ->
{
  "code": "PRODUCT_LIST",
  "description": "View Products List",
  "appCode": "E-COMMERCE"  
}

response ->
{
    "id": 1
}
```
<br/>

-- DELETE /api/feature/<b>EXAM_SCHEDULE</b>
```sh
response ->
{
    "changes": 1
}
```
