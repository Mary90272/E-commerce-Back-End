# E-commerce-Back-End
## Description
This app is the backend portion of an E-Commerce website. Express.js was used for the server and MySQL for the database along with Sequelize as the ORM to run SQL models and queries. The SQL database includes tables for products, categories, tags, and product tags. RESTful API routes are used to make requests and updates from the database which are joined through Sequelize queries.

## Installation
Download or clone repository<br>
-npm install to install the required npm packages<br>
-npm install mysql2<br>
-npm i sequelize<br>
-npm i express
-npm i dotenv<br>

Open VsCode Terminal<br>
-open db folder<br>
-type mysql -u root -p<br>
-source schema.sql<br>
-npm run seed<br>
-npm start<br>
-App listening on port 3001!<br>
-open Insomnia to request<br>

## Usage
To run project on local mashine you also need to change password<br>
in .env file to your personal (Mysql) password<br>
## Images of Deployed Application
For all categories,all products,all tags<br>
![alt text](assets/images/tags.png)
![alt text](assets/images/products.png)
![alt text](assets/images/categories.png)
For single category, product,tags<br>
![alt text](assets/images/categories_each.png)
![alt text](assets/images/product_each.png)
![alt text](assets/images/tags_each.png)
Images for POST PUT DELETE 
## Video showing the functionality of the application

 Video shows  GET routes to return  all categories, all products, and all tags<br>
 And return single categories, single products,single tags<br>
![alt text](assets/video/Untitled_-Jan-28_-2023-2_18-PM.gif)
Video shows  POST, PUT, and DELETE routes in Insomnia <br>
![alt text](assets/video/Untitled_-Jan-28_-2023-2_50-PM.gif)
## Relevant Links
Link video :<br>
https://drive.google.com/file/d/1937Qf_WpADf43JFJ-vnlIgDfw9TngJbW/view
<br>
https://drive.google.com/file/d/1gsTMWNTDpBu2Y-gBcrJpYjclfoh5Go3T/view
Github Repo:<br> 
https://github.com/Mary90272/E-commerce-Back-End
