import "./App.css";
import BuggyCounter from "./Components/BuggyCounter";
import Color from "./Components/Color";
import ErrorBoundary from "./Components/ErrorBoundary";

//EXERCISE 1 : React Error Boundary Simulation
/** 
function App() {
  return (
    <div className="App">
      <p style={{ textAlign: "left" }}><b>Click on the numbers to increase counters.</b></p>
      <p style={{ textAlign: "left" }}><b>The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.</b></p> 
      <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <p>This counter is not inside of boundary. So if crashes, all other components are deleted.</p>
      <BuggyCounter />

    </div>
  );
}
export default App;
*/


//EXERCISE 2 and 3: Lifecycle
function App() {
  return (
    <div className="App">
      <Color />
    </div>
  )
}; 
export default App;