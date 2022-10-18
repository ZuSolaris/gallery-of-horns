import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Hornedbeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rounds: 0,
      fav: false,
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


  render() {
    return (
      <article>
        <Card style={{ width: '18rem' }}>
        <h2>{this.props.title}</h2>
        <h3>Horns: {this.props.numof}</h3>
        <Card.Img variant="top" src={this.props.imgURL} alt={this.props.name} />
        <p class='desc'>{this.state.description}</p>
        <p onClick={this.handleRounds}>❤️‍🔥</p>
        <p>Number of Hearts: {this.state.rounds}</p>
        <Button onClick={this.clickFav} variant="info">Favorite</Button>
        <Button onClick={this.unFav} variant="warning">Unfavorite</Button>
        <div>{this.state.fav ? 'Favorited!' : ''}</div>
      </Card>
      </article >
    )
  }
}
export default Hornedbeast;