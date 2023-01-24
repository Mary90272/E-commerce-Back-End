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

## Video showing the functionality of the application
First video shows all requests in local machine<br>
![alt text](assets/video/Untitled_-Jan-23_-2023-10_35-PM.gif)
Second video shows  GET routes for all categories, all products, and all tags being tested in Insomnia Core<br>
![alt text](assets/video/Untitled_-Jan-24_-2023-12_16-PM.gif)
Third video shows  POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia Core<br>
![alt text](assets/video/Untitled_-Jan-24_-2023-12_48-PM.gif)
## Relevant Links
Link video :<br>

Github Repo:<br> 
