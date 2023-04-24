import useSpeakerFilter from "../hooks/useSpeakerFilter";
import { createContext } from "react";

const SpeakerFilterContext = createContext();

function SpeakerFilterProvider({children, startingShowSessions = false, staringEventYear}){
  const { showSessions, setShowSessions, eventYear, setEventYear, searchQuery, setSearchQuery, EVENT_YEARS } = useSpeakerFilter(
    startingShowSessions,
    staringEventYear
  );

  return (
    <SpeakerFilterContext.Provider
      value={
        {
          showSessions,
          setShowSessions,
          eventYear,
          setEventYear,
          searchQuery,
          setSearchQuery,
          EVENT_YEARS
        }
      }
    >
      {children}
    </SpeakerFilterContext.Provider>
  )
}

export { SpeakerFilterContext, SpeakerFilterProvider };
