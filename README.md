# express-routes-mapper

```js
    const mapRoutes = require('../src');

    const mapperRoutes = {
        'GET /user': (req, res) => res.json({success: true}),
        'GET /user/:user_id': 'UserController.getUserById',
    };

    app.use('/', mapRoutes(mapperRoutes, 'src/controllers'));

```