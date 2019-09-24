# Back-End - Pat Palmerston

#### Deployed API url

https://expat-journal.herokuapp.com/

---

# _Auth_

## REGISTER A NEW USER

_HTTP MEHTHOD: [POST]_
_URL: /api/auth/register_

**Schema:**

| name       | type    | required | description       |
| :--------- | :------ | :------- | :---------------- |
| username   | string  | yes      | username (unique) |
| password   | string  | yes      | password          |
| first_name | string  | yes      | user's first name |
| last_name  | string  | yes      | user's last name  |
| age        | integer | no       | user's age        |
| location   | string  | no       | user's location   |

_Example_

```javascript
{
  "username": "pat",
	"password": "pat",
  "first_name": "pat",
  "last_name": "pat",
	"age": 0,
	"location": "pat"
}
```

## **Reponses:**

**201 (OK)**
When successfully registering a user, the endpoint will return a 201 HTTP response and a JSON object of the user created as such:

```javascript
{
    "id": 1,
    "username": "pat",
    "first_name": "pat",
    "last_name": "pat",
    "age": 0,
    "location": "pat"
}
```

---

**404 (Bad Request)**
If the user is missing any of the following: username, password, first_name, or last_name, the endpoint will return an HTTP 404 status code and will see this error

```javascript
{
    "error": "User must have username, password, first_name and last_name"
}
```

---

**500 (Internal Server Error)**
If you get an HTTP response of 500 you most likely are using a duplicate name and will receive this error.

```javascript
{
    "error": "User Already exists, please choose a different name"
}
```

---

## LOGIN A USER

_HTTP MEHTHOD: [POST]_
_URL: /api/auth/login_

**Schema:**

| name     | type   | required | description       |
| :------- | :----- | :------- | :---------------- |
| username | string | yes      | username (unique) |
| password | string | yes      | password          |

## **Reponses:**

**200 (OK)**
With a successful Login you will recieve a HTTP 200 response and a confirmation message with a json web token.

The object received should look like this.

```javascript
{
    "message": "Welcome <username>!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjkyOTk0MTksImV4cCI6MTU2OTM4NTgxOX0.qV1pJ7-CQIyWNX6f3-IOtI5lLI3l-IuI59DocUAiPM0"
}
```

After successful Login's make sure to place token in the Authorization Header when using Postman or Insomnia to access restricted routes.

---

**401 (Unauthorized)**
If you try Logging in with the wrong password or username, or an un registered users info you will receive the HTTP 401 code with the message:

```javascript
{
    "message": "Invalid Credentials"
}
```

---

# _Photos_

## GET ALL PHOTOS

_HTTP MEHTHOD: [GET]_
_URL: /api/photos/all_

## **Reponses**

**200 (OK)**
When using the unRestricted route to get all photos, on success you will get a 200 HTTP method and an Array of Objects containing all photos.

```javascript
[
	{
		id: 1,
		user_id: 1,
		location: 'Hawaii',
		description: 'sunset on the beach',
		img_url: 'https://unsplash.com/photos/FbN2z3bEaSs'
	},
	{
		id: 2,
		user_id: 1,
		location: 'Petaluma',
		description: 'rolling hills at dusk',
		img_url: 'https://unsplash.com/photos/FbN2z3bEaSs'
	}
];
```

---

# _Restricted ROUTES_

All other routes are Restricted to using a json web Token.

When making a call to these routes provide a second argument to the axios call that is the:

```javascript
{
    headers: {
        Authorization: <token received on login>
    }
}
```

**401 (Unauthorized)**
Here are two possible reasons you may receive a 401 when passing a token.

When a token is null, undefined or not passed, you will receive this error.

```javascript
{
	error: 'NO TOKEN';
}
```

If however your token does not match the token passed, which will usually happen if the user is trying to pass a modified token. This is the error that should be received.

```javascript
{
	message: 'that token does not work';
}
```

---

## GET PHOTOS BY USER_ID

_HTTP METHOD: [GET]_
_URL: /api/photos/all/:user_id_

**Reponse**

**200 (OK)**
Successfully getting the photos by user Id will give you an HTTP 200 code and an array of objects for that user. `/api/photos/all/1` for example will give you the photos for user of "user_id" of 1.

```javascript
[
	{
		id: 1,
		user_id: 1,
		location: 'Hawaii',
		description: 'sunset on the beach',
		img_url: 'https://unsplash.com/photos/FbN2z3bEaSs'
	},
	{
		id: 2,
		user_id: 1,
		location: 'Petaluma',
		description: 'rolling hills at dusk',
		img_url: 'https://unsplash.com/photos/FbN2z3bEaSs'
	}
];
```

---

## ADD A PHOTO

_HTTP METHOD: [POST]_
_URL: /api/photos/all/:user_id_

## **Reponses**

**201 (Created)**
When you successfully Create a new user, you will receive a HTTP status code of 201 and an object like so.

```javascript
{
    "id": 2,
    "user_id": 1,
    "location": "Petaluma",
    "description": "rolling hills at dusk",
    "img_url": "https://unsplash.com/photos/FbN2z3bEaSs"

}
```

---

**400 (Bad Request)**
If you pass the correct token, but the photo object does not have the required information `location` `user_id` and `img_url`, the endpoint will return a response with status 400 and the following object:

```javascript
{
	error: 'Photo must have location, url and user_id';
}
```

---

## DELETE A PHOTO

_HTTP METHOD: [DELETE]_
_URL: /api/photos/all/:photoId_

## **Responses**

**204 (No Content)**
If the endpoint is hit with the correct token and the photo with the passed id exists, the endpoint will return an HTTP response with a status code of 204.

---

**404 (Not Found)**
If the endpoint is hit with the correct token, but a photo id that does not exist, the endpoint will return a response with a 400 status code and the following error:

```javascript
{
	error: `Could not find photo with that id.`;
}
```

---

## UPDATE A PHOTO

_HTTP METHOD: [PUT]_
_URL: /api/photos/all:photoId_

## **Responses**

**200 (OK)**
If your pass the correct token and and the photo with the passed id exists, you will receive the 200 response with a JSON object like this one:

```javascript
{
    "id": 2,
    "user_id": 1,
    "location": "Petaluma",
    "description": "rolling hills at dusk",
    "img_url": "https://unsplash.com/photos/FbN2z3bEaSs"
}
```

---

**404 (Not Found)**
If you pass the correct token but the photo id does not, you will get a 400 status message with the following error:

```javascript
{ "message": "The photo with id of <photoId> does not exist." }
```
