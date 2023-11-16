import { useState } from 'react';
import Produit from './Produit';

export default function Produits(props){
    const {ListData,categore} = props
    const [pagnier,setPagnier] = useState(0)
    return(
        <div className='row'>
        <h2><span className='pagnier'>{pagnier} DH</span></h2>
        <br/>
        <br/>
            {categore === 'rein' || categore === ''? ListData.map((pro) => <Produit pro={pro} pagnier={pagnier} setPagnier={setPagnier} />):ListData.filter(pro => pro.categore === categore).map((pro) => <Produit pro={pro} pagnier={pagnier} setPagnier={setPagnier} />)} 
        </div>
    )
}