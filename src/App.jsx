import React from "react";
// import TraineeList from './pages/Trainee/TraineeList';
import Routes from "./routes/Routes";
import SnackBarProvider from "./SnackBarProvider/SnackBarProvider";
const App = () => {
  return (
    <div>
      <Routes />
      <SnackBarProvider />
    </div>
  );
}

export default App;
