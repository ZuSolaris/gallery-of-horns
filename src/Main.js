import React from 'react';
import Hornedbeast from './Hornedbeast.js';


class Main extends React.Component {
render(){
  return (
    <>
    <main id='main-component'>
{/* Pointy */}
    <title>Horned Beasts</title>
    <Hornedbeast name= "Pointy" desc= "This Pointy!" url = "https://images.unsplash.com/photo-1558907530-e27c54089326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1136&q=80"/>
  
{/* Sharp */}
    <Hornedbeast name= "Sharp" desc="This is Sharp!" Hornedbeast url = "https://images.unsplash.com/photo-1585544313985-f84aac5abf7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>
    </main>
    </>
  )
 }
}

export default Main;