import React, {createContext} from 'react';
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import './css/Main.css';
import './css/common.css';
import './css/form_style.css';
import './css/page_2_style.css';
import './css/style.css';

import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Catalog from './Catalog/Catalog.jsx';
import Page2 from './Page2/page-2.jsx';
import Error from './Error/error.jsx';
import Auth from './Form/form.jsx';
import Header from './Elems/Header.jsx';
import UserStore from './store/UserStore.js';

export const Context = createContext(null);
const contextUser = new UserStore();
const router = createBrowserRouter([
  {
    path: '/main',
    element: <App/>
  },
  {
    path: '/catalog',
    element: 
      <Context.Provider value={{
        user: contextUser
      }}>
        <Catalog />
      </Context.Provider>
  },
  {
    path: '/page-2',
    element: <Page2 />
  },
  {
    path: '/form',
    element:
      <Context.Provider value={{
        user: contextUser
      }}>
        <Auth />
      </Context.Provider>
  },
  {
    path: '*',
    element: <Error />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Header />
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
    
  </React.StrictMode>,
)
