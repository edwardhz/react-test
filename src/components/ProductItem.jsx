import React, {useContext}from 'react';
import 'styles/ProductItem.scss';
import AppContext from 'context/AppContext';
import iconCart from "icons/bt_add_to_cart.svg";

const ProductItem = ({product}) => {

	const { addToCart,state } = useContext(AppContext);

	const HandleClick = (item) =>{
		addToCart(item)

	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt="" />
			<div className="product-info">
				<div>
					<p>$ {product.price}</p>
					<p>{product.name}</p>
				</div>
				<figure onClick={() => HandleClick(product)}>
					<img src={iconCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;