import React from 'react';
import PropTypes from 'prop-types';
import {Image, Panel} from "react-bootstrap";

import config from "../../config";
import notFound from '../../assets/images/not-found.png';

const OneProductInfo = props => {

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
        <strong>{props.title}</strong>
        <p>{props.description}</p>
        <p>{props.category}</p>
        <p>{props.user.displayName}</p>
        <p>{props.user.phoneNumber}</p>

      </Panel.Body>
    </Panel>
  )
};

OneProductInfo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired
};

export default OneProductInfo;