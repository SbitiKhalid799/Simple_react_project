import './style.css'
export default function Tableau(props){
    const {personne,index} = props;

    return(
        <>
        <tr key={index}>
            <th>
                {personne.id} 
            </th>
            <th>
                {personne.nom} 
            </th>
            <th>
                {personne.prenom} 
            </th>
        </tr>
        </>
    )
}