const express = require('express')

const addDays = require('date-fns/addDays')

const app = express()
module.exports = app

let todayDate = new Date()

app.get('/', (request, response) => {
  const hunDays = addDays(
    new Date(
      todayDate.getFullYear(),
      todayDate.getMonth(),
      todayDate.getDate(),
    ),
    100,
  )
  response.send(
    `${hunDays.getDate()}/${hunDays.getMonth() + 1}/${hunDays.getFullYear()}`,
  )
})

app.listen(3000)
