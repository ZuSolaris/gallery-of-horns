// imports
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast'
import Footer from './Footer.js';
import data from './data.json';
import Form from 'react-bootstrap/Form';
import './App.css';



//class component



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: '',
      showModal: false,
      deciData: data,
    }
  }
  addLikes = () => {
    this.setState({
      like: this.state.like + '🔥'
    })
  }

  //* Modul Logic */
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
      desc: description,
    })
  }

  //*Form Logic */

  listDeci = (event) => {
    let listSlct = event.target.value;
    console.log(typeof listSlct);

    if (listSlct === "0") {
      this.setState({
        deciData: data,

      });
    }

    else if (listSlct === "1") {
      let dataFilter = data.filter(dataDisp => dataDisp.horns === 1);

      this.setState({
        deciData: dataFilter,

      });
    }

  else if (listSlct === "2") {
    let dataFilter = data.filter(dataDisp => dataDisp.horns === 2);

    this.setState({
      deciData: dataFilter,

    });
  }

else if (listSlct === "3") {
  let dataFilter = data.filter(dataDisp => dataDisp.horns === 3);

  this.setState({
    deciData: dataFilter,

  });
}

else if (listSlct === "4") {
  let dataFilter = data.filter(dataDisp => dataDisp.horns === 100);

  this.setState({
    deciData: dataFilter,

  });
 }
}




  //Render handler

  render() {
    return (
      <>
        <Header
          like={this.state.like} />
        <Main
          dataimport={this.state.deciData}
          addLikes={this.addLikes}
          openModal={this.openModal} />
        <SelectedBeast
          showModal={this.state.showModal}
          closeModal={this.closeModal}
          imgslct={this.state.imgslct}
          titleslct={this.state.titleslct}
          desc={this.state.desc}

        />

        <Form>
          <Form.Label>Filter By Horns</Form.Label>
          <Form.Select onChange={this.listDeci}>
            <option value="0">All Horns</option>
            <option value="1">1 Horns</option>
            <option value="2">2 Horns</option>
            <option value="3">3 Horns</option>
            <option value="4">100 Horns</option>
          </Form.Select>
        </Form>

        <Footer />

      </>
    )
  }
}





//export

export default App;