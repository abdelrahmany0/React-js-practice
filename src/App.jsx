import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css'

import Cart from './components/cart/Cart'
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
            cart_items: [],
        }
    }

    async componentDidMount() {
        // const promise = fetch('https://jsonplaceholder.typicode.com/posts')
        // console.log(promise)
        // const res = promise.then(response => response.json())
        // console.log(res)
        // res.then(json => console.log(json))
        // const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
        // console.log(data)

        const { data } = await axios.get('http://localhost:3000/products')
        this.setState({cart_items: data})
        console.log(this.state.cart_items)
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

                        <Route path='/about' exact component={About}/>
                        <Route path='/login' exact component={Login}/>

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
