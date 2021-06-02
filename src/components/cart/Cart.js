import React from 'react';

import CartItem from '../cartItem/CartItem'
import EmptyCart from "./EmptyCart";

//ANOTHER EXAMPLE FOR REACT.FRAGMENT
// import Auxiliary from "../../Auxiliary/Auxiliary";

const Cart = (props) => {



        const cart_length = props.cart_items.length
        return (
            <React.Fragment>
                <div className='container my-4'>
                    {
                        //CHECK IF CART IS EMPTY
                        cart_length === 0 ?
                            //IF CART IS EMPTY
                            <EmptyCart/>
                            //IF FALSE
                            : props.cart_items.map((item) =>
                                (
                                    <CartItem key={item.id}
                                              item={item}
                                              deleteItem={props.deleteItem}
                                              addItem={props.addItem}
                                              reduceItem={props.reduceItem}
                                    />
                                )
                            )
                    }
                </div>
            </React.Fragment>

        );

}

export default Cart;