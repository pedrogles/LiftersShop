import '../../style/card/card.css';
import React from 'react';
import { Link } from 'react-router-dom'

const Card = ({ product, index }) => {
    return (
        <Link to={`/product/${index}`}>
            <div className="card-container">
                <div className="card-image">
                     <img src={product?.fotos.find(foto => foto.capa === true)?.url} alt={product.titulo} />
                </div>
                <div className="card-description">
                    <h2 className='title-description'>{product.titulo}</h2>
                    <h3 className='size-description'>{product.tamanhos[1]}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card;