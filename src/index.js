import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/*basename={process.env.PUBLIC_URL}는 배포 시 코드가 꼬이지않게 해주는 역할  */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
