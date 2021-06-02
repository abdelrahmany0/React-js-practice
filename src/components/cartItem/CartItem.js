import React, {Component} from 'react';
import {Link} from "react-router-dom";

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        }
    }

    state = {}

    render() {
        return (
            <React.Fragment>
                <div className='row shadow-lg p-3 mb-5 rounded mx-auto w-75'>
                    <div className='col-3 d-flex justify-content-center align-items-center'>
                        <div className="alert alert-secondary" role="alert">
                            <Link className="nav-link" to={`/product/${this.state.item.id}`}>
                                <span>{this.state.item.name}</span>
                            </Link>
                        </div>
                    </div>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <button type="button" className="btn btn-dark rounded-3">
                            {
                                this.state.item.quantity > 0 ?
                                    <div>
                                        Quantity: <span
                                        className="badge rounded-pill bg-primary">{this.state.item.quantity}</span>
                                    </div>
                                    :
                                    <div>
                                        Quantity: <span
                                        className="badge rounded-pill bg-warning">{this.state.item.quantity}</span>
                                    </div>
                            }
                        </button>
                        <button onClick={() => this.props.addItem(this.state.item)} className="btn m-2">
                            <i className="fas fa-plus text-success"/>
                        </button>
                        <button onClick={() => this.props.reduceItem(this.state.item)} className="btn m-2">
                            <i className="fas fa-minus text-secondary"/>
                        </button>
                        <button onClick={() => this.props.deleteItem(this.state.item)} className='btn'>
                            <i className="fas fa-trash text-dark"/>
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CartItem;