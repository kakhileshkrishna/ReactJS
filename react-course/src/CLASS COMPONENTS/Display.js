import React, { Component } from 'react'

export class Display extends Component {
  render() {
    return (
      <div>
      <h1> PRODUCT TITLES</h1>

      {this.props.products.map((product)=> <ul key= {product.id}> {product.id}.   {product.title}</ul>)}

      </div>
    )
  }
}

export default Display