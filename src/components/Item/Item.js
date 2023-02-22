import React from 'react'
import './Item.css'

const Item = ({ product }) => {
    return (
        <>
            <div className="flex">
                <section>
                    <img src={product.pictureUrl} alt={product.title} />
                    <h2>{product.title}</h2>
                    <p>15 minutos de preparacion</p>
                    <aside>
                        <ul>
                            <li>Precio: $ {product.price}</li>
                            <li>Stock: {product.stock}</li>
                        </ul>
                        <button>Detalle</button>
                    </aside>
                </section>
            </div>
        </>
    )
}

export default Item