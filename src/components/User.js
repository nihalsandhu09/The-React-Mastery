import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  useEffect(() => {}, []);
  return (
    <div className="user-card">
      <h1>Count:{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Count
      </button>
      <h2>Count2:{count2}</h2>
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        Update Count2
      </button>
      <h1>Name : {props.name}</h1>
      <h3>location : Una</h3>
      <h4>Contact : nihalsandhu007220@gmail.com</h4>
    </div>
  );
};

export default User;
