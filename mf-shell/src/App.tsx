import React, { lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

import App1 from 'app1/App1Index';
// const ExposedComponent = lazy(() => import('app1/App1Index'));


function App() {
  return (
    <Suspense fallback={<div> Loading...</div>}>
      <div className="App">
        <div>
          This is the shell - below is the MF - see if it is loading
        </div>
        <div>
          <App1 />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
