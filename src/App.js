import React from 'react';
import './App.css';
import Topbar from './components/Topbar';
import Contacts from './components/Contacts';
import Contact from './components/Contact';
import Filter from './components/Filter'


class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      contacts: [],
      treatedContacts: []
    }

    this.sortContent = this.sortContent.bind(this);
    this.filterContent = this.filterContent.bind(this);
  }

  componentDidMount(){

    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      .then(resp => resp.json())
      .then(respJson => {

        this.setState({
          contacts: respJson,
          treatedContacts: respJson
        })

      })
  }

  sortContent(category){

    console.log(this.state)
    let treatedContacts = this.state.contacts.sort((a, b) => {

      if(a[category] > b[category]) return 1

      if(a[category] < b[category]) return -1

      return 0;
    });

    this.setState({treatedContacts: treatedContacts})
  }

  filterContent(event){

    let content = new RegExp( event.target.value.toLowerCase() )

    let treatedContacts = this.state.contacts.filter( (contact) => {
      return contact.name.toLowerCase().match(content)
    })

    this.setState({treatedContacts: treatedContacts});
  }

  render(){

    
    return (
      <div className="main">
        <Topbar></Topbar>
        <Filter
          sortContent={this.sortContent}
          filterContent={this.filterContent}
        ></Filter>
        <Contacts>
          {this.state.treatedContacts.map((el)=> <Contact key={el.id} contact_data={el}></Contact>)} 
        </Contacts>
        
      </div>
    )
  };
}

export default App;
