const express = require("express");
const app = express();
const PORT = 3000;

app.use("/", express.static("storybook-static"));

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
