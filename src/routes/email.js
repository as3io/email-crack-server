const { Router } = require('express');
const helmet = require('helmet');
const mjml2html = require('mjml');
const load = require('../load-template');

const router = Router();
router.use(helmet());

/**
 * 🔬 Experiment with MJML + Handlebars 🔬
 *
 * This will load a dasherize file from the `emails` directory, based on
 * the `:name` request parameter.
 *
 * For example, accessing `/email/current-time` in the browser will
 * load the `current-time.hbs` file from the `emails` folder.
 *
 * Currently, the Express `req` object is passed as the template context,
 * meaning you can display any property found on the request within the template.
 * As an example, try loading `/email/request-context` in your browser.
 */
router.get('/:name', (req, res, next) => {
  const { name } = req.params;
  load(name, { req })
    .then(mjml => res.send(mjml2html(mjml).html))
    .catch(next);
});

module.exports = router;
