sudo cnpm install -g json-server

json-server --watch db.json
json-server --watch -port 8888 db.json


curl http://localhost:3000/posts/1
curl http://localhost:3000/posts?id=1
curl http://localhost:3000/posts?id=1&author=typicode