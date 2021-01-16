import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Details.css';
import star from '../../assets/star-rate.svg';
import comment from '../../assets/comment.png';
import { fetchProductsDetails } from '../../Store/actions/fetchActions';
import { useParams } from 'react-router';

const Details = (props) => {

    const { response, fetchProductsDetails } = props;

    const { productId } = useParams();

    useEffect(() => {
        fetchProductsDetails(productId);
    }, [fetchProductsDetails, productId]);
    console.log(response.comments)
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
                    <p classname="numberComments">2</p><img className="comment" src = {comment} alt="comment" />
                </div>
                <h1 className="price">${response.price}</h1>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat...</p> <br/>
                see more.
                <button className="btnAddCart btnCartDetails">Add to cart</button>
            </div>
            <hr className="v2" />
            <div className="commentsBox">
                Comments:
                <div className="comments">
                    {/*{response.comments.map((item => {
                        return(
                        user={item.user}
                        )
                        })
                    )} */}
                    <p>Jon Doe <br/> Excelent Product :)</p> 
                    <hr className="v3" />
                    <p>Jon Doe <br/> Excelent Product :)</p>
                    <hr className="v3" />
                    <p>Jon Doe <br/> Excelent Product :)</p>
                    <hr className="v3" />
                </div>
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