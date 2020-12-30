import React, { Component } from "react";

export default class Details extends Component {
  render() {
    const { title, links, onClick } = this.props;
    return (
      <div className="details">
        <div className="details-title">{title}</div>
        <div className="details-links">
          {links.map((link) => {
            return (
              <a key={link.id} className="details-link" onClick={link.onClick}>
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}
