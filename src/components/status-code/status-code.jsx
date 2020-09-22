import React from 'react';
import { Route } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function StatusCode ({ code, children }) {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.status = code;
        }

        return children;
      }}
    />
  );
}
