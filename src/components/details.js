import React, { Component } from "react";

export default class Details extends Component {
  renderChildren = () => {
    const { links, info,id } = this.props;
    let children = [];
    if (links) {
      children = links.map((link) => {
        return (
          <a key={link.id} onClick={link.onClick} className="details-link">
            {link.title}
          </a>
        );
      });
    } else if (info) {
      children = info.map((item) => {
        return (
          <a key={item.id} className="details-item">
            {item.title}
          </a>
        );
      });
    }
    return children;
  };
  render() {
    const { title, className = { className } } = this.props;
    return (
      <div className={`${className} details`}>
        <div className="details-title">{title}</div>
        <div className="details-links">{this.renderChildren()}</div>
      </div>
    );
  }
}
