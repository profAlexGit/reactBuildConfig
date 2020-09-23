import React from 'react';
import StatusCode from '../../components/status-code/status-code.jsx';

export function NotFoundPage () {
  return (
    <StatusCode code={404}>
      <main>
        <h1>404 page</h1>
      </main>
    </StatusCode>
  );
}

export default NotFoundPage;
