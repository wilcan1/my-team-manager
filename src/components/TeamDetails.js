import React, { Component } from 'react'

export default class TeamDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentDidMount() {
        fetch('https://myteammanager.herokuapp.com/teams/:id')
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.data.length; i++) {

                let team = data.data[i];

                if (team._id == this.props.match.params.id) {
                    this.setState({data: team});
                }
            }
        })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
