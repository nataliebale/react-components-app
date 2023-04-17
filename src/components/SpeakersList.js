import Speaker from "./Speaker";
import ReactPlaceholder from "react-placeholder";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from "../../SpeakerData";

function SpeakersList({ showSessions }) {

  const {
    data: speakersData, requestStatus, error, updateRecord
  } = useRequestDelay(2000, data);

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-danger container">
        ERROR: <b>loading Speaker Data Failed</b>
      </div>
    );
  }

  // if(isLoading === true) return <div className="container">Loading...</div>

  return (
    <div className="container speakers-list">
      <ReactPlaceholder
        type="media"
        rows={15}
        className="speakerslist-placeholder"
        ready={requestStatus === REQUEST_STATUS.SUCCESS}
      >
        <div className="row">
        {speakersData.map(function (speaker) {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
              onFavoriteToggle={() => {
                updateRecord({
                  ...speaker,
                  favorite: !speaker.favorite
                });
              }}
            ></Speaker>
          );
        })}
      </div>
      </ReactPlaceholder>
    </div>
  );
}

export default SpeakersList;
