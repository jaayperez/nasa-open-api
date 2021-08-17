import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept(function() {
    window.location.reload();
  });
}
