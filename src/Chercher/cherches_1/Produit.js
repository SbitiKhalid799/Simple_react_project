export default function Produit(props){
    const {pro,setPagnier,pagnier} = props;
    return(
        // <div>
        //     <p>Nom : {pro.nom}</p>
        //     <p>Prix : {pro.prix}</p>
        //     <p>Description : {pro.description}</p>
        //     <p>catégore : {pro.categore}</p>
        //     <button>Ajouter au panier</button>
        // </div>
        <div className="p-2 col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="card" style={{minHeight:'300px',boxShadow:'0px 0px 2px 0px gray',backgroundColor:'rgb(255, 251, 243)'}}>
            <div className="card-body">
            <h5 className="card-title">{pro.nom}</h5>
            <div className="card-text">
                <h5>{pro.prix} DH</h5>
                <br/>
                <p>{pro.description}</p>
                <p>catégore : {pro.categore}</p>
            </div>
            <button onClick={()=> setPagnier(pagnier + pro.prix)} className="btn " style={{position:'absolute',bottom:'20px'}}>Ajouter au panier</button>
            </div>
            </div>
        </div>
    )
}