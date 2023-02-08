import "./App.css";
import LargeButton from "./components/CustomButton/LargeButton";
import NoTextButton from "./components/CustomButton/NoTextButton";
import plus from "./icons/plus.svg";
import thumbUp from "./icons/thumbs-up.svg";
import telegram from "./icons/telegram.svg";
function App() {
  return (
    <div className="App">
      <LargeButton darkTheme={true}>Telegram</LargeButton>
      <LargeButton darkTheme={true} icon={telegram}>
        Telegram
      </LargeButton>
      <LargeButton>Telegram</LargeButton>
      <LargeButton icon={telegram} iconPosition="center">
        Telegram
      </LargeButton>
      <LargeButton icon={telegram}>Telegram</LargeButton>
      <NoTextButton icon={plus} />
      <NoTextButton icon={thumbUp} size="small" />
    </div>
  );
}

export default App;
