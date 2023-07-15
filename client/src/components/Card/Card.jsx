import "./Card.scss";
import {Link} from "react-router-dom";


function Cart({item}) {

return (
    <Link className="cart-link" to={`/product/${item.id}`}>
        <div className="card">
            <div className="cart-image">
                {item?.attributes.isNew && <span>New Season</span>}
                <img src={
                process.env.REACT_APP_UPLOAD_URL+item.attributes.img.data.attributes.url}
                alt="" className="cart-mainImg" />
                <img src={
                process.env.REACT_APP_UPLOAD_URL+item.attributes.img2.data.attributes.url}
                    alt="" className="cart-secImg" />
            </div>
            <h2>{item?.attributes.title}</h2>
            <div className="cart-prices">
                <h3>${item.oldprice || item?.attributes.price + 20}</h3>
                <h3>${item?.attributes.price}</h3>
            </div>
        </div>
    </Link>
)
}

export default Cart;