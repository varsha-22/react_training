import { Route } from "react-router-dom";
import Link from "@material-ui/core/Link";
import orderBy from "lodash/orderBy";
import React, { Component } from "react";
import API from "../../lib/utils/api";
import TraineeDetails from "./TraineeDetails";
import trainees from "./components/data/trainee";
import UserTable from "../Trainee/UserTable";

const invertDirection = {
  asc: "desc",
  desc: "asc"
};
class TraineeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      editIdx: -1,
      columnToSort: "",
      sortDirection: "desc",
      offset: 0,
      limit: 10
    };
  }

  componentDidMount() {
    API.interceptors.request.use(config => {
      const auth_token = localStorage.getItem("token");
      if (auth_token) {
        config.headers.Authorization = auth_token;
      }
      return config;
    });
    API.get(
      `/trainee?limit=${this.state.limit}&skip=${this.state.offset}`
    ).then(res => {
      const data = res.data.data.records;
      this.setState({ data });
    });
  }

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
    const data = this.state.data;
    const id = data[i].originalId;
    API.delete(`/trainee/:${id}`, { id }).then(res => console.log(res.data));
  };

  startEditing = i => {
    this.setState({ editIdx: i });
    const data = this.state.data;

    const id = data[i].originalId;
    const name = data[i].name;
    const email = data[i].email;
    API.put("/trainee", {
      id,
      name,
      email
    }).then(res => console.log(res.data));
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
    const { offset, limit } = this.state;
    let skip = parseInt(offset + 10);
    let url = `/trainee?limit=${limit}&skip=${skip}`;
    API.get(url).then(res => {
      const data = res.data.data.records;
      this.setState({ data });
    });
    this.setState({ offset: skip });
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
    const { editIdx, columnToSort, sortDirection, offset } = this.state;
    return (
      <div>
        <div>
          {trainees.map((trainee, i) => (
            <ul key={trainee.id}>
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
              },
              {
                name: "Role",
                prop: "role"
              }
            ]}
            handleSort={this.handleSort}
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIdx={editIdx}
            stopEditing={this.stopEditing}
            handleChange={this.handleChange}
            columnToSort={columnToSort}
            sortDirection={sortDirection}
            offset={offset}
            total={100}
            onClickPage={(e, offset) => this.handleClick(offset)}
          />
        </div>
      </div>
    );
  }
}

export default TraineeList;
