// Required dependencies and packages
require('dotenv').config();
const express = require("express");
const axios = require("axios");
const bcrypt = require("bcrypt");
const AWS = require("aws-sdk");

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "us-east-1"
});


// Retrieves all of the fishing reports for a FishOnly.com user
exports.getReports = (req, res) => 
{
    
    let docClient = new AWS.DynamoDB.DocumentClient();

    let params = 
    {
        TableName: "reports",
        FilterExpression: "#username = :val",
        ExpressionAttributeNames: {
            "#username":"user-id"
        },
        ExpressionAttributeValues: {":val": req.body.username},
        ReturnConsumedCapacity: "TOTAL"
    };

    // Queries AWS DynamoDB with the above parameters
    docClient.scan(params, (report_err, data) =>
    {   
        // Checks to see if any errors occured while attempting to send auth parameters to AWS DynamoDB
        if (report_err)
        {
            res.json(
            {
                "code": 500,
                "outcome": "Error",
                "message": "Error retrieving fishing reports from AWS DynamoDB table.",
                "details": auth_err
            });
        }

        else
        {
            res.json(
            {
                "code": 200,
                "outcome": "Success",
                "message": "Fishing reports successfully retrieved from AWS DynamoDB table",
                "reports": data.Items
            });
        }
    });    
};

// Posts a new FishOnly.com fishing report for a user
exports.postReport = (req, res) =>
{
    let docClient = new AWS.DynamoDB.DocumentClient();

    let params = 
    {
        TableName: "reports",
        FilterExpression: "#username = :val",
        ExpressionAttributeNames: {
            "#username":"user-id"
        },
        ExpressionAttributeValues: {":val": req.body.username},
        ReturnConsumedCapacity: "TOTAL"
    };

    // Queries AWS DynamoDB with the above parameters
    docClient.scan(params, (count_err, data) =>
    {   
        // Checks to see if any errors occured while attempting to count the user's fishing reports in AWS DynamoDB
        if (count_err)
        {
            res.json(
            {
                "code": 500,
                "outcome": "Error",
                "message": "Error counting fishing reports from AWS DynamoDB table.",
                "details": auth_err
            });
        }

        // Posts a new fishing report to the AWS DynamoDB table for the user
        else
        {
            // Creates a unique fishing report ID by concatenating the username with the count of reports plus one (count + 1)
            let count = data.Count;
            count += 1;
            reportId = req.body.username + count;

            // Fishing report data to be stored in AWS DynamoDB table
            let params = 
            {
                TableName: "reports",
                Item:
                {
                    "user-id":  req.body.username,
                    "location": req.body.location,
                    "air-temp": req.body.airTemp,
                    "water-temp": req.body.waterTemp,
                    "report-id": reportId,
                    "time": req.body.time,
                    "weight": req.body.weight,
                    "geolocation": req.body.geolocation,
                    "species": req.body.species,
                    "date": req.body.date,
                    "tackle": req.body.tackle,
                    "length": req.body.length,
                    "color": req.body.color,
                    "wind-direction": req.body.windDirection,
                    "wind-speed": req.body.windSpeed,
                    "weather": req.body.weather,
                    "notes": req.body.notes,
                    "deleted": false
                }
            };

            // Posts a new fishing report in the AWS DynamoDB table with the above parameters
            docClient.put(params, (save_err, data) =>
            {
                if (save_err)
                {
                    res.json(
                    {
                        "code": 500,
                        "outcome": "Error",
                        "message": "Error posting new fishing report - " + reportId + ".",
                        "details": save_err
                    });
                }
                else
                {
                    res.json(
                    {
                        "code": 200,
                        "outcome": "Success",
                        "message": "New fishing report successfully posted - " + req.body.username + "."
                    });
                }
            });
        }
    });
}

// Delete a FishOnly.com fishing report
exports.deleteReport = (req, res) =>
{
    let docClient = new AWS.DynamoDB.DocumentClient();
    
    let params = 
    {
        TableName: "reports",
        Key: {"report-id": req.body.reportId},
        UpdateExpression: "set #del = :d",
        ExpressionAttributeNames:
        {
            "#del": "deleted"
        },
        ExpressionAttributeValues: {":d": true},
    }

    docClient.update(params, function(delete_err, data) 
    {
        if (delete_err) {
            res.json(
            {
                "code": 500,
                "outcome": "Error",
                "message": "Error encountered deleting fishing report: " + req.body.reportId + ".",
                "details": delete_err
            });

        } else {
            res.json(
            {
                "code": 200,
                "outcome": "Success",
                "message": "The fishing report has been deleted: " + req.body.reportId + ".",
            });
        }
    });
}

