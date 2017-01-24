sudo cnpm install -g json-server

json-server --watch db.json
json-server --watch -port 8888 db.json


curl http://localhost:3000/posts/1
curl http://localhost:3000/posts?id=1
curl http://localhost:3000/posts?id=1&author=typicode



https://github.com/typicode/json-server

GET    /posts
GET    /posts/1
POST   /posts
PUT    /posts/1
PATCH  /posts/1
DELETE /posts/1



    POST = 新增
    GET = 讀取
    PUT = 更新
    DELETE = 刪除
    Partial = 部分更新