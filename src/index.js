import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./utils/store";

// import Body from './components/Body';
import Login from './components/Login';
import ErrorPage from './components/ErrorPage';
import Browse from './components/Browse';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/",
        element: <Login/>,
      },
      { path: "/browse",
        element: <Browse/>,
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <RouterProvider router={routes}/> 
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