// Creates a new FishOnly.com user
exports.createUser = (req, res) =>
{
    // Encrypts the password through 10 SALT rounnds
    bcrypt.hash(req.body.password, 10, (sec_err, hash) =>
    {
        let docClient = new AWS.DynamoDB.DocumentClient();

        let params =
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
                    "code": 500,
                    "outcome": "Error",
                    "message": "Error verifying username in AWS DynamoDB table.",
                    "details": check_err
                });
            }

            // Checks to see if the username already exists or is in use/taken
            else if (data.Count > 0)
            {
                res.json(
                {
                    "code": 400,
                    "outcome": "Error",
                    "message": "Username aleady exists in AWS DynamoDB table."
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

                // Creates a new user in the AWS DynamoDB table with the above parameters
                docClient.put(params, (save_err, data) =>
                {
                    if (save_err)
                    {
                        res.json(
                        {
                            "code": 500,
                            "outcome": "Error",
                            "message": "Error adding new user - " + req.body.username + ".",
                            "details": save_err
                        });
                    }
                    else
                    {
                        res.json(
                        {
                            "code": 200,
                            "outcome": "Success",
                            "message": "New user successfully added - " + req.body.username + "."
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
    let docClient = new AWS.DynamoDB.DocumentClient();

    let params = 
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
    docClient.query(params, (auth_err, data) =>
    {   
        // Checks to see if any errors occured while attempting to send auth parameters to AWS DynamoDB
        if (auth_err)
        {
            res.json(
            {
                "code": 500,
                "outcome": "Error",
                "message": "Error verifying username in AWS DynamoDB table.",
                "details": auth_err
            });
        } 
        
        else 
        {

            // Checks to see if the username provided exists; if it does not exist then the username is invalid
            if (data.Count === 0)
            {
                res.json(
                {
                    "code": 401,
                    "outcome": "Validation Failed",
                    "message": "Incorrect username or password."
                });
            }

            // Checks to see if the password provided matches the stored password for the username in the users table 
            else
            {
                // Decrypts the stored password and compares it to the password provided at sign in
                bcrypt.compare(req.body.password, data.Items[0].password, (sec_err, response) =>
                {
                    // Conditional if the passwords are an exact match
                    if(response)
                    {
                        res.json(
                        {
                            "code": 200,
                            "outcome": "Success",
                            "message": "User has been successfully authenticated.",
                            "profile":
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
                            "code": 401,
                            "outcome": "Validation Failed",
                            "message": "Incorrect username or password."
                        });
                    } 
                });
            }
        }
    });
}

// Updates a FishOnly.com user profile attributes
exports.updateUserAttribute = (req, res) =>
{
    let docClient = new AWS.DynamoDB.DocumentClient();

    let expression = "";
    let attr = "";
    let alias = "";
    let attribute = "";

    // This switch allows for one API call to be used to update user attributes with AWS DynamoDB
    switch (req.body.attrName)
    {
        case "email":
            expression = "set #em = :e";
            attr = ":e";
            attribute = "email";
            alias = "#em";
            break;

        case "firstName":
            expression = "set #fn = :f";
            attr = ":f";
            attribute = "firstName";
            alias = "#fn";
            break;
        
        case "lastName":
            expression = "set #ln = :l";
            attr = ":l";
            attribute = "lastName";
            alias = "#ln";
            break;

        case "city":
            expression = "set #ci = :c";
            attr = ":c";
            attribute = "city";
            alias = "#ci";
            break;

        case "state":
            expression = "set #st = :s";
            attr = ":s";
            attribute = "state";
            alias = "#st";
            break;

        case "zipCode":
            expression = "set #zi = :z";
            attr = ":z";
            attribute = "zip"
            alias = "#zi";
            break;
    }

    let params = 
    {
        TableName: "users",
        Key: {"user-id": req.body.username},
        UpdateExpression: expression,
        ExpressionAttributeNames:
        {
            [alias]: attribute
        },
        ExpressionAttributeValues: {[attr]: req.body.attrValue},
    }

    // Updates a FishOnly.com user's attributes in the AWS DynanoDB table given the above parameters
    docClient.update(params, (update_err, data) =>
    {
        if (update_err)
        {
            res.json(
            {
                "code": 500,
                "outcome": "Error",
                "message": "Error encountered updating user attribute: " + req.body.attrName + ".",
                "details": update_err
            });

        } else
        {
            res.json(
            {
                "code": 200,
                "outcome": "Success",
                "message": "User attribute successfully updated: " + req.body.attrName + ".",
            });
        }
    });
}