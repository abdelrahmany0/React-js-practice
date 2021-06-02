import {Component} from "react";

class ProductDetails extends Component{
    save= ()=> {
        this.props.history.push('/cart')
    }
    render() {
        const qs = require('query-string');
        const parsed = qs.parse(this.props.location.search);
        const name = parsed.name
        const cart_items = this.props.cart_items
        const item_id = this.props.match.params.id
        let item = cart_items.find((item) => item.id === Number(item_id))
        return (
            <div className='container my-2 bg-success p-4 rounded-3'>
                <h1>Product Details ID: {item_id}</h1>
                <h2>Product Name: {item.name}</h2>
                <h2>Product Quantity: {item.quantity}</h2>
                {
                    name ? <h4>Query: {name}</h4> : null
                }
                <button className='btn btn-primary' onClick={this.save}>Save</button>
            </div>
        )
    }
}

export default ProductDetails;