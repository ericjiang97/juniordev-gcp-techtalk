const express = require('express');
const app = express();
const APP_PORT = process.env.port || 8080;
const axios = require('axios')

const exampleRouter = (req, res) => {
  res.send('hello world!');
}
app.get('/', (req, res) => res.send('Hello JuniorDev, from Google App Engine!'));
app.use('/test', exampleRouter);
app.get('/teapot', (req, res) => {
  res.status(418).send("Hello JuniorDev, I'm a teapot running on Node Standard GAE");
});


app.get('/users/:username', (req, res) => {
  const { username } = req.param
  axios.get("https://api.github.com/users/" + username)
    .then(resp => {
      if(resp.status === 200){
        res.send(resp.data)
      } else {
        res.status(500).send("Internal server error")
      }
    })
});

app.listen(APP_PORT, () =>
  console.log(`Example app listening on port ${APP_PORT}!`)
);
