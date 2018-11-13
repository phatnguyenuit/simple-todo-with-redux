import React from 'react';
import ContainerToDoList from  './ContainerToDoList'
import ContainerAddToDo from './ContainerAddToDo'
import Footer from './Footer'


const App = () => {
  return(
    <div>
      <ContainerAddToDo />
      <ContainerToDoList />
      <Footer />
    </div>
  )
};

export default App;
