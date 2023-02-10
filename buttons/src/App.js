import "./App.scss";
import LargeButton from "./components/CustomButton/LargeButton";
import NoTextButton from "./components/CustomButton/NoTextButton";
import plus from "./icons/plus.svg";
import thumbUp from "./icons/thumbs-up.svg";
import telegram from "./icons/telegram.svg";
import CustomChecker from "./components/CustomChecker/CustomChecker";
import CustomSearch from "./components/CustomSearch/CustomSearch";
import SegmentPicker from "./components/SegmentPicker/SegmentPicker";
import { React, useState } from "react";
import CustomRange from "./components/CustomRange/CustomRange";

function App() {
  const [segmentState, setSegmentState] = useState("");
  const list = [
    {
      text: "item1",
      value: "first item",
    },
    {
      text: "item2",
      value: "second item",
    },
    {
      text: "item3",
      value: "third item",
    },
    {
      text: "item4",
      value: "fourth item",
    },
  ];
  return (
    <div className="app">
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
      <div>
        <CustomRange showRange={true} />
        <CustomRange />
        <CustomRange currentValue={true} />
      </div>
    </div>
  );
}

export default App;
