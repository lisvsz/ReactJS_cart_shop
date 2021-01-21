import React, { useState } from 'react';
import './seeMoreBtn.css';

const SeeMore = (props) => {

    let maxCharacterCount = 231;

    const { completeComment } = props;
    console.log(completeComment);

    const [isTruncated, setIsTruncated] = useState(true);

    const resultString = isTruncated && completeComment? completeComment.slice(0, maxCharacterCount) + '...' : completeComment;

    function toggleIsTruncated () {
        setIsTruncated(!isTruncated);
    }

    return (
        <p className="description">
            {resultString}<br/>
            <span onClick={toggleIsTruncated} className="seeMore">{isTruncated? "See more." : "Read less."} </span>
        </p>
    )
    
}

export default SeeMore;