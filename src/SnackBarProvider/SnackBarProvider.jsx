import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MySnackbarContentWrapper from "./MySnackbarContentWrapper";

const SnackBarProvider = props => {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center"
  });

  const { vertical, horizontal, open } = state;

  const handleClick = newState => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  if (props.success === true) {
    return (
      <div>
        <Button
          variant="outlined"
          onClick={handleClick({ vertical: "top", horizontal: "right" })}
          color="primary"
          type="submit"
          submitted={props.submitted}
        >
          {(props.submitted && "Your form is submitted!") ||
            (!props.submitted && "Submit")}
        </Button>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          key={`${vertical},${horizontal}`}
          open={open}
          onClose={handleClose}
        >
          <MySnackbarContentWrapper
            onClose={handleClose}
            variant="success"
            message="This is a success message!"
          />
        </Snackbar>
      </div>
    );
  } else {
    return (
      <div>
        <Button
          variant="outlined"
          onClick={handleClick({ vertical: "top", horizontal: "right" })}
          color="primary"
          type="submit"
          submitted={props.submitted}
        >
          {(props.submitted && "Your form is submitted!") ||
            (!props.submitted && "Submit")}
        </Button>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          key={`${vertical},${horizontal}`}
          open={open}
          onClose={handleClose}
        >
          <MySnackbarContentWrapper
            onClose={handleClose}
            variant="error"
            message="This is an error message!"
          />
        </Snackbar>
      </div>
    );
  }
};

export default SnackBarProvider;
