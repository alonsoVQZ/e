import "./style/FourItemsCard.css"

function FourItemsCard({ title="asdasdasd"}) {
    return (
        <div id="FourItemsCard">
            <span id="FourItemsCard-s1">{title}</span>
            <div id="FourItemsCard-d1">
                <div className="FourItemsCard-item">
                    <img className="FourItemsCard-image" src="" alt="" />
                    <span className="FourItemsCard-span">Item</span>
                </div>
                <div className="FourItemsCard-item">
                    <img className="FourItemsCard-image" src="" alt="" />
                    <span className="FourItemsCard-span">Item</span>
                </div>
                <div className="FourItemsCard-item">
                    <img className="FourItemsCard-image" src="" alt="" />
                    <span className="FourItemsCard-span">Item</span>
                </div>
                <div className="FourItemsCard-item">
                    <img className="FourItemsCard-image" src="" alt="" />
                    <span className="FourItemsCard-span">Item</span>
                </div>
            </div>
        </div>
    )
}

export default FourItemsCard;