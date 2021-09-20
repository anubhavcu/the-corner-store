import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../components/Rating';
import { PRODUCT_DETAILS_REQUEST } from '../redux/constants/productConstants';
import {
  listProductDetails,
  removeSeletedProduct,
} from '../redux/actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  console.log(productDetails);

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));

    // performing a cleanup here, so when we go back from details page, productDetials state should go
    // back to initial value, else when we click on new product , old product details will be show until
    // that new action is completed and new state is set. so there will be a slight glitch of old product
    return () => {
      dispatch(removeSeletedProduct());
    };
  }, [match, dispatch]);

  return (
    <div>
      <Link className='btn btn-dark my-3 customHover' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>{product.name} </h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price: </Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status: </Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className='col-12 btn-secondary customHover'
                    type='button'
                    disabled={product.countInStock === 0}
                  >
                    {product.countInStock === 0
                      ? 'Not available'
                      : 'Add to cart'}
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductScreen;

// btn-block is depreciated , col-12 is used instead
