import React, { useEffect } from 'react';
import SeeMore from '../../Components/seeMoreBtn/seeMoreBtn';
import Comments from '../../Components/comments/comments';
import { connect } from 'react-redux';
import './Details.css';
import star from '../../assets/star-rate.svg';
import comment from '../../assets/comment.png';
import { fetchProductsDetails } from '../../Store/actions/fetchActions';
import { useParams } from 'react-router';
import { addProductCart } from '../../Store/actions';

const Details = (props) => {

    const { response, fetchProductsDetails } = props;

    const { productId } = useParams();

    useEffect(() => {
        fetchProductsDetails(productId);
    }, [fetchProductsDetails, productId]);
    if (!response.comments) { return <div>Loading...</div> }
    //console.log(products.productBasics);
    console.log(response.basics)

    return (
        <div className="detailsBox">
            <img className="productPic" src = {response.img} alt="productImg" />
            <div className="productDetailsCard">
                <h1>{response.name}</h1>
                <div className="starsDetails">
                    <img className="star" src = {star} alt="star" />
                    <img className="star" src = {star} alt="star" />
                    <img className="star" src = {star} alt="star" />
                    <img className="star" src = {star} alt="star" />
                    <img className="star" src = {star} alt="star" />
                    <p classname="numberComments">{response.comments.length}</p><img className="comment" src = {comment} alt="comment" />
                </div>
                <h1 className="price">${response.price}</h1>
                {response.basics? <div className="basicLabelDetails">BASICS</div> : null }
                <SeeMore completeComment = {response.description} />
                <button className="btnAddCart btnCartDetails" onClick={() => props.addProductCart(response)}>Add to cart</button>
            </div>
            <hr className="v2" />
            <div className="commentsBox">
                <Comments
                    comments={response.comments}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => { //rootreducer
    return {
        response: state.fetchR.responseDetails,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchProductsDetails: (productId) => dispatch(fetchProductsDetails(productId)),
        addProductCart: (productInfo) => dispatch(addProductCart(productInfo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);