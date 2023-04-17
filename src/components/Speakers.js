import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";
import { useState } from "react";

function Speakers({theme, setTheme}) {
  const [showSessions, setShowSessions] = useState(true);
  return (
    <>
      <SpeakersToolbar
        theme={theme}
        setTheme={setTheme}
        showSessions={showSessions}
        setShowSessions={setShowSessions}
      ></SpeakersToolbar>
      <SpeakersList
        showSessions={showSessions}
      ></SpeakersList>
    </>
  );
}

export default Speakers;
