import React from "react";
import "./item.css";

const Item = ({ itemTitle, itemPrice, itemStock }) => {
    return (
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">{itemTitle}</h4>
                <h6 class="card-subtitle mb-2 text-muted">Precio: ${itemPrice}</h6>
                <p class="card-text">Stock disponible: {itemStock}</p>
                <a href="#" class="card-link">Agregar al carrito</a>
                <a href="#" class="card-link">Ver detalle</a>
            </div>
        </div>
    );
};

export default Item;