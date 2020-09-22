import React from 'react';
import ReactDOM from 'react-dom/server';
import express from 'express';
import { indexTemplate } from './indexTemplate';

import { StaticRouter, matchPath } from 'react-router-dom';
import routes from './routes';

import App from './components/app/app.jsx';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/*', async (req, res) => {
  const context = {};

  const currentRoute = routes.find(route => matchPath(req.url, route));

  let fetchData;
  if (currentRoute && currentRoute.fetchData) {
    fetchData = currentRoute.fetchData();
  } else {
    fetchData = Promise.resolve(null);
    context.status = 404;
  }

  const initialData = await fetchData;
  context.initialData = initialData;

  if (context.status === 404) {
    res.status(404); // 404
  }

  res.send(
    indexTemplate(
      ReactDOM.renderToString(
        <StaticRouter
          location={req.url}
          context={context}
        >
          <App />
        </StaticRouter>)
    )
  );
});

app.listen(3030, () => {
  console.log('Server started on http://localhost:3030');
});
