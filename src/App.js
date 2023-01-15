import { Provider } from 'react-redux';

import Routing from './app/Routing';
import store from './app/Store';

function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export default App;
