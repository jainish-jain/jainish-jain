const express = require('express')
const app = express()
let counter = 0

app.use(express.static('public', {
  setHeaders: (res, path, stat) => {
    console.log(++counter)
  }
}))

const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
 