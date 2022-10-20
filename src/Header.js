import React from 'react';


class Header extends React.Component {
  render() {

    return (
      < header >
      <h1 className="rainbowtext">
       Gallery of Horns {this.props.like}
      </h1>
    </header >
    )
  }
}

export default Header;