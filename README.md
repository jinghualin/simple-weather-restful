# Simple weather restful api 
A simple example to build a REST based service. 

The service is deployed as docker image with the name `jinghualin/simple-weather-restful`

## Goal
To learn `node` and `restify`, which used to build a restful api service.

## How to use
run `npm i` && `npm run start`

Use curl or postman to test the API service.

Ex. with postman
1. Get cities nearby given latitude and longitude

   localhost:8080/cities?lat=49&lng=10

2. Get a city by cityID(this id please see city api under this document)

   localhost:8080/cities/2172797


3. Get a weather for a city

   localhost:8080/cities/2172797/weather


## Dependencies
### used
nodemon
request && request-promise
rimraf
ts-node
typescript
restify

### maybe future
mocha - for TDD
    
## City api 
API Document [here](http://www.geonames.org/export/ws-overview.html)

## Weather api
API Document [here](https://openweathermap.org/current)
