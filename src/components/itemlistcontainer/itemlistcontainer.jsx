/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Item from './item.jsx';
import './itemlistcontainer.css';

const ItemListContainer = ({
	itemTitleOne,
	itemPriceOne,
	itemStockOne,
	itemTitleTwo,
	itemPriceTwo,
	itemStockTwo,
	itemTitleThree,
	itemPriceThree,
	itemStockThree,
}) => {
	return (
		<main>
			<div class='container'>
				<Item itemTitle={itemTitleOne} itemPrice={itemPriceOne} itemStock={itemStockOne} />
				<Item itemTitle={itemTitleTwo} itemPrice={itemPriceTwo} itemStock={itemStockTwo} />
				<Item itemTitle={itemTitleThree} itemPrice={itemPriceThree} itemStock={itemStockThree} />
			</div>
		</main>
	);
};

export default ItemListContainer;
