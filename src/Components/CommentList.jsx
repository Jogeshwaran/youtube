// here we are passing the list of comments data and for each comment we get from the list 
//we are displaying using the comment component and recrusing through the list


import React from 'react'
import Comment from './Comment'

const CommentList = ({comments}) => {
  return (
    <div>
      {comments.map((comment,i) => 
      <div  key={i}>
          { console.log(comment.replies)}
        <Comment  data = {comment}/>
        {/* //below comment reply should come 
            replies are just individual comments 
        */}
        <div className='pl-5 border border-l-black ml-5'>
        {/* recursing in the component
            basically what is replies -> multiple comments shown under orginal comments
            the props we pass in as replies
            because replies also has the name comment in the object so the comment component will loop through the 
            replies and renders on the page
        */}
        <CommentList comments={comment.replies} />
        </div>

        </div>
       
      )}
    </div>
  )
}

export default CommentList
