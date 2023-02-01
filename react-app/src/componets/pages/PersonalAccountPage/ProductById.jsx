import { Routes, Route } from 'react-router-dom';


import ProductMediaSlide from './misc/ProductMediaSlide';
import ProductInformation from './misc/ProductInformation';
import ProductOrder from './misc/ProductOrder';


import './style/ProductById.css'


function ProductById() {
    return (
        <div id='ProductById'>
            <div id='ProductById-d1'>

            </div>
            <div id='ProductById-d2'>
                
                <ProductMediaSlide />
                <ProductInformation />
                <ProductOrder />
            </div>
        </div>
    )
}

export default ProductById;