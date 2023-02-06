import { NavLink } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import Header from "../misc/Header";
import Footer from "../misc/Footer";
import Root from "./Root";
import ProductById from './ProductById';


function Main() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/"element={ <Root /> }/>
                <Route path="products/:id" element={ <ProductById />  } />
            </Routes>
            <Footer />
        </div>
    )
}


export default Main;