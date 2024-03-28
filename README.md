                                                                                     BACKEND PROJECT
In this project I have made the api`s for Login,Logout,Register.I used Mongodb database to store the data of registered users

**API-URL : https://backend-assignment-pioneerlabs.onrender.com/api/user/register**
**Method:POST**
User Registeration : while user registeration the user has to give input of name,email,password,but in schema I have mentioned the role key an by default it is "user".
----The email is verified by providing some string to validate,if email is invalid it gives an error message of invalid email "please provide valid email" 
----Before storing the user data into the database, I have filtered weather the eamil is exist in the database or not.If email is present in database it gives the message "Email alredy exist pls login"
---The password is hashed using the bcrypt and the password is saved securly.


**Api-Url:https://backend-assignment-pioneerlabs.onrender.com/api/user/login**
**Method:POST**
User Login : The user has to provide to provid the email and password.
----The password is compared using bcrypt.compare method, if the password is incorrect it says invalid credientials provided.
----If the user is logged in successfuly,It shows the user is logged in successfully.
---I have used jsonwebtoken ,the token is generated when the user is successfully loged in and that token is stored in cookies.
----The cookie name i have used in this project is "jwtoken"
---while using jsonwebtoken in jwt.sign method i have stored the user _id as userId and this is used to retrive the user data
---The cookie will expires in 1day and the jwtoken will expires in 1day

**API-URL:https://backend-assignment-pioneerlabs.onrender.com/api/user/logout**
**Method:GET**
User Logout: In this task the cookie is destroyed and the user will be loggedOut

**MIDDLEWARES**
--AuthenticateUser
--isAdmin 
*In AuthenticateUser middleware it checks weather the user is logged in or not 
---using this middleware i Have made an api for seeing the logged in user details like name,email,role.
**API-URL:https://backend-assignment-pioneerlabs.onrender.com/api/v1/user-details** 
The user has to login and this middleware will verify the jwttoken using the cookies and if the cookie is valid the using the userId present in the jwtoken it will find user detail and send`s the user details as response and if the user is not logged in ,it send`s the response as please login

**IsAdmin**
---using this middleware i have implemented that the admin can view all the registered users from database.
---if the user is not admin, it gives response as "You are not allowed for this process".
---for testing i have made one user as a admin 
**
{
 "email":"pioneerlabs123@gmail.com",
  "password":"pioneerlabs123"
}
**
**Please use above email and password,The role of this user is admin.So this user can view the all registered user`s which are present in the database**
**API-URL:"https://backend-assignment-pioneerlabs.onrender.com/api/v1/registered-users"**
**Method:GET**


**Filteration and Pagination of given api url**
---the data present in the url is fetched and saved in the mongodb database.
---Using that data i have implemented the filteration of data using categories.**Please use category,page,limit-as query to the ul path**
---The page is 1 by default and limit is 10 by default 
**API-URL:"https://backend-assignment-pioneerlabs.onrender.com/api/data/api-data"**
**Method:GET**

-----------SWAGGER---------
**SWAGGER URL:https://backend-assignment-pioneerlabs.onrender.com/api-docs/#/User%20Details/get_api_v1_user_details** 
The swagger is integrated to my project but there is one issue in the swagger that is---The swagger is not storing the cookies.The name of the cookie i used is "jwtoken"...but it does`nt store cookie and the authorization and authentication i have made using the cookies but not using the "bearer token". this one thing is couldn`t done.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
All this apis are perfectly tested in the **POSTMAN** and the outputs are perfect to the code which i have implemented..
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**BACKEND** -- NODE JS,EXPRESS JS
**DATABASE** --MONGODB
**DEPLOYMENT** --RENDER 

 ----------------------------------------------------------------------------------THANK YOU------------------------------------------------------------------------------------------------------------------------ 

