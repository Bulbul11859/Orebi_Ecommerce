import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,createRoutesFromElements
} from "react-router-dom";
import RootLayout from './components/layout/RootLayout';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
    
    </Route>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
