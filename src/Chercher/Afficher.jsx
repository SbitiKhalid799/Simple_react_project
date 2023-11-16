import  {personnes} from './data'
import Tableau from './Tableau'
import { Component } from "react";


export default class Afficher extends Component{
    constructor(props){
        super(props)
        this.state = {List:personnes,Entrer : '',type : 0,palceholder : ''}
    }


    getChoix(event){//geter le choix de recherche
        const Chois = event.target.value;
        this.setState({type:Chois})
        switch (this.state.type){
            case "1":
                this.setState({palceholder:'Chercher dans Les noms'})
                break;
            case "2":
                this.setState({palceholder:"Chercher dans Les prenoms"})
                break;
            default :
                this.setState({palceholder:'Chercher dans Les identifients'})
                break;
            }

    }


    getValeurRecherche(event){
        const v = event.target.value
        switch (this.state.type){
            case "1":
                this.setState({Entrer : v})
                if (v === '' || v === null){
                    this.setState({List : personnes})
                }else{
                    const CopyListDAta = personnes.filter(element => element.id.toString() === v )
                    this.setState({List : CopyListDAta})
                }
                break;
            case '2':
                if (v === '' || v === null){
                    this.setState({List : personnes})
                }else{
                    const CopyListDAta = personnes.filter(element => element.nom.toUpperCase() === v.toUpperCase())
                    this.setState({List : CopyListDAta})
                }
            
                break;
            case '3':
                console.log('khalid')
                break;
            default:
                break;
        }
        
    }



    render(){
        return(
            <div class='container'>
                <div className='BarreRecherche'>
                    <div class="input-group mb-3 mt-3">
                        <input className='input1' onChange={(event) => this.getValeurRecherche(event)} placeholder={this.state.palceholder}  type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    </div> 
                    <select onChange={(event)=>this.getChoix(event)} class="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected value=""></option>
                        <option value="1">Id</option>
                        <option value="2">Nom</option>
                        <option value="3">Prenom</option>
                    </select>

                </div>

        <table className='tableau' class="table text-center table-borderless mt-5">
        <tr className='headerTable'>
            <th>
                 <h2>Id</h2>
            </th>
            <th>
                <h2>Nom</h2>
            </th>
            <th>
                <h2>Prenom</h2>
            </th>
        </tr>
        {this.state.List.map((e,i)=><Tableau personne={e} index={i} />)}
    </table>
    </div>
)
}
}
