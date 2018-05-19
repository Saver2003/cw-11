import React, {Component, Fragment} from 'react';
import {PageHeader} from "react-bootstrap";
import OneProductInfo from "../../components/OneProductInfo/OneProductInfo";
import {fetchProductInfo} from "../../store/actions/productInfo";
import {connect} from "react-redux";


class ProductInfo extends Component {

  componentDidMount() {
    this.props.onFetchProductInfo(this.props.user.token);
    console.log(this.props.user.token);
  }

  render() {
    return (
      <Fragment>
        <PageHeader>
          <p>
            Product Info
          </p>
        </PageHeader>
        {this.props.productInfo.map(product => (
          <OneProductInfo
            key={product._id}
            id={product._id}
            title={product.title}
            displayName={product.user.displayName}
            phoneNumber={product.user.phoneNumber}
            description={product.description}
            category={product.category}
          />
        ))}
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    productInfo: state.productInfo.productInfo,
    user: state.users.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProductInfo: (token) => dispatch(fetchProductInfo(token))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);