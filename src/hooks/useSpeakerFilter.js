import { useState } from "react";

function useSpeakerFilter(startingShowSessions, staringEventYear) {
  const [showSessions, setShowSessions] = useState(startingShowSessions);
  const [eventYear, setEventYear] = useState(staringEventYear);
  const [searchQuery, setSearchQuery] = useState("");

  const EVENT_YEARS = [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ]

  return {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    searchQuery,
    setSearchQuery,
    EVENT_YEARS
  }
}

export default useSpeakerFilter;
