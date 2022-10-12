
# Backend

Backend de api de clientes


## API Reference

#### Get all clients

```http
  GET /api/clients
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none` | `none` | **Dont Required**. API key |

#### Post Create Client

```http
  Post /api/clients
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**.  |
| `firstname`     | `string` | **Required**.  |
| `lastName`      | `string` | **Required**.  |




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` 8000

`API_KEY` Resquest to admin


## Deployment

To deploy this project run
first clone the project and install the dependencies with

```bash
  npm run install 
```

run  the command 
```bash
    node server.js
```




## Authors

- [@jcUstarroz](https://github.com/soujiro27/)

