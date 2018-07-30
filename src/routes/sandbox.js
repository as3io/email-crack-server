const { Router } = require('express');
const helmet = require('helmet');

const router = Router();
router.use(helmet());

router.get('/', (req, res) => {
  res.json({ sandbox: 'ok' });
});

module.exports = router;
