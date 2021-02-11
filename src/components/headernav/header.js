import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../../history";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src="//logo.clearbit.com/spotify.com" />
        <div className="header-links">
          {this.props.headerLinks.map((link) => {
            return (
              <a
                className="header-link"
                key={link._id}
                onClick={() => history.push(link.path)}
              >
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { headerLinks } = state.headerNavbar;
  return {
    headerLinks,
  };
}
Header = connect(mapStateToProps)(Header);
export default Header;
