import React from 'react';
import NavBar from './layouts/components/Navbar/NavBar';
import AuthLayout from './routes/AuthRoute';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <div>
    <NavBar></NavBar>
    <AuthLayout></AuthLayout>
    <PrivateRoute></PrivateRoute>
    </div>
      );
}

export default App;
