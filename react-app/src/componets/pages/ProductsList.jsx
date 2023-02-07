import { useEffect } from "react";
import { useSelector, useStore } from "react-redux";

import "./style/ProductsList.css"

function ProductsList() {
    const products = useSelector((state) => state?.products);

    
    return (
        <div id='ProductsList'>
            <div id='ProductsList-d1'>

            </div>
            <div id='ProductsList-d2'>
                <div id='ProductsList-d2d1'>

                </div>
                <div id='ProductsList-d2d2'>
                    {
                        products && (
                            <ul id="ProductsList-ul1">
                                {
                                    Object.values(products).map((product)  => {
                                        const price = `${product.price}`.split(".")
                                        return (
                                            <li className="ProductsList-item">
                                                <div>
                                                    <img className="ProductsList-itemImage" src="" />
                                                </div>
                                                <div className="ProductsList-itemDiv2">
                                                    <span id='ProductsList-d2d2ul1l11d2s1' className="ProductsList-itemDiv2Content">{ product.name }</span>
                                                    <span className="ProductsList-itemDiv2Content"></span>
                                                    <div id='ProductsList-d2d2ul1l11d2d1' className="ProductsList-itemDiv2Content">
                                                        <span id='ProductsList-d2d2ul1l11d2d1s1'>$</span>
                                                        <span id='ProductsList-d2d2ul1l11d2d1s2'>{ price[0] }</span>
                                                        <span id='ProductsList-d2d2ul1l11d2d1s3'>{ `.${price[1]}` }</span>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        )
                    }
                    {
                        !products && (
                            <h1>Not products found</h1>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductsList;