import { useState } from "react";

function SpeakersToolbar({theme, setTheme, showSessions, setShowSessions}) {

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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SpeakersToolbar;
