function pageLanding(req,res){
  return res.render("index.html")
}

function pageStudy(req,res){
  return res.render("study.html")
}

function pageGiveClasses(req,res){
  return res.render("give-classes.html")
}

const express = require('express')
const server = express()

//const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

 const nunjucks = require('nunjucks')
 nunjucks.configure('src/views', {
   express: server,
   noCache: true,
 })

server
//configurar arquivos staticos
.use(express.urlencoded({ extended: true }))
.use(express.static("public"))
//rota de aplicaçao
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//.post("/save-classes", saveClasses)

.listen(5500)