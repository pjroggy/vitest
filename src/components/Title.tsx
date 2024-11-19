import { useState } from "react";

type propsType = {
  title: string;
};

function Title({ title }: propsType) {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{title}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default Title;