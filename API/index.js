const express = require('express')
const app = express()
const port = 3000

app.get('/test', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.use(cors());

app.use(express.json());


const courseData = {

    "2025" : {
        Fall: {
            courseCode: "Testcourse",
        }
    }
}