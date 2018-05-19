import React from 'react';
import {Image, Panel} from "react-bootstrap";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

import config from '../../config';

import notFound from '../../assets/images/not-found.png';

const ProductList = props => {
  let image = notFound;

  if (props.image) {
    image = config.apiUrl + '/uploads/' + props.image;
  }

  return (
    <Panel>
      <Panel.Body>
        <Image
          style={{width: '100px', marginRight: '10px'}}
          src={image}
          thumbnail
        />
        <Link to={'/products/' + props.id}>
          {props.title}
        </Link>
        <strong style={{marginLeft: '10px'}}>
          {props.price} KGS
        </strong>
      </Panel.Body>
    </Panel>
  );
};

ProductList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
  category: PropTypes.string
};

export default ProductList;