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



## Relevant Links
Link video :<br>
https://watch.screencastify.com/v/zlMlTJde8bH3sHx8llFP<br>
Github Repo:<br> 
https://github.com/Mary90272/E-commerce-Back-End
