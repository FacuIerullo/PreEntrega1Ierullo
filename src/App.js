import { BrowserRouter } from 'react-router-dom';
import Header from './Header'
import Main from './Main';
import CustomProvider from './components/Context';

function App() {
  return (
    <BrowserRouter>
      <CustomProvider>
        <Header />
        <Main />
       </CustomProvider>
    </BrowserRouter>
  );
}

export default App;
