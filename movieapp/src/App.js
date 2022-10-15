import { useEffect, useState } from "react";

function Hello(){
	const byFn = () => console.log("bye :(");
	const hiFn = () => {
    console.log("Hi :)");
    return byFn;
  }
	useEffect(hiFn, []);
	return <h1>Hello</h1>
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing(!showing);
  };
  return (
    <div>
      <div>{showing ? <Hello/> : null}</div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
