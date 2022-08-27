# Rocket Academy Coding Bootcamp: Webpack MVC Base

# sequelize-cli-bootcamp

# TIPS

# copy .env file and sequelzierc file

Step 1:

# Create db

npx sequelize db:create

Step 2:

# Table Migrations

npx sequelize migration:generate --name create-items-table
-> Fill up migration table

# Create the table

npx sequelize db:migrate

Step 3:

# Seed Data, generates filename as seed-data

npx sequelize seed:generate --name seed-data

# Fill up seed data

npx sequelize db:seed:all

# Packages

npm install pg sequelize
npm install --save-dev sequelize-cli
npm install express ejs method-override cookie-parser dotenv faker
