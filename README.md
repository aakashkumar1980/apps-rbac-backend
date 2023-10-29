# Privilege Pass (Role Based Access Control)
## Backend Server
This app is API server of the <b>Role Based Access Control</b> setup system. This server manages the RBAC configuration in an embedded SQLite3 database. You can fork the repository and modify the code to use alternate database. 
> src/components/db/db-connection.ts.

NOTE: Corresponding <b><u>UI App</u></b> of the <b>Role Based Access Control</b> setup system:  
https://github.com/aakashkumar1980/apps-rbac-ui


### API specs
The below data is the <u>sample values</u> just to show a set of an Application, related Features along with mappings of the User having Roles.

[App](./_readme-resources/README-App.md)
<br/>
[Features](./_readme-resources/README-Features.md)

[Role](./_readme-resources/README-Role.md)
<br/>
<br/>

[Role_Features](./_readme-resources/README-Role_Features.md)
<br/>
[User_Apps_Roles](./_readme-resources/README-User_Apps_Roles.md)



### EXTERNAL API specs
The below data is the <u>sample values</u> just to show a set of Features associated with a User in an App.
This API should be used by all applications for their Authorization.

[User_App_Features](./_readme-resources/README-User_App_Features.md)