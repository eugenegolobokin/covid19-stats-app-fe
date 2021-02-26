# COVID-19 Statistics App 
*COVID-19 Statistics App* is a web based application that shows a graph of Covid-19 weekly cases and deaths in a selected country. App uses statistics data from [this source](https://opendata.ecdc.europa.eu/covid19/nationalcasedeath/json/).

## Table of contents
* [Setup](#setup)
* [Features](#features)
* [Technologies](#technologies)


## Setup
#### 1. Necessary resources
1. For proper app functionality first step is to clone and configure backend server according to instructions from [this repository](https://github.com/eugenegolobokin/covid19-stats-app-be).
2. Install [node.js](https://nodejs.org/en/) to be able to use npm commands.

#### 2. Starting application
```
# Clone this repository
$ git clone https://github.com/eugenegolobokin/covid19-stats-app-fe.git

# Go into the repository folder
$ cd covid19-stats-app-fe

# Install dependencies
$ npm install

# Run the app
$ npm start
```

Open [http://localhost:3000](http://localhost:3000) to view app in the browser.


## Features 
* The application backend reads data from [this endpoint](https://opendata.ecdc.europa.eu/covid19/nationalcasedeath/json/). 
* Data is read from external source only once when application is starting. 
* The  COVID-19 data should is kept in memory (H2 in-memory DB is used). 
* BE provides rest api endpoint which provides covid-19 case and death data by country.
* The country should be passed as a parameter to the rest api. 
* The web application displays the chart with two lines (cases and deaths) by week. 
* In web application it is possible to select the country from the dropdown list. 
* After the country is selected the data in the chart is refreshed.


## Technologies
* React 17.0.1
* Material-ui 4.11.2
* chart.js 2.9.4
