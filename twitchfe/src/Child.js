import React, { useState, useEffect } from "react";
export default function Child(props) {
  const { msg, balance: parentBalance } = props;
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    console.log("componentDidUpdate/DidMount - Child Component");
    return () => {
      console.log("componentWillUnmount - Child Component");
    };
  });

  console.log("render() - Child Component");
  return (
    <div>
      <p>this is Child Component</p>
      <p>Parent' balance: {parentBalance}</p>
      <p>Parent' msg: {msg}</p>
      <p>我的小金库：{balance}</p>

      <div>
        <button
          onClick={() => {
            setBalance(balance + 10);
          }}
        >
          我自己挣钱了
        </button>
      </div>
    </div>
  );
}
