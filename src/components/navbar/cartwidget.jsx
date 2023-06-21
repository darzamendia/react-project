import React from "react";
const CartWidget = () => {
    return (
        <a className="nav-link py-3" href="#">
            <button type="button" class="btn btn-warning">
                Carrito
                <i class="bi-cart4"></i>
                <span class="badge bg-dark rounded-pill">2</span>
            </button>
        </a>
    );
};

export default CartWidget;