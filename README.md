#### NodeJS Express Rest Sample

### 升级包
```
sudo npm install -g npm-check-updates

npm-check-updates
ncu -u
npm install
```

### 运行
```
npm install
npm start 3000
```
##### 二维码
    URL : /qrcode/create?text=http://www.baidu.com
    METHOD : GET

##### 返回文本
    URL : /hello
    METHOD : GET

##### 返回所有用户
    URL : /users/all
    METHOD : GET
    
##### 根据ID返回用户
    URL : /users/get/{id}
    METHOD : GET
    
##### 根据ID删除用户
    URL : /users/delete/{id}
    METHOD : DELETE
    
##### 插入用户
    URL : /users/insert
    METHOD : PUT
    BODY : {
               "name":"insert user",
               "age":123,
               "address":"insert address"
           }
    Content-Type : application/json
    
##### 更新用户
    URL : /users/update
    METHOD : PUT
    BODY : {
                "id":1,
                "name":"update user",
                "age":123,
                "address":"update address"
              }
    Content-Type : application/json
    