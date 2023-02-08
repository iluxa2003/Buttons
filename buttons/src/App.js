import "./App.css";
import NoTextButton from "./components/CustomButton/NoTextButton";
import plus from "./icons/plus.svg";
import thumbUp from "./icons/thumbs-up.svg";
function App() {
  return (
    <div className="App">
      <NoTextButton icon={plus} />
      <NoTextButton icon={thumbUp} size={"small"} />
    </div>
  );
}

export default App;
