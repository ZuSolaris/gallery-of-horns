import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css'

class Hornedbeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rounds: 0,
      fav: false,
      title: this.title,
    };
  };

  clickFav = () => {
    this.setState({
      fav: true,
    });
  }

  unFav = () => {
    this.setState({
      fav: false,
    });
  }


  handleRounds = () => {
    this.setState({
      rounds: this.state.rounds + 1,
    });
  }

  SelectedBeast = () => {
    this.props.openModal(this.props.imgURL, this.props.title, this.props.description)

  }

  render() {
    return (
      <article>
        <Card style={{ width: '18rem' }}>
          <h2>{this.props.title}</h2>
          <h3>Horns: {this.props.numof}</h3>
          <Card.Img variant="top" src={this.props.imgURL} alt={this.props.name} onClick={this.SelectedBeast}></Card.Img>
          <p className='desc'>{this.state.description}</p>
          <Button id = 'fire' onClick={this.handleRounds} variant="danger">❤️‍🔥</Button>
          <p id= 'hearts'>Number of Hearts: {this.state.rounds}</p>
          <Button onClick={this.clickFav} variant="info">Favorite</Button>
          <Button onClick={this.unFav} variant="warning">Unfavorite</Button>
          <div id ='bottom'>{this.state.fav ? 'Favorited!' : ''}</div>
       </Card>
      </article >
    )
  }
}
export default Hornedbeast;