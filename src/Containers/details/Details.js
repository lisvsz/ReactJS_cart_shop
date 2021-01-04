import React from 'react';
import './Details.css';
import coffee from '../../assets/coffee.jpg';
import star from '../../assets/star-rate.svg';
import comment from '../../assets/comment.png';

const Details = () => {
    return (
        <div className="detailsBox">
            <img className="productPic" src = {coffee} alt="coffee" />
            <div className="productDetailsCard">
                <h1>Coffee Maker</h1>
                <div className="starsDetails">
                    <img className="star" src = {star} alt="star" />
                    <img className="star" src = {star} alt="star" />
                    <img className="star" src = {star} alt="star" />
                    <img className="star" src = {star} alt="star" />
                    <img className="star" src = {star} alt="star" />
                    <p classname="numberComments">2</p><img className="comment" src = {comment} alt="comment" />
                </div>
                <h1 className="price">$105</h1>
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

export default Details;