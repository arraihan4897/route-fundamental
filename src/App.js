import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Componants/Routes/Routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <RouterProvider router={router}></RouterProvider>
      </header>
    </div>
  );
}

export default App;
