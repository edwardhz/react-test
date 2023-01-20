import React,{useContext} from 'react';
import 'styles/OrderItem.scss';
import AppContext from 'context/AppContext'
import icon from "icons/icon_close.png";

const OrderItem = ({product}) => {

	const {deleteFromCart} = useContext(AppContext);

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt="bike" />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={icon} alt="close" className='CloseIcon' onClick={()=>{
				deleteFromCart(product)
			}}/>
		</div>
	);
}

export default OrderItem;