import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { App } from './App';
import './style.scss';
import { Provider } from 'react-redux';
import store from './store';

const rootElement: HTMLElement | null = document.getElementById('root');
const root: Root = createRoot(rootElement as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
