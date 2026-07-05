import { router } from './routes/router';
import './styles/App.scss';
import './styles/Login.scss';
import { RouterProvider } from 'react-router';

function App() {
  return (
    <RouterProvider router={router} />
  )
}


export default App;