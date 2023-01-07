
# National Park Search

A brief description of what this project does and who it's for


## Features

- Look at things
- Search for things
- Add things?
- Delete things?


## Project Requirements
-Use React for the front end.

-Use GraphQL with a Node.js and Express.js server.

-Use MongoDB and the Mongoose ODM for the database.

-Use queries and mutations for retrieving, adding, updating, and deleting data.

-Be deployed using Heroku (with data).

-Have a polished UI.

-Be responsive.

-Be interactive (i.e., accept and respond to user input).

-Include authentication (JWT).

-Protect sensitive API key information on the server.

-Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class and id naming conventions, indentation, quality comments, etc.).

-Have a high-quality README (with unique name, description, technologies used, screenshot, and link to deployed application).
## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Future Developement

- Actually creating the website



## Demo

Insert gif or link to demo


## Authors
PLACEHOLDERS
- John Wick (https://www.github.com/DeadDogAssassin)
- Indiana Jones (https://www.github.com/Ilovesnakes) 

