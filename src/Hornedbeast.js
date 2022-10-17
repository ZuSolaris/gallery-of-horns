import React from 'react';



class Hornedbeast extends React.Component {
  render() {
    return(
      <article>
      <h3>{this.props.name}</h3>
      <img src= {this.props.url} alt = {this.props.name} ></img>
      <p>{this.props.desc}</p>

      </article>
    )
  }
}
export default Hornedbeast;