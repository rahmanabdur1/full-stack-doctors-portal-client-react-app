
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Router/Routers/Routers';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <div className="max-w-screen-xl  mx-auto">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
