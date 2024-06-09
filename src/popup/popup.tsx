import React from 'react';
import { createRoot } from 'react-dom/client';
import './popup.css';

const Popup = () => {
  return <h1>Hello world</h1>;
};

const body = document.body;
const domnode = document.createElement('div');
domnode.setAttribute('id', 'root');
body.append(domnode);
const root = createRoot(domnode);

root.render(<Popup />);
