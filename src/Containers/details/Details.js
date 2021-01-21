import React, { useEffect } from 'react';
import SeeMore from '../../Components/seeMoreBtn/seeMoreBtn';
import Comments from '../../Components/comments/comments';
import { connect } from 'react-redux';
import './Details.css';
import star from '../../assets/star-rate.svg';
import comment from '../../assets/comment.png';
import { fetchProductsDetails } from '../../Store/actions/fetchActions';
import { useParams } from 'react-router';

const Details = (props) => {

    const { response, fetchProductsDetails, productBasic } = props;

    const { productId } = useParams();

    useEffect(() => {
        fetchProductsDetails(productId);
    }, [fetchProductsDetails, productId]);
    if (!response.comments) { return <div>Loading...</div> }
    console.log(response.description);
    console.log(response.comments);
    console.log(response);

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
                {productBasic? <div className="basicLabelDetails">BASIC</div> : <div className="noBasicLabel"></div>} 
                <SeeMore completeComment = {response.description} />
                <button className="btnAddCart btnCartDetails" onClick={props.productAdded}>Add to cart</button> {/*no funciona*/}
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);