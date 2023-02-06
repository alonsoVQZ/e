import { useEffect } from "react";
import { useState } from "react";

import './style/ProductMediaSlide.css'

function ProductMediaSlide({ media = [
    "https://m.media-amazon.com/images/I/81v7kXsP7rL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/711pTh86caS._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/81+0rkR8s9S._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71D0IjpSPBS._AC_SL1500_.jpg"
]}) {
    
    const [currentImage, setCurrentImage] = useState()
    useEffect(() => {
        setCurrentImage(media[0])
    }, [])
    return (
        <div id='ProductMediaSlide'>
            <div id='ProductMediaSlide-d1'>
                <img id='ProductMediaSlide-d1i1' src={currentImage}/>
            </div>
            <div id='ProductMediaSlide-d2'>
                {
                    media.map((image) => {
                        return (
                            <div className="ProductMediaSlide-divlist" onMouseEnter={(e) => setCurrentImage(image)}>
                                <img className="ProductMediaSlide-imglist" src={image} />
                            </div> 
                        )
                    })
                }
            </div>
        </div>
    )
}


export default ProductMediaSlide;