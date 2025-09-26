import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
    console.log(this.props.name + "Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "  child component did mount");
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    console.log(this.props.name + " Child render");
    return (
      <div className="user-card">
        <h1>Count :{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count increase
        </button>
        <h1>Name :{name}</h1>
        <h3>location : {location}</h3>
        <h4>Contact : nihalsandhu007220@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
