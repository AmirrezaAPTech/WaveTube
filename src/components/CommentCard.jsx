import React from 'react';
import {getTimeAgo} from '../utils/timeAgo'

const CommentCard = ({ comments }) => {
    console.log(comments)
  return (
    <div className='flex flex-col gap-9 mt-5'>
      {comments && comments.items && comments.items.length > 0 ?
        comments.items.map(comment => ( comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl &&
          <div className='flex items-start gap-3'>
            <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="channelProfile" className='w-[50px] h-[50px] rounded-full' />
            <div>
            <p><span className='text-[#F1F1F1] font-semibold pr-2'>{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</span><span className='text-[#AAAAAA]'>{getTimeAgo(comment?.snippet?.topLevelComment?.snippet?.publishedAt)}</span></p>
            <p className='text-[#F1F1F1]'>{comment?.snippet?.topLevelComment?.snippet?.textDisplay}</p>

            </div>
          </div>
        )) : ""
      }
    </div>
  );
}

export default CommentCard;
