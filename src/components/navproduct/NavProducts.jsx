import React from "react";
import '../../style/navproduct/navProduct.css';
import { TbSearch } from 'react-icons/tb';
import { BsHandbag } from 'react-icons/bs';

const NavProducts = () => {
    return (
        <>
            <div id="nav-container">
                <div className="nav-itensContainer">
                    <ul>
                        <li id="l-shop" ><a href="../">Lifters Shop</a></li>
                        <li><a className="i-nav" href="/#">Shop</a></li>
                        <li><a className="i-nav" href="/#">Stories</a></li>
                        <li><a className="i-nav" href="/#">About</a></li>
                        <li id="search">
                            <div className="nav-itensContainer">
                                <ul>
                                    <li className="i-search"><TbSearch /></li>
                                    <li className="i-search"><input id="search" type="search" placeholder="Seach" name="" /></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="login" className="nav-itensContainer">
                    <ul>
                        <li><a className="cart" href="/#"><BsHandbag /></a></li>
                        <li><a className="i-nav" href="/#">Login</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavProducts;