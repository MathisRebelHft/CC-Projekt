const app = require("express")();

app.get("/", (req, res) => res.send("Hello from the container world"))

app.listen(9999, () => console.log("listing on port 9999"))