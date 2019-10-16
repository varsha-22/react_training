import React, { Component } from "react";
import trainees from "./components/data/trainee";
import Link from "@material-ui/core/Link";
import UserTable from "../Trainee/UserTable";
import orderBy from "lodash/orderBy";
import TraineeDetails from "./TraineeDetails";
import { Route } from "react-router-dom";

const invertDirection = {
  asc: "desc",
  desc: "asc"
};
class TraineeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: "5c6c47af7740654f0915fac9",
          name: "Sachin Tendulkar",
          email: "sachin@gmail.com",
          createdAt: "2019-02-10T18:15:11.778Z"
        },
        {
          id: "5c6c47af7740654f0455fac9",
          name: "Virat Kohli",
          email: "virat@gmail.com",
          createdAt: "2019-02-12T18:15:11.778Z"
        },
        {
          id: "5c6567af7740654f0915fac9",
          name: "M.S. Dhoni",
          email: "msdhoni@gmail.com",
          createdAt: "2019-02-13T18:15:11.778Z"
        },
        {
          id: "5c6c47af7747854f0915fac9",
          name: "Rohit Sharma",
          email: "rohit.sharma",
          createdAt: "2019-02-14T18:15:11.778Z"
        },
        {
          id: "5c6c47af7740654f0915876c9",
          name: "Bumrah",
          email: "bumhrah@gmail.com",
          createdAt: "2019-02-15T18:15:11.778Z"
        }
      ],
      editIdx: -1,
      columnToSort: "",
      sortDirection: "desc",
      offset: 0
    };
  }
  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      data: state.data.map((row, j) =>
        j === i ? { ...row, [name]: value } : row
      )
    }));
  };

  handleSort = columnName => {
    this.setState(state => ({
      columnToSort: columnName,
      sortDirection:
        state.columnToSort === columnName
          ? invertDirection[state.sortDirection]
          : "asc"
    }));
  };

  handleClick(offset) {
    this.setState({ offset });
  }

  render() {
    return (
      <div>
        <div>
          {trainees.map((trainee, i) => (
            <ul>
              <li>
                {" "}
                <Link
                  key={i}
                  data-id={trainee.id}
                  href={"/trainee/" + trainee.id}
                >
                  {" "}
                  {trainee.name}
                </Link>
                <Route
                  exact
                  path={"/trainee/" + trainee.id}
                  component={TraineeDetails}
                />
              </li>
            </ul>
          ))}
        </div>
        <div>
          <UserTable
            data={orderBy(
              this.state.data,
              this.state.columnToSort,
              this.state.sortDirection
            )}
            header={[
              {
                name: "Name",
                prop: "name"
              },
              {
                name: "Email",
                prop: "email"
              }
            ]}
            handleSort={this.handleSort}
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIdx={this.state.editIdx}
            stopEditing={this.stopEditing}
            handleChange={this.handleChange}
            columnToSort={this.state.columnToSort}
            sortDirection={this.state.sortDirection}
            offset={this.state.offset}
            total={100}
            onClickPage={(e, offset) => this.handleClick(offset)}
          />
        </div>
      </div>
    );
  }
}

export default TraineeList;
