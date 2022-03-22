import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ResultContextProvider } from './contexts/ResultContextProvider';

ReactDOM.render(
  <ResultContextProvider>
    <App />
  </ResultContextProvider>,

  document.getElementById('root')
);
