// ./index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { DefaultTypelessProvider } from 'typeless';
import CounterModule from './module';

ReactDOM.render(
  <DefaultTypelessProvider>
    <CounterModule />
  </DefaultTypelessProvider>,
  document.getElementById('root')
);