Endpoints:

Register:

```
curl http://127.0.0.1:8000/api/v1/auth/register -X POST -d '{"username":"steve", "password":"value2"}'
```

Login:

```
curl http://127.0.0.1:8000/api/v1/auth/login -X POST -d '{"username":"steve", "password":"value2"}'

```

Create Tasks:

```
curl http://127.0.0.1:8000/api/v1/tasks/tasks -X POST -d '{"description":"steve", "title":"value2213234"}' --header "Authorization: Token 2eb7cd8d1cb9c5ee2ebeaab30d59ed9053a44c95"
```

Get tasks:

```
curl http://127.0.0.1:8000/api/v1/tasks/tasks -X GET  --header "Authorization: Token 2eb7cd8d1cb9c5ee2ebeaab30d59ed9053a44c95"
```

Delete Tasks:

```
curl http://127.0.0.1:8000/api/v1/tasks/tasks -d '{"taskCode":"5299ea52-ec1b-4d97-a310-bcfe95659b1f"}' -X DELETE  --header "Authorization: Token 2eb7cd8d1cb9c5ee2ebeaab30d59ed9053a44c95"
```

Get Dogs:

```
curl http://127.0.0.1:8000/api/v1/dogs/dogs -X GET  --header "Authorization: Token 2eb7cd8d1cb9c5ee2ebeaab30d59ed9053a44c95"
```
