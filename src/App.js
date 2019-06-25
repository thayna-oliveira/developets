import React, { Component } from 'react';
import { Container, Card, Header, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { PetCard } from './components/PetCard';
import { pets } from './data/pets';
import logo from './assets/img/logo.svg';


class App extends Component {
  render() {

    const petCards = pets.map((pet, index) => PetCard(pet, index));

    return (
      <div className="App">

        <img src={logo} alt="Kiwi standing on oval" />

        <header className="App-header">
          <Header as="h1" icon textAlign="center" className="App-title">
            <Icon name="paw" />
            <Header.Content>
              DeveloPets
            </Header.Content>
          </Header>

        </header>
        <div className="App-content">
          <Container>
            <Card.Group stackable>
              {petCards}
            </Card.Group>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
