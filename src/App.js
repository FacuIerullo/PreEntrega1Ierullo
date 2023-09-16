import { BrowserRouter } from 'react-router-dom';
import Header from './Header'
import Main from './Main';
import CustomProvider from './components/Context';
import {Toaster } from "sonner"

function App() {
  return (
    <BrowserRouter>
      <CustomProvider>
        <Header />
        <Toaster position="top-center" visibleToasts={1} duration={1000} />
        <Main />
       </CustomProvider>
    </BrowserRouter>
  );
}

export default App;
