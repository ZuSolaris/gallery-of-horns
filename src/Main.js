import React from 'react';
import Hornedbeast from './Hornedbeast.js';
import './Main.css';


class Main extends React.Component {
  render() {
    let beastren = [];
    
    this.props.dataimport.forEach((beast, index) => {
      beastren.push(
        <Hornedbeast
          id={beast._id}
          title={beast.title}
          imgURL={beast.image_url}
          description={beast.description}
          keyword={beast.keyword}
          numof={beast.horns}
          key={index}
          addlikes={this.props.addLikes}
          openModal={this.props.openModal}
        />
      )
    });
    return (
      <>
        <main>
          {beastren}
        </main>
      </>
    )
  }
}

export default Main;