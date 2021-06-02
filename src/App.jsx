import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Cart from './components/cart/Cart'

import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/layoutComponents/navbar/Navbar";
import ProductDetails from "./components/productDetails/ProductDetails";
import Home from "./components/Home/Home";
import NotFound from "./components/PageNotFound/NotFound";
import About from "./components/About/About";
import Login from "./components/Login/Login";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart_items: [
                {id: 1, name: 'test0', quantity: 1},
                {id: 2, name: 'test1', quantity: 4},
                {id: 3, name: 'test2', quantity: 2},
            ],
        }
    }

    deleteItem = (product) => {
        // CLONE
        let cart_items = this.state.cart_items
        //EDIT
        cart_items = cart_items.filter((item) => item.id !== product.id)
        //SAVE
        this.setState({cart_items: cart_items})
    }

    addItem = (item) => {
        //clone
        let cart_items = this.state.cart_items
        const index = this.state.cart_items.findIndex(i => i === item)
        //EDIT
        item.quantity += 1
        cart_items[index] = item
        //SAVE
        this.setState({cart_items})
    }

    reduceItem = (item) => {
        if (item.quantity > 0) {
            //clone
            let cart_items = this.state.cart_items
            const index = this.state.cart_items.findIndex(i => i === item)
            //EDIT
            item.quantity -= 1
            cart_items[index] = item
            //SAVE
            this.setState({cart_items})
        }
    }

    render() {
        return (
            <React.Fragment>
                <Router>
                    <Navbar itemsQuantity={this.state.cart_items.filter((item) => item.quantity > 0).length}/>

                    <Switch>
                        <Route path='/cart'>
                            <Cart
                                cart_items={this.state.cart_items}
                                deleteItem={this.deleteItem}
                                addItem={this.addItem}
                                reduceItem={this.reduceItem}
                            />
                        </Route>

                        <Route
                            path='/product/:id/:name?'
                            render={(props) =>
                                (
                                    <ProductDetails
                                        cart_items={this.state.cart_items}
                                        {...props}
                                    />
                                )}
                        />

                        <Route path='/about' exact component={About} />
                        <Route path='/login' exact component={Login} />

                        <Route path='/home' exact component={Home}/>
                        <Redirect from='/' to='/home'/>

                        <Route path='/NotFound' component={NotFound}/>
                        <Redirect to='/NotFound'/>
                    </Switch>
                </Router>

            </React.Fragment>
        )
    }
}

export default App;
