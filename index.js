const express = require("express");
const app = express();
const ejs = require("ejs");

// 글 DB
const posts = ["첫번째 글", "두번째 글"];

// post 요청시 필요
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ejs를 view 엔진으로 설정
app.set("view engine", "ejs");

// 정적파일 경로 지정
app.use(express.static("public"));

// home
app.get("/", function (요청, 응답) {
  응답.render("pages/index.ejs", { posts });
});

// about
app.get("/about", function (req, res) {
  res.render("pages/about.ejs");
});

// createn
app.post("/create", function (req, res) {
  const post = req.body.post;
  console.log(req.body);
  // request 요청에 담긴 걸 보여줌 (pwd값 입력한거)
  // DB에 글 저장
  // res.send(post);
  // get 방식은 localhost:3000/ㅡ<= 여기에 입력값 보이는데 post는 안보임 - pwd 쓰기에 적절
  // get - 눈에 보이는 방식 / post - 은밀한 방식

  posts.push(post); // 배열에 post를 추가 .push()
  console.log(posts);

  // 홈(게시판)으로 이동
  res.redirect("/");
});

const port = 3001;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
