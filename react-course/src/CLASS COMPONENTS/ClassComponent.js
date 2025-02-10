import React,{Component} from "react";
import Display from "./Display";

export default class App extends Component{
    state = {
        name: "Akhilesh",
        products: []
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => this.setState({products: data}))
            .catch(err => console.log(err))
    }

    render(){ // Must use render method
        return (
            <div>
                <Display products = {this.state.products} />
                <h1>Hello This is Class Component: {this.state.name}</h1>
                <button onClick={()=> this.setState({name: "Akhilesh Krishna"})}>Change Name</button>
            </div>
        )
    }
}

// this.state