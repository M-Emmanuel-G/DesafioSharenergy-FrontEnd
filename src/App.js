
import './App.css';
import { GlobalState } from './context/globalState';
import LoginPage from './pages/loginPage/loginPage';
import RouterPage from './routes/routerPage';

function App() {
  return (
      <GlobalState>
        <RouterPage>
          <LoginPage/>
        </RouterPage>
      </GlobalState>
  );
}

export default App;
