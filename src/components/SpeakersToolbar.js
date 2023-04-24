import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";

function SpeakersToolbar() {
  const {theme, setTheme} = useContext(ThemeContext);
  const {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    searchQuery,
    setSearchQuery,
    EVENT_YEARS
  } = useContext(SpeakerFilterContext)

  return (
    <div className="toolbar dark-theme-header">
      <div className="container">
        <div className="justify-content-between">
          <ul className="toolrow d-flex flex-column flex-lg-row">
            <li className="d-flex flex-column flex-md-row">
              <b>Show Sessions</b>
              <label className="fav">
                <input
                  type="checkbox"
                  checked={showSessions}
                  onChange={(event) => {
                    setShowSessions(event.target.checked);
                  }}
                />
                <span className="switch"></span>
              </label>
            </li>
            <li className="d-flex flex-column flex-md-row ml-sm-5 ml-0">
              <strong>Theme</strong>
              <select
                className="form-control theme"
                value={theme.value}
                onChange={(event) => {
                  setTheme(event.target.value)
                }}
              >
                <option value="light">Light</option>
                <option value="dark">dark</option>
              </select>
            </li>
            <li>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="search..."
                  onChange={(event) => {
                    setSearchQuery(event.target.value);
                  }}
                />
                <div className="input-group-append">
                  <button className="btn btn-secondary">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SpeakersToolbar;
