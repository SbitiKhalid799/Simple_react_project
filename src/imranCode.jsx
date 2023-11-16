import { Component } from "react";

export default class Todo extends Component {

    constructor(props){
        super(props)

        this.state = {
            newTache : '',
            listTache : []
        }
    }

    OnInputChange = (e) => {
        this.setState({newTache : e.target.value})
    }

    OnAddTache = () => {
        const tache = this.state.newTache;
        if(tache === null || tache.legth === 0)
            return;

        const newList = [...this.state.listTache, tache];
        this.setState({listTache : newList})
    }

    render(){
        return (
            <div>
                <input type="text" onChange={this.OnInputChange} />
                <button onClick={this.OnAddTache}>AJOUTER</button>
                <br />
                <ul>
                    {
                        this.state.listTache.map((e, i) => {
                            return (
                                    <li key={i}>
                                        <span>{e}</span>
                                        <button 
                                            onClick={() => {
                                                const newList = this.state.listTache.filter((_,index) => index !== i);
                                                this.setState({listTache : newList})
                                            }}>
                                                SUPRIMER
                                        </button>
                                    </li>
                                )
                        })
                    }
                </ul>
            </div>
        )
    }
}   