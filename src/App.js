import React from 'react';
import './App.css';
import Topbar from './components/Topbar';
import Contacts from './components/Contacts';
import Contact from './components/Contact';
import Filter from './components/Filter'


class App extends React.Component {

  constructor(){
    super()

    this.state = {
      contacts: [],
    }
  }

  componentDidMount(){

    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      .then(resp => resp.json())
      .then(respJson => {

        this.setState({
          contacts: respJson
        })

      })
  }

  render(){

    return (
      <div className="main">
        <Topbar></Topbar>
        <Filter></Filter>
        <Contacts>
          {this.state.contacts.map((el)=> <Contact key={el.id} contact_data={el}></Contact>)} 
        </Contacts>
        
      </div>
    )
  };
}

export default App;
