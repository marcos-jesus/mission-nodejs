import express from "express"

const app = express();


/**
 * Type params
 * 
 * Routes Params => http://localhost:3000/produtos/2312312
 * Query Params => http://localhost:3000/produtos?name=teclado&description=tecladobom
 * 
 * Body Params => {
 * "name":"teclado",
 * description: "teclado bom"
 * }
 * 
 */


app.get("/teste", (request, response) => {
  return response.send("Olá NLW")
})

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW. post")
})

app.listen(3000, () => console.log("Server is running"));