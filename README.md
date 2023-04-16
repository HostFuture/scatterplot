# Getting Started with Scatterplot with ReactJS & Flask

This project was created using ReactJS as Front-end and Flask as Backend

## Index

* [Scatter Plot](#scatter-plot)
* [Prerequisits](#prerequisits)
* [Installation](#installation)
* [Demo Preview](#demo-preview)
* [Running the Code](#running-the-code)
  * [Start the application](#start-the-application)
* [User Guide](#user-guide)
* [Developer Contact](#developer-contact)


## Scatter Plot

Scatterplot is the process of creating scatter plot of a dataset to visualize it's trend. This project contains two parts, the backend, where we have utilized Python Flask and the frontend, where we have utilized React JS.

## Prerequisits

To initialize with this project the following software packages should be installed in the host machine
* Python v3.10.10
* Node JS v9.4.0
* yarn v1.22.19

## Installation

To install the ReactJS Application, download the zip of this repository or clone it to your system and go to the **scatterplot** directory and run the following command to install all the dependancies of this project.

```yarn install```

To setup the Flask Application, go to **api** directory under **scatterplot** directory and with the help of [requirement.txt](/scatterplot/api/requirements.txt) file install all the dependancies. It is recommended to setup a virtual environment for the flast application before installing requirement.txt

```pip install -r requirement.txt```

## Demo Preview

![Scatterplot - Full Stack Assignment](/scatterplot/screenshot/image.png)

## Running the Code

Once the prerequisits are met and the environment is setup you can run the following commands. By default Flask application runs at port 5000 and reactjs in post 3000, if you have to modify it, you can do it in the code and also please note that if the default port is changed for Flask, please update the changed port to [package.json](/scatterplot/package.json) under **proxy** configuration.

### Start the application

First you have to start the backend application (Flask) before starting ReactJS. To start the application you can use the shortcut (__the defination is updated under package.json__).

```
yarn start-api
```

Once the backend code is up, then execute the following command to start the front end code.

```
yarn start
```


## User Guide

Upon the application is up and running, the user will be awarded with the UI at port number 3000 and the backend api at 5000(_unless specified otherwise_). On the initial screen, the user will be given a choice of either **Uploading a Dataset** or **Generating a Random Dataset**.

Upon seleting the **Upload Dataset** option, user have to provide an CSV file containing data with the column name `x` and `y`.

Post uploading the dataset, or clicking on **Generate Dataset** another button will show on the screen **Show Chart**. It will confirm that the chart is loaded and ready to view. After clicking on that button the chat will be loaded on the screen.


## Developer Contact

Debjit Sadhukhan

+91 83358 39446

debjit95@engineer.com

Bangalore, India