// imports
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast'
import Footer from './Footer.js';
import data from './data.json';
import './App.css';


//class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: '',
      showModal: false,
      data: data,
    }
  }
  addLikes = () => {
    this.setState({
      like: this.state.like + '🔥'
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false,
    })
  }
  openModal = (imgURL, title, description) => {
    this.setState({
      showModal: true,
      imgslct: imgURL,
      titleslct: title,
      desc:description,
    })
  }


  render() {
    return (
      <>
        <Header
          like={this.state.like} />
        <Main
          dataimport={this.state.data}
          addLikes={this.addLikes}
          openModal={this.openModal} />
        <SelectedBeast 
        showModal= {this.state.showModal}
        closeModal= {this.closeModal}
        imgslct= {this.state.imgslct}
        titleslct= {this.state.titleslct}
        desc={this.state.desc}

        />
  
        <Footer />

      </>
    )
  }
}





//export

export default App;