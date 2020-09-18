import { hot } from 'react-hot-loader/root';
import React from 'react';
import Header from '../header/Header.jsx';

const AppComponent = () => {
  return (
    <main>
      <Header />
    </main>
  );
};

export const App = hot(AppComponent);
