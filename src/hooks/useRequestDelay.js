import { data } from "../../SpeakerData";
import { useEffect, useState } from "react";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure"
}

function useRequestDelay(delayTime = 1000, initialData = []) {
  const [data, setData] = useState(initialData);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function delayFunc() {
      try {
        await delay(delayTime);
        // throw "Had error.";
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(data);
      } catch (err) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(err);
      }
    }

    delayFunc();
  });

  function onFavoriteToggle(id) {
    const speakersRecPrevious = data.find(rec => rec.id === id);
    const speakersRecUpdated = {
      ...speakersRecPrevious,
      favorite: !speakersRecPrevious.favorite
    }
    const speakersDataNew = data.map(function (rec) {
      return rec.id === id ? speakersRecUpdated : rec;
    });
    setData(speakersDataNew);
  }

  function updateRecord(recordUpdated) {
    const newRecords = data.map(function (rec) {
      return rec.id === recordUpdated.id ? recordUpdated : rec;
    });

    async function delayFunction() {
      try {
        await delay(delayTime);
        setData(newRecords);
      } catch (e) {
        console.log(e);
      }
    }

    delayFunction();
  }

  return { data, requestStatus, error, updateRecord };
}

export default useRequestDelay;
