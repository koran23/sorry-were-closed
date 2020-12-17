// backend/routes/api/index.js
const router = require('express').Router();

router.post('/test', function(req, res) {
    fetch('/api/test', {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `97pDmNKS-_gIBKSqIT8Yy34eBOhMMdgoQJgQ`
  },
  body: JSON.stringify({ hello: 'world' })
}).then(res => res.json()).then(data => console.log(data));

//   res.json({ requestBody: req.body });
});

module.exports = router;