// 서버  시간 제일 많이 잡아먹는거
// 1. 서버에서 db연결
// 2. query 날리기
// 3. 결과 받기
// 4. 받은 결과를 서버에 넘겨주기
// 5. client에 넘겨주기

//db안에 collection
const mongoose = require("mongoose");
const db = mongoose
  .connect("mongodb+srv://tisedu:nice3355@cluster0.lhbjwez.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "front-test",
  })
  .then(() => {
    console.log("db연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = db;
