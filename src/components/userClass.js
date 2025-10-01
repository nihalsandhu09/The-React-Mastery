import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "  child component did mount");

    const data = await fetch("https://api.github.com/users/nihalsandhu09");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location } = this.state.userInfo;

    console.log(this.props.name + " Child render");
    return (
      <div className="user-card">
        <h1>Name :{name}</h1>
        <h3>location : {location}</h3>
        <h4>Contact : nihalsandhu007220@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
