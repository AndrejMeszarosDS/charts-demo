import React from "react";
import avatar from "./avatar.png";
import "./modalcard.scss";

export default class ModalCard extends React.Component {
  render() {
    return (
      <div id="Open-modal-card" className="Modal-card">
        <div className="Card">
          <div className="Image">
            <img src={avatar} alt="John" width="400" height="400" />
          </div>
          <div className="Text">
            <h1>Andrej Meszaros</h1>
            <p className="Title">WEB DEVELOPER</p>
            <p>OpenClassrooms</p>
          </div>
          <a href="#" className="Modal-card-close ">
            <i className="material-icons">disabled_by_default</i>
          </a>
        </div>
      </div>
    );
  }
}
