import express from "express"

const app = express();

app.get("/health", function(__, res) {

  res.send("is health updated!")

})

app.listen(80, function() {
  console.log("The server is running in port 80.")
})