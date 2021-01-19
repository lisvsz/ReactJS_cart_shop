import React from 'react';
import './comments.css';

const Comments = (props) => {
    const { comments } = props;
    let commentsToRender = [];
    if (comments) {
        commentsToRender = comments;
    }

    return (
        <div>
            <p>Comments:</p><br/>
            <div>
                {commentsToRender.map((comment) => {
                    return (
                        <div className='commentContainer'>
                            <p className='userComment'>{comment.user}</p>
                            <p  className='commentFromUser'>{comment.comment}</p>
                            <hr className='v3'></hr>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default Comments;