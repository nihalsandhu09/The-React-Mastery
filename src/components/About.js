import { Component } from "react";
import User from "./User";
import UserClass from "./userClass";
class About extends Component {
  constructor(props) {
    super(props);
    console.log(" parent constructor");
  }
  componentDidMount() {
    console.log("  parent component did mount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Our App That delievers Food</h2>
        {/* <User name={"Nihal Sandhu(functional)"} /> */}

        <UserClass
          name={"nihal sandhu (class)"}
          location={"Una Himachal(class) "}
        />
        <UserClass name={"elon musk(class)"} location={"US(class) "} />
      </div>
    );
  }
}

export default About;
