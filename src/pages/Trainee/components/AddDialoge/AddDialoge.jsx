import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SnackBarProvider from "../../../../SnackBarProvider/SnackBarProvider";
import API from "../../../../lib/utils/api";
export default class Trainee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        email: "",
        password: "",
        repeatPassword: ""
      },
      submitted: false,
      success: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("isPasswordMatch", value => {
      const { formData } = this.state;
      if (value !== formData.password) {
        return false;
      }
      return true;
    });

    ValidatorForm.addValidationRule("isPasswordStrong", value => {
      if (
        value !== "" &&
        value.length < 8 &&
        value !== /[0-9]/ &&
        value !== /[a-z]/ &&
        value !== /[A-Z]/
      ) {
        return false;
      }
      return true;
    });
  }

  handleChange = event => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  handleSubmit = async event => {
    event.preventDefault();
    API.interceptors.request.use(config => {
      const auth_token = localStorage.getItem("token");
      if (auth_token) {
        config.headers.Authorization = auth_token;
      }
      return config;
    });

    const { formData } = this.state;
    const name = formData.name;
    const email = formData.email;
    const password = formData.password;
    await API.post("/trainee", {
      name,
      email,
      password
    });
    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 5000);
    });
    this.setState({ success: true }, () => this.props.modalIsOpen);
  };

  handleCancel = () => {
    const formData = this.state;
    if (
      formData.name !== "" ||
      formData.email !== "" ||
      formData.password !== "" ||
      formData.repeatPassword !== ""
    ) {
      formData.name = "";
      formData.email = "";
      formData.password = "";
      formData.repeatPassword = "";
    }

    this.setState({ formData });
  };

  useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center"
    },
    textField: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },
    dense: {
      marginTop: theme.spacing(2)
    },
    menu: {
      width: 200
    },
    button: {
      margin: theme.spacing(1)
    }
  }));

  render() {
    const classes = this.useStyles;
    const { formData, submitted, success } = this.state;

    return (
      <div className={classes.container}>
        <ValidatorForm
          className={classes.container}
          noValidate
          autoComplete="off"
          ref="form"
          onSubmit={this.handleSubmit}
        >
          <h2>Add Trainee</h2>
          <p>Enter your Trainee Details</p>
          <TextValidator
            className={classes.textField}
            margin="dense"
            variant="outlined"
            label="Name"
            onChange={this.handleChange}
            name="name"
            value={formData.name}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />

          <TextValidator
            className={classes.textField}
            margin="dense"
            variant="outlined"
            label="Email"
            onChange={this.handleChange}
            name="email"
            value={formData.email}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
          />
          <br />
          <TextValidator
            className={classes.textField}
            margin="dense"
            variant="outlined"
            label="Password"
            onChange={this.handleChange}
            name="password"
            type="password"
            validators={["required", "isPasswordStrong"]}
            errorMessages={[
              "this field is required",
              "Password must be 8 charaters long and must have one number, one capital and one one lower case character"
            ]}
            value={formData.password}
          />

          <TextValidator
            className={classes.textField}
            margin="dense"
            variant="outlined"
            label="Confirm password"
            onChange={this.handleChange}
            name="repeatPassword"
            type="password"
            validators={["isPasswordMatch", "required"]}
            errorMessages={["password mismatch", "this field is required"]}
            value={formData.repeatPassword}
          />
          <br />
          <SnackBarProvider submitted={submitted} success={success} />
          <Button
            variant="outlined"
            className={classes.button}
            onClick={this.handleCancel}
          >
            Cancel
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}
