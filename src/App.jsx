import './App.css';
import { AuthProvider } from './authcontext';
import { Main } from './routes';
function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}
export default App
