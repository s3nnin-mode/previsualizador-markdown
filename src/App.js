import './App.css';
import Entrada from './componentes/editor';
import Previewer from './componentes/previewer';

import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <Entrada />
        <Previewer />
      </div>
    </Provider>
  );
}

export default App;
