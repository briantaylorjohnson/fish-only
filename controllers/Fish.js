// Required dependencies and packages
require('dotenv').config();
const express = require("express");
const axios = require("axios");
var bcrypt = require("bcrypt");
const AWS = require("aws-sdk");

// Ensuring that all models are required
//var db = require("../models");

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "us-east-1"
});

exports.getReports = (req, res) => 
{
    
    var docClient = new AWS.DynamoDB.DocumentClient();

    var params = 
    {

    }
    
    var table = "reports";
    
    var params = {
        TableName: table,
        Key:{
        }
    };
    
    docClient.scan(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {

            response =
            {
                "Message": "Here are your fishing reports",
                "Fishing Reports": data
            }

            res.json(response);
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));

        }
    });
};

// Creates a new FishOnly.com user
exports.createUser = (req, res) =>
{
    // Encrypts the password through 10 SALT rounnds
    bcrypt.hash(req.body.password, 10, function(sec_err, hash)
    {
        var docClient = new AWS.DynamoDB.DocumentClient();

        var params =
        {
            TableName: "users",
            KeyConditionExpression: "#user = :user",
            ExpressionAttributeNames:
            {
                "#user": "user-id"
            },
            ExpressionAttributeValues:
            {
                ":user": req.body.username
            }
        };

        // Queries AWS DynamoDB with the above parameters
        docClient.query(params, (check_err, data) => 
        {
            // Checks to see if any errors occured while attempting to query AWS DynamoDB
            if (check_err)
            {
                res.json(
                {
                    "Code": 404,
                    "Outcome": "Error",
                    "Message": "Error verifying username in AWS DynamoDB table.",
                    "Details": check_err
                });
            }

            // Checks to see if the username already exists or is in use/taken
            else if (data.Count > 0)
            {
                res.json(
                {
                    "Code": 402,
                    "Outcome": "Error",
                    "Message": "Username aleady exists in AWS DynamoDB table."
                });  
            }

            // If no errors occurred during the invocation of AWS DynamoDB and the username is not already used, an attempt will be made to add the user to the AWS DynamoDB table
            else
            {
                params =
                {
                    TableName: "users",
                    Item: {
                        "user-id":  req.body.username,
                        "password": hash,
                        "email": req.body.email,
                        "firstName": req.body.firstName,
                        "lastName":  req.body.lastName,
                        "city": req.body.city,
                        "state": req.body.state,
                        "zip": req.body.zipCode,
                    }
                };

                // Creates a new user in AWS DynamoDB with the above parameters
                docClient.put(params, function(save_err, data)
                {
                    if (save_err)
                    {
                        res.json(
                        {
                            "Code": 404,
                            "Outcome": "Error",
                            "Message": "Error adding new user - " + req.body.username + ".",
                            "Details": save_err
                        });
                    }
                    else
                    {
                        res.json(
                        {
                            "Code": 200,
                            "Outcome": "Success",
                            "Message": "New user successfully added - " + req.body.username + "."
                        });
                    }
                });
            }
        });
    });
};

// Authenticates a user for log in to FishOnly.com
exports.authUser = (req, res) =>
{
    var docClient = new AWS.DynamoDB.DocumentClient();

    var params = 
    {
        TableName: "users",
        KeyConditionExpression: "#user = :user",
        ExpressionAttributeNames:
        {
            "#user": "user-id"
        },
        ExpressionAttributeValues:
        {
            ":user": req.body.username
        }
    };

    // Queries AWS DynamoDB with the above parameters
    docClient.query(params, function(auth_err, data)
    {   
        // Checks to see if any errors occured while attempting to send auth parameters to AWS DynamoDB
        if (auth_err) {
            res.json(
            {
                "Code": 404,
                "Outcome": "Error",
                "Message": "Error verifying username in AWS DynamoDB table.",
                "Details": auth_err
            });
        } 
        
        else 
        {

            // Checks to see if the username provided exists; if it does not exist then the username is invalid
            if (data.Count === 0)
            {
                res.json(
                    {
                        "Code": 401,
                        "Outcome": "Validation Failed",
                        "Message": "Incorrect username or password."
                    });
            }

            // Checks to see if the password provided matches the stored password for the username in the users table 
            else
            {
                // Decrypts the stored password and compares it to the password provided at sign in
                bcrypt.compare(req.body.password, data.Items[0].password, function(sec_err, response)
                {
                    // Conditional if the passwords are an exact match
                    if(response)
                    {
                        res.json(
                        {
                            "Code": 200,
                            "Outcome": "Success",
                            "Message": "User has been successfully authenticated.",
                            "Profile":
                            {
                                "username": data['Items'][0]['user-id'],
                                "firstName": data['Items'][0]['firstName']
                            }
                        });

                    }

                    // Conditional if the passwords do not match
                    else
                    {
                        res.json(
                        {
                            "Code": 401,
                            "Outcome": "Validation Failed",
                            "Message": "Incorrect username or password."
                        });
                    } 
                });
            }
        }
    });
}
