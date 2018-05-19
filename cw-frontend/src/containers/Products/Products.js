import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {PageHeader} from "react-bootstrap";
import {fetchProducts} from "../../store/actions/products";

import ProductList from '../../components/ProductList/ProductList';

class Products extends Component {
  componentDidMount() {
    this.props.onFetchProducts();
  }

  render() {
    return (
      <Fragment>
        <PageHeader style={{marginLeft: "150px"}}>
          Products

        </PageHeader>

        {this.props.products.map((product) => (
          <ProductList
            key={product._id}
            id={product._id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProducts: () => dispatch(fetchProducts())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);