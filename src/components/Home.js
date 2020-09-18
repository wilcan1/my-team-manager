import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoad: false,
        }

    }

    componentDidMount() {
        fetch("https://myteammanager.herokuapp.com/teams")
        .then((response) => {return response.json();})
        .then((data) => { 
            this.setState({
                isLoad: true,
            items: data.data
        }) 
    })

    }

    render() {

        var {isLoad, items} = this.state;
        if (!isLoad) {
            return <div className="load">Chargement de la page d'accueil...</div>
        } else {
        return (
            <div className="equipe">
              <ul>
                  <input type="text" name="ajoutEquipe" id="ajout"/>
                  <input type="button" value="AJOUTER UN PAYS"/>
                  {items.map(item => (
                      <li key={item.id}>
                          {item.nom_equipe}
                    </li>
                  ))}
              </ul>
            </div>
        )
        }
    }
}
