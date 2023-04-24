import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";
import { SpeakerFilterProvider } from "../contexts/SpeakerFilterContext";

function Speakers() {
  return (
    <SpeakerFilterProvider startingShowSessions={false}>
      <SpeakersToolbar></SpeakersToolbar>
      <SpeakersList></SpeakersList>
    </SpeakerFilterProvider>
  );
}

export default Speakers;
