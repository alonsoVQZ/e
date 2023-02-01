import { NavLink } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import Header from "./misc/Header";
import ProductMediaSlide from "./misc/ProductMediaSlide";
import ProductInformation from './misc/ProductInformation';
import ProductById from './ProductById';


function Main() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/"element={ <h1>Main Page</h1>  }/>
                <Route path="products/:id" element={ <ProductById />  } />
            </Routes>
        </div>
    )
}


export default Main;