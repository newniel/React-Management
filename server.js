const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            "id": 1,
            "image": "https://placeimg.com/128/128/1",
            "name": "니엘",
            "birthday": "830407",
            "gender": "남자",
            "job": "programmer"
          },
          {
            "id": 2,
            "image": "https://placeimg.com/128/128/2",
            "name": "디니",
            "birthday": "930407",
            "gender": "여자",
            "job": "디자이너"
          },
          {
            "id": 3,
            "image": "https://placeimg.com/128/128/3",
            "name": "엘",
            "birthday": "950407",
            "gender": "여자",
            "job": "기획자"
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));