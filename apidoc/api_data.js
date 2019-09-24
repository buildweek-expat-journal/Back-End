define({ "api": [  {    "type": "delete",    "url": "/trips/photo/:id",    "title": "Delete a photo by ID",    "version": "1.0.0",    "name": "DeletePhoto",    "group": "Trips",    "description": "<p>Delete a photo by ID</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Unique photo ID</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Deleted photo</p>"          }        ]      }    },    "examples": [      {        "title": "Example request.headers:",        "content": "{\n  \"token\": \"jsonwebtoken\"\n}",        "type": "js"      }    ],    "error": {      "fields": {        "Error 400": [          {            "group": "Error 400",            "optional": false,            "field": "DeleteFail",            "description": "<p>Could not delete photo</p>"          }        ]      }    },    "filename": "./trips/trips-docs.js",    "groupTitle": "Trips"  },  {    "type": "delete",    "url": "/trips/:id",    "title": "Delete a trip by ID",    "version": "1.0.0",    "name": "DeleteTrip",    "group": "Trips",    "description": "<p>Delete a trip by ID</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Unique trip ID</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Trip deleted</p>"          }        ]      }    },    "examples": [      {        "title": "Example request.headers:",        "content": "{\n  \"token\": \"jsonwebtoken\"\n}",        "type": "js"      }    ],    "error": {      "fields": {        "Reject 400": [          {            "group": "Reject 400",            "optional": false,            "field": "Unauthorized",            "description": "<p>Permission denied</p>"          }        ],        "Error 400": [          {            "group": "Error 400",            "optional": false,            "field": "DeleteTripFail",            "description": "<p>Could not delete trip</p>"          }        ]      }    },    "filename": "./trips/trips-docs.js",    "groupTitle": "Trips"  },  {    "type": "delete",    "url": "/trips/:id/photos",    "title": "Delete all trip photos",    "version": "1.0.0",    "name": "DeleteTripPhotos",    "group": "Trips",    "description": "<p>Delete all trip photos</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Unique trip ID</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Deleted photos</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "count",            "description": "<p>Number of photos deleted</p>"          }        ]      }    },    "examples": [      {        "title": "Example request.headers:",        "content": "{\n  \"token\": \"jsonwebtoken\"\n}",        "type": "js"      }    ],    "error": {      "fields": {        "Reject 400": [          {            "group": "Reject 400",            "optional": false,            "field": "Unauthorized",            "description": "<p>Permission denied</p>"          }        ],        "Error 400": [          {            "group": "Error 400",            "optional": false,            "field": "DeleteTripPhotosFail",            "description": "<p>Could not delete photos</p>"          }        ]      }    },    "filename": "./trips/trips-docs.js",    "groupTitle": "Trips"  },  {    "type": "get",    "url": "/trips/photo/:id",    "title": "Get a photo by ID",    "version": "1.0.0",    "name": "GetPhoto",    "group": "Trips",    "description": "<p>Get a photo by ID</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Unique photo ID</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Photo ID</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "url",            "description": "<p>URL of the photo</p>"          }        ]      }    },    "error": {      "fields": {        "Error 404": [          {            "group": "Error 404",            "optional": false,            "field": "NotFound",            "description": "<p>Could not find photo</p>"          }        ]      }    },    "filename": "./trips/trips-docs.js",    "groupTitle": "Trips"  },  {    "type": "get",    "url": "/trips/:id",    "title": "Get a trip by ID",    "version": "1.0.0",    "name": "GetTrip",    "group": "Trips",    "description": "<p>Get a trip by ID</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Unique trip ID</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of the trip</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "location",            "description": "<p>Trip location</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "description",            "description": "<p>Trip description</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "short_desc",            "description": "<p>Trip short description</p>"          }        ]      },      "examples": [        {          "title": "{",          "content": "{\n  \"id\": 1,\n  \"location\": \"Somewhere\",\n  \"description\": \"Something\",\n  \"short_desc\": \"Short something\",\n  \"photos\": [\n    {\n      \"url\": \"Some url\"\n    },\n    {\n      \"url\": \"Some other url\"\n    }\n    // etc\n  ]\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 404": [          {            "group": "Error 404",            "optional": false,            "field": "TripNotFound",            "description": "<p>Could not find trip</p>"          }        ]      }    },    "filename": "./trips/trips-docs.js",    "groupTitle": "Trips"  },  {    "type": "get",    "url": "/trips/:id/photos",    "title": "Get all photos of a trip",    "version": "1.0.0",    "name": "GetTripPhotos",    "group": "Trips",    "description": "<p>Get all photos of a trip</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Unique trip ID</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "photos",            "description": "<p>All trip photos</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "200 OK\n[\n  {\n    \"url\": \"Photo URL\"\n  },\n  {\n    \"url\": \"Another photo URL\"\n  }\n  // etc\n]",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 404": [          {            "group": "Error 404",            "optional": false,            "field": "GetTripPhotosFail",            "description": "<p>Could not retrieve photos</p>"          }        ]      }    },    "filename": "./trips/trips-docs.js",    "groupTitle": "Trips"  },  {    "type": "get",    "url": "/trips/",    "title": "Get all trips",    "version": "1.0.0",    "name": "GetTrips",    "group": "Trips",    "description": "<p>Get all trips</p>",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of trip</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "user_id",            "description": "<p>ID of user who posted the trip</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "location",            "description": "<p>Location of trip</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "description",            "description": "<p>Description of trip</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "short_desc",            "description": "<p>Short description of the trip, the tagline</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "200 OK\n[\n  {\n    \"trip_id\": 1,\n    \"user_id\": 1,\n    \"location\": \"Somewhere\",\n    \"description\": \"Text\",\n    \"short_desc\": \"Short text\",\n    \"photo_id\": 1,\n    \"url\": \"Some URL\" // just matches the default photo\n  },\n  {\n    \"id\": 2,\n    \"user_id\": 4,\n    \"location\": \"Somewhere else\",\n    \"description\": \"Text\",\n    \"short_desc\": \"Short text\",\n    \"photo_id\": 3,\n    \"url\": \"Some other URL\"\n  }\n  // and so on\n]",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 404": [          {            "group": "Error 404",            "optional": false,            "field": "TripsNotFound",            "description": "<p>Could not retrieve trips</p>"          }        ]      }    },    "filename": "./trips/trips-docs.js",    "groupTitle": "Trips"  },  {    "type": "post",    "url": "/trips/",    "title": "Post a trip",    "name": "PostTrip",    "group": "Trips",    "description": "<p>Post a trip</p>",    "examples": [      {        "title": "Example request.body:",        "content": "{\n  \"location\": \"Somewhere\",\n  \"description\": \"Something\",\n  \"short_desc\": \"Short something\",\n  // photos are optional\n  \"photos\": [\n    {\n      \"url\": \"Some Url\"\n    },\n    {\n      \"url\": \"Some other Url\"\n    }\n    // etc\n  ]\n}",        "type": "js"      },      {        "title": "Example request.headers:",        "content": "{\n  \"token\": \"jsonwebtoken\"\n}",        "type": "js"      }    ],    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Trip created</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "trip_id",            "description": ""          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "photos",            "description": "<p>Number of photos added</p>"          }        ]      }    },    "error": {      "fields": {        "Reject 400": [          {            "group": "Reject 400",            "optional": false,            "field": "Unauthorized",            "description": "<p>Permission denied</p>"          }        ],        "Error 400": [          {            "group": "Error 400",            "optional": false,            "field": "TripPostFail",            "description": "<p>Could not post trip</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "./trips/trips-docs.js",    "groupTitle": "Trips"  },  {    "type": "post",    "url": "/trips/:id/photos",    "title": "Post photos to a trip",    "version": "1.0.0",    "name": "PostTripPhotos",    "group": "Trips",    "description": "<p>Post photos to a trip</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Unique trip ID</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Photos posted to trip</p>"          }        ]      }    },    "examples": [      {        "title": "Example request.body:",        "content": "[\n  {\n    \"url\": \"New photo URL\"\n  },\n  {\n    \"url\": \"Another new photo URL\"\n  },\n  // etc, min 1\n]",        "type": "js"      },      {        "title": "Example request.headers:",        "content": "{\n  \"token\": \"jsonwebtoken\"\n}",        "type": "js"      }    ],    "error": {      "fields": {        "Reject 400": [          {            "group": "Reject 400",            "optional": false,            "field": "Unauthorized",            "description": "<p>Permission denied</p>"          }        ],        "Error 400": [          {            "group": "Error 400",            "optional": false,            "field": "PostTripPhotosFail",            "description": "<p>Failed to post photos</p>"          }        ]      }    },    "filename": "./trips/trips-docs.js",    "groupTitle": "Trips"  },  {    "type": "put",    "url": "/trips/photo/:id",    "title": "Update a photo by ID",    "version": "1.0.0",    "name": "UpdatePhoto",    "group": "Trips",    "description": "<p>Update a photo by ID</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Unique photo ID</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Photo updated</p>"          }        ]      }    },    "examples": [      {        "title": "Example request.body:",        "content": "{\n  \"url\": \"New URL\"\n}",        "type": "js"      },      {        "title": "Example request.headers:",        "content": "{\n  \"token\": \"jsonwebtoken\"\n}",        "type": "js"      }    ],    "error": {      "fields": {        "Reject 400": [          {            "group": "Reject 400",            "optional": false,            "field": "Unauthorized",            "description": "<p>Permission denied</p>"          }        ],        "Error 400": [          {            "group": "Error 400",            "optional": false,            "field": "UpdatePhotoFail",            "description": "<p>Could not update photo</p>"          }        ]      }    },    "filename": "./trips/trips-docs.js",    "groupTitle": "Trips"  },  {    "type": "put",    "url": "/trips/:id",    "title": "Update a trip by ID",    "version": "1.0.0",    "name": "UpdateTrip",    "group": "Trips",    "description": "<p>Update a trip by ID</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Unique trip ID</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Trip updated</p>"          }        ]      }    },    "examples": [      {        "title": "Example request.body:",        "content": "{\n  \"location\": \"Somewhere update\"\n}",        "type": "js"      },      {        "title": "Example request.headers:",        "content": "{\n  \"token\": \"jsonwebtoken\"\n}",        "type": "js"      }    ],    "error": {      "fields": {        "Reject 400": [          {            "group": "Reject 400",            "optional": false,            "field": "Redundant",            "description": "<p>No changes to make</p>"          },          {            "group": "Reject 400",            "optional": false,            "field": "Unauthorized",            "description": "<p>Permission denied</p>"          }        ],        "Error 400": [          {            "group": "Error 400",            "optional": false,            "field": "FailTripUpdate",            "description": "<p>Trip could not be updated</p>"          }        ]      }    },    "filename": "./trips/trips-docs.js",    "groupTitle": "Trips"  },  {    "type": "delete",    "url": "/users/:id",    "title": "Delete a user",    "version": "1.0.0",    "name": "DeleteUser",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Unique user id</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>User deleted.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "user_id",            "description": "<p>ID of deleted user.</p>"          }        ]      }    },    "examples": [      {        "title": "Example Header (required) request.header:",        "content": "{\n  \"token\": \"jsonwebtoken\"\n}",        "type": "js"      }    ],    "error": {      "fields": {        "Rejected 400": [          {            "group": "Rejected 400",            "optional": false,            "field": "UnauthorizedDelete",            "description": "<p>Invalid Credentials</p>"          }        ],        "Error 400": [          {            "group": "Error 400",            "optional": false,            "field": "FailDeleteUser",            "description": "<p>Could not delete user</p>"          }        ]      }    },    "filename": "./users/users-docs.js",    "groupTitle": "Users"  },  {    "type": "get",    "url": "/users/:id",    "title": "Get a user by ID",    "version": "1.0.0",    "name": "GetUser",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Unique user id</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of the User.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>Email of the User.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "first_name",            "description": "<p>First name of the User.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "last_name",            "description": "<p>Last name of the User.</p>"          },          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "trips",            "description": "<p>Trips the user has posted.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "200 OK\n{\n  \"id\": 1,\n  \"email\": \"local-part@domain\",\n  \"first_name\": \"John\",\n  \"last_name\": \"Doe\",\n  \"trips\": [\n    {\n       \"id\": 1,\n       \"user_id\": 1,\n       \"location\": \"Somewhere\",\n       \"description\": \"Visted somewhere, etc\",\n       \"short_desc\": \"Desc\"\n    }\n  ]\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 404": [          {            "group": "Error 404",            "optional": false,            "field": "FailGetUser",            "description": "<p>Could not find user.</p>"          }        ]      }    },    "filename": "./users/users-docs.js",    "groupTitle": "Users"  },  {    "type": "get",    "url": "/users/",    "title": "Request all users",    "version": "1.0.0",    "name": "GetUsers",    "group": "Users",    "description": "<p>Get all users: Grabs all users from the table</p>",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of the User.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>Email of the User.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "first_name",            "description": "<p>First name of the User.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "last_name",            "description": "<p>Last name of the User.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "200 OK\n[\n  {\n    \"id\": 1,\n    \"email\": \"local-part@domain\",\n    \"first_name\": \"John\",\n    \"last_name\": \"Doe\"\n  },\n  // Etc\n]",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 400": [          {            "group": "Error 400",            "optional": false,            "field": "UsersNotFound",            "description": "<p>Could not retrieve users.</p>"          }        ]      },      "examples": [        {          "title": "Message-Response:",          "content": "404 Not Found\n{\n  \"message\": \"Could not retrieve users\"\n}",          "type": "json"        }      ]    },    "filename": "./users/users-docs.js",    "groupTitle": "Users"  },  {    "type": "post",    "url": "/users/login",    "title": "Login a user/client",    "version": "1.0.0",    "name": "LoginUser",    "group": "Users",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>Token to authenticate the user with</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "user_id",            "description": "<p>The id of the logged in user</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "200 OK\n{\n  \"user_id\": 1,\n  \"token\": \"jsonwebtoken\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Reject 400": [          {            "group": "Reject 400",            "optional": false,            "field": "InvalidCredentials",            "description": "<p>Invalid Credentials</p>"          },          {            "group": "Reject 400",            "optional": false,            "field": "InvalidFormat",            "description": "<p>You must supply an email and password</p>"          }        ]      }    },    "filename": "./users/users-docs.js",    "groupTitle": "Users"  },  {    "type": "post",    "url": "/users/register",    "title": "Register a new user",    "version": "1.0.0",    "name": "RegisterUser",    "group": "Users",    "description": "<p>Register New User: Takes a request body, no headers required.</p>",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>Token to authenticate the user with</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of the new user.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "201 Created\n {\n   \"id\": 1,\n   \"token\": \"jsonwebtoken\",\n   \"message\": \"User saved, token is used to authenticate\"\n }",          "type": "json"        }      ]    },    "examples": [      {        "title": "Example request.body:",        "content": "{\n  \"email\": \"johndoe@gmail.com\",\n  \"password\": \"blahblah\",\n  \"first_name\": \"John\",\n  \"last_name\": \"Doe\",\n  \"profileType\": \"public\" // private is the alternative\n}",        "type": "js"      }    ],    "error": {      "fields": {        "Reject 400": [          {            "group": "Reject 400",            "optional": false,            "field": "EmailTaken",            "description": "<p>That email is already taken</p>"          },          {            "group": "Reject 400",            "optional": false,            "field": "InvalidFields",            "description": "<p>You must supply a user with username, password, and first_name</p>"          }        ],        "Error 400": [          {            "group": "Error 400",            "optional": false,            "field": "FailRegister",            "description": "<p>Could not register that account</p>"          }        ]      }    },    "filename": "./users/users-docs.js",    "groupTitle": "Users"  },  {    "type": "put",    "url": "/users/:id",    "title": "Update a user",    "version": "1.0.0",    "name": "UpdateUser",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Unique user id</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>User updated.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "user_id",            "description": "<p>ID of updated user.</p>"          }        ]      }    },    "examples": [      {        "title": "Example request.body:",        "content": "{\n  // email is unique, changing it will require it not be in use\n  \"password\": \"newpassword\",\n  \"first_name\": \"change\",\n  \"last_name\": \"change\"\n}",        "type": "js"      },      {        "title": "Example Header (required) request.header:",        "content": "{\n  \"token\": \"jsonwebtoken\"\n}",        "type": "js"      }    ],    "error": {      "fields": {        "Error 400": [          {            "group": "Error 400",            "optional": false,            "field": "FailUpdateUser",            "description": "<p>Could not update user.</p>"          }        ]      }    },    "filename": "./users/users-docs.js",    "groupTitle": "Users"  },  {    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "varname1",            "description": "<p>No type.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "varname2",            "description": "<p>With type.</p>"          }        ]      }    },    "type": "",    "url": "",    "version": "0.0.0",    "filename": "./apidoc/main.js",    "group": "_Users_lambda_school_loaner_131_Projects_Build_Week_4_Back_End_apidoc_main_js",    "groupTitle": "_Users_lambda_school_loaner_131_Projects_Build_Week_4_Back_End_apidoc_main_js",    "name": ""  }] });
