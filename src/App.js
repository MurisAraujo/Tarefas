import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import { GlobalStyle } from './GlobalStyle';
import Routes from './Routes';
import { store, persistor } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
