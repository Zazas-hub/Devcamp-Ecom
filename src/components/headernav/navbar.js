import React, { Component } from "react";
import { connect } from "react-redux";
class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar">
        {this.props.navbarLinks.map((link) => {
          return (
            <a
              className={`navbarLinks ${link.active ? "green-text" : ""}`}
              key={link._id}
              onClick={() => console.log("trying to switch tabs")}
            >
              {link.title}
            </a>
          );
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { navbarLinks } = state.headerNavbar;
  return {
    navbarLinks,
  };
}
Navbar = connect(mapStateToProps)(Navbar);
export default Navbar;
