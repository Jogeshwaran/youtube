import React from 'react'
import Comment from './Comment'
import CommentList from './CommentList'



const commentsData = [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
  },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Jogesh",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
          },
          {
            name: "Sanaji",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
            name: "Reva",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Subash",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Vela",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                          {
                           name: "Aswin",
                           text: "Lorem ipsum dolor sit amet, consectetur adip",
                            replies: [],
                       },
                       ],
                },
                {
                 name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
              ]            },           ],
              },
            ],     },
        ],
  },
     {
    name: "Akshay Saini",
       text: "Lorem ipsum dolor sit amet, consectetur adip",
       replies: [],
      },
     {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      
      {
        name: "Akshay Saini",
       text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ];

const CommentsContainer = () => {
  return (
    <div className='m-7 p-2'>
      <h1 className='font-bold text-2xl'>Comments : </h1>
      <CommentList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer
