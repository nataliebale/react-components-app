import Speaker from "./Speaker";
import ReactPlaceholder from "react-placeholder";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from "../../SpeakerData";

function SpeakersList( ) {

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
              onFavoriteToggle={(doneCallback) => {
                updateRecord({
                  ...speaker,
                  favorite: !speaker.favorite
                }, doneCallback);
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
