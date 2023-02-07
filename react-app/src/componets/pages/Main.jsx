import { NavLink } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import Header from "../misc/Header";
import Footer from "../misc/Footer";
import Root from "./Root";
import ProductsList from "./ProductsList";
import ProductById from './ProductById';

import "./style/Main.css"


function Main() {
    return (
        <div id="Main">
            <Header />
            <Routes>
                <Route path="/"element={ <Root /> }/>
                <Route path="products" element={ <ProductsList /> } />
                <Route path="products/:id" element={ <ProductById />  } />
            </Routes>
            <Footer />
        </div>
    )
}


export default Main;