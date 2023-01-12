# How to Configure and Run the Project

## 1. Install Project

After download the codebase from the repo, just execute **yarn** or **npm install**.

## 2. Setup MySQL

Install MySQL server and create the database

## 3. Make the .env file for the project

create the file '.env' in the root of the project and copy the content of '.env.example' and fill in the blank values

## 4. Run the project

#### - Run the project with development mode (watch mode)

execute the following command - **yarn dev** or **npm run dev**. You can see the running backend server.

## 5. Techniques

#### Node.js

#### TypeScript

#### TypeORM

#### ExpressJS

#### routing-controller

#### VIN decoder API

# How to Test the Project

I implemented 5 features in the project for retrieving the data in DB.

## 1. insert a car

method: PUT
API URI: [host]/cars
Request:
{
"vin": "JN1AZ4EH9EM635186",
"licensePlate": "RBH2995",
"regi": "Marker",
"regiState": "GR",
"regiExp": "2022-06-30",
"regiName": "Beleto",
"carValue": 50000000,
"currentMileage": 390000, //optional - if you don't specify, this value will be 0 in DB.
"description": "This is very fantastic car!", //optional - if not specify, it will be empty string.
"color": "#123499" //optional - if not specified, it will be black - #000000
}`
when inserting a car, decode the VIN and fetch the Make Year, Make and Model and insert them into DB.

## 2. update a car

method: POST
API URI: [host]/cars
Request:
{
"id": "c6d31fb5-2d0f-41c2-b700-853b6082aa05",
"licensePlate": "RBH2995",
"regi": "Marker",
"regiState": "GR",
"regiExp": "2022-06-30",
"regiName": "Beleto",
"carValue": 50000000,
"currentMileage": 390000,
"description": "This is very fantastic car!",
"color": "#123499"
}
Here you can't update the VIN. If you are trying to update VIN, it means you are trying to work on a new car. So in updating logic, there can't be part for updating VIN.

## 3. Get a specified car by ID

method: GET
API URI: [host]/cars/:id
Returns the info of the car with a specified id.

## 4. Search the cars

method: GET
API URI: [host]/cars?keyword=Fanta&page=0&size=10

This is search API for searching cars based on VIN, LicensePlate, Registration, Registration State, Registration Expiration, Car Value, Current Mileage and Keyword.

### - get the car with a specified VIN

If you want to search based on VIN, you can call **[host]/cars?vin=JN1AZ4EH9EM635186&page=0&size=10** with GET method.
Here, page means what page and size is how many rows in 1 page. And vin means a specified car's vin. But in this case page and size are unnecessary params. They are just symbolic params. But not optional. And in the case that there is VIN in query, other params are ignored because VIN is unique.

### - get the car with a specified License Plage

**[host]/cars?licensePlate=8DJ7940&page=0&size=10**
same as VIN. I think there is no duplication of License Plate.

### - search the car based on Registration, Registration State and Registration Name

**[host]/cars?regi=James&page=0&size=10**
returns the car array and total number of array which is searched and paginated from DB
**[host]/cars?regiState=CA&page=0&size=10**
**[host]/cars?regiName=Marker&page=0&size=10**

### - search the car based on range of Registration Expiration Date, Car Value, and Current Mileage

**[host]/cars?startDate=2022-06-29&page=0&size=10**
returns the car array whose registration expiration date is greater or equal than the given value. If endDate, will return car array whose registration expiration date is less or equal than the given value.
**[host]/cars?startValue=3500000&page=0&size=10**
**[host]/cars?startMileage=3500000&page=0&size=10**

## 5. Delete a specified car

method: DELETE
API URI: [host]/cars/:id
delete the car with a given id.

# DB Structure

id: uuid - pk
vin: string - unique
license_plate: string - unique
regi: string
regi_state: string
regi_expiration: timestamp
car_value: integer - cent value not dollar value
current_mileage: integer - meter value not kilometer
description: text
color: string
year: integer
make: string
model: string

# Feedback

3 days - par time work
a little not clear
6.5
