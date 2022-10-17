import React from 'react';



class Hornedbeast extends React.Component {
  render() {
    return(
      <article>
      <h2>{this.props.name}</h2>
      <img class = 'horn' src= {this.props.url} alt = {this.props.name} ></img>
      <p class = 'desc'>{this.props.desc}</p>

      </article>
    )
  }
}
export default Hornedbeast;