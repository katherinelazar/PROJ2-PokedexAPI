const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
   res.send('This is going to be a Pokèdex!');
});

// ...

export default router;
