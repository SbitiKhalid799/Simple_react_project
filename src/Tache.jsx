import { Component } from "react"
import './style.css'


export default class Taches extends Component{
    constructor(props){
        super(props)
        this.state = {ListTache : [] , nomTach : '',i : ''}
    }


    getNomTach(event){
        this.setState({nomTach:event.target.value})
    }
    
    
    Afficher = () => {
        if(this.state.nomTach === ''){
            console.log(this.state.nomTach.length )
        }else{
            this.state.ListTache.push(this.state.nomTach)
        }
        this.setState({ListTache: this.state.ListTache})
    }
    

    render(){
        return(
            <div className="Conteneur">
                <div className="barreFix">
                    <input className="Entrer" type="text" onChange={(event) => this.getNomTach(event)}/>
                    <input className="Ajouter" type="button" value='Ajouter' onClick={this.Afficher} />
                </div>    
            <ul>    
            {this.state.ListTache.map(
                (element,index)=>
                <li key={index}>
                    {element}
                    <input className="Supprimer" type="button" value="Supprimer" onClick={
                        ()=> {
                            let NewList = this.state.ListTache.filter((_,i) => i !== index)
                            this.setState({ListTache : NewList})
                        }
                    }/>
                </li>
            )}
            </ul>
            </div>
        )
    }
}