import React from 'react';
import './styles/RaM.css';
import logo from '../images/RaM.png';

function CharacterCard(props) {
  const { character } = props;

  return (
    <div
      className="CharacterCard"
      style={{ backgroundImage: `url(${character.image})` }}
    >
      <div className="CharacterCard__name-container text-truncate">
        {character.name}
      </div>
    </div>
  );
}

class RaM extends React.Component {

    state = {
        loading: true,
        error: null,
        data: {
            results: []
        }
    }

    componentDidMount() {
        this.fetchCharacters();
    }

    fetchCharacters = async () => {
        try {

            const response = await fetch('https://rickandmortyapi.com/api/character/');
            const data = await response.json();

            this.setState({
                loading: false,
                data: data
            });

        }catch(error) {
            this.setState({
                loading: false,
                error: error
            });
        }
    }

    render() {
        return (
            <div className="container">
              <div className="App">
                <img className="Logo" src={logo} alt="Rick y Morty" />
      
                <ul className="row">
                  {this.state.data.results.map(character => (
                    <li className="col-6 col-md-3" key={character.id}>
                      <CharacterCard character={character} />
                    </li>
                  ))}
                </ul>

                {this.state.loading && (
                    <p className="text-center">Loading...</p>
                )}
      
              </div>
            </div>
        );
    }

}

export default RaM;