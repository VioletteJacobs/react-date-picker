import React, { Component } from 'react'
import Calendar from "react-calendar"


export default class picker extends Component {
    state = {
        date: new Date(),
        // pour plusieurs jours: 
        showDate: false
    }
    // fonction permettant que la date sur laquel on clique devient la date de setState (le date du bas équivaut )à date:date comme on a le même nom on peut mettre que date. Le state date prend l'événement. 
    onChange = date =>{
        this.setState({
            date
        })
    }
    // validation

    validation = () =>{
        this.setState({showDate : true})
        console.log(this.state.date);
    }
    reset = () =>{
        this.setState({showDate : false})
    }
    render() {
        return (
            <div>
                <div onClick={this.reset}>

                <Calendar onChange={this.onChange}
                // en sélectionner plusieurs
                selectRange={true}
                // commencer à la journée d'aujourd'hui
                // value={this.state.date}
                />
                </div>
                <button onClick={this.validation}>Confirmer</button>
                {/* Est-ce que shoxDate est true ou false? si c'est true les deux paragraphe s'affiche, si c'est false on ne montre : rien*/}
                {this.state.showDate ? (
                    <div>
                        <p>Du : {this.state.date[0].toLocaleDateString()}</p>
                        <p>Au : {this.state.date[1].toLocaleDateString()}</p>
                    </div>
                ): null}

                {/* dans le cas où on n eveut choisir que un jour. */}
                {/* <p>Vous avez choisit le : {this.state.date.toLocaleDateString()}</p> */}
                {/* toLocaldeDateString() permet de transformer un objet en string */}
                {/* dans le cas où on veut plusieurs jours.  */}
            </div>
        )
    }
}
