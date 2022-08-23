import Card from '../card/Card';
import api from '../../services/api';
import React, { useEffect, useState } from 'react';
import '../../style/sectionProducts/sectionProducts.css';

const SectionProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        api
            .get("")
            .then((response) => {
                setProducts(response.data)
            })
    }, [])

    return (
        <div id='sectionContainer'>
            <div className="filter-container">
                <h3>Filters</h3>
                <button>Clear Filters</button>
            </div>
            <div className="categories-container">
                <span>
                    <h4>Categories</h4>
                </span>
            </div>
            <div className='grid'>
                <div className='categories-list'>
                    <ul>
                        {products.map((product, key) => (
                            <li key={key}>
                                <input type="checkbox" />{product.categoria}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='colors-list'>
                    <h4>Colors</h4>
                    <ul>
                        {products[0]?.cores.map((cor, key) => (
                        <li key={key}>
                            <button style={{backgroundColor: cor.codigo}}></button>
                        </li>
                        ))}
                    </ul>
                </div>
                <div id="section-products-container">
                    <div className='products-container'>
                        {products.map((product, index) => {
                            return <Card index={index} product={product} key={index}/>
                        })}
                    </div>
                    <h5>Showing&nbsp;<span>{products.length}</span>&nbsp;Products</h5>
                </div>
            </div>
        </div>
    )
}

export default SectionProducts;