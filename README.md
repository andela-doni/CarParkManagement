# Car Park Management


An API created to solve parking challenges faced at ET


### Table of Contents
  - Technologies
  - Setup and Installation
  - How to contribute
  - Limitations
  - Faqs
  

### Technologies 
The technologies used are:

* [nodejs] - API functionalities
* [PostgresDatabase(ORM)](https://www.postgresql.org/)- PostgreSQL is a powerful, open source object-relational database system. 
* [Sequelize](http://docs.sequelizejs.com/) 
* [Express] - fast node.js network app framework

 
#### EndPoints
Api documentation
https://web.postman.co/collections/4422840-4bf47a6d-eba8-48d2-91a5-969727642de8/publish?workspace=a8b2144d-4e6d-4f99-862b-ff57e407f833

### Installation

Car Park Management requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone git@github.com:andela-doni/CarParkManagement.git
$ cd CarParkManagement
$ npm install 
$ createdb car-park-system
$ sequelize db:migrate
$ sequelize db:seed:all
$ npm run start:dev
```
Note: Parking Lot and Parking Slots are to be seeded into the database as they are permanent fixtures. 

### Limitations
1. No authentication system
2. Not enough car description fields such as color and make of car
3. Customer names are not unique




