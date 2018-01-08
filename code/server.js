import express from "express"

const app = express()
const contactsJson = require("./contacts.json")

app.get("/contacts", (req, res) =>
  res.send({contactsJson})
)

app.get("/contacts/:id", (req, res) => {
  const idOfContact = contactsJson.contacts.find(contact => {
    return contact.id === parseInt(req.params.id, 10)
  })
  if (idOfContact) {
    res.send(idOfContact)
  } else {
    res.status(404).send("Sorry can't find that!")
  }
})

app.listen(3000, () =>
  console.log("hallå")
)

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})
