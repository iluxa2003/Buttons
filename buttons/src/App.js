import "./App.css";
import LargeButton from "./components/CustomButton/LargeButton";
import NoTextButton from "./components/CustomButton/NoTextButton";
import plus from "./icons/plus.svg";
import thumbUp from "./icons/thumbs-up.svg";
import telegram from "./icons/telegram.svg";
import CustomChecker from "./components/CustomChecker/CustomChecker";
import CustomSearch from "./components/CustomSearch/CustomSearch";
import SegmentPicker from "./components/SegmentPicker/SegmentPicker";
import { useState } from "react";

function App() {
  const [segmentState, setSegmentState] = useState("");
  const list = [
    {
      text: "item1",
      value: "first item",
      // checked: true,
    },
    {
      text: "item2",
      value: "second item",
      checked: false,
    },
    {
      text: "item3",
      value: "third item",
      checked: false,
    },
    {
      text: "item4",
      value: "fourth item",
      checked: false,
    },
  ];
  return (
    <div className="App">
      <div>
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
      <div>
        <CustomChecker />
        <CustomChecker disabled={true} />
      </div>
      <div>
        <CustomSearch />
        <CustomSearch placeholder="Press me" leftSvg={thumbUp} />
      </div>
      <div>
        <SegmentPicker
          list={list}
          name={"itemsList"}
          onChange={(event) => {
            setSegmentState(event.target.value);
          }}
        />
        <div>{segmentState}</div>
      </div>
    </div>
  );
}

export default App;
