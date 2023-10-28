<b>APP_FEATURES</b>

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
