import React from 'react'

interface IArticleProps {
  title: string
}

const Article = (props: IArticleProps) => {
  return (
    <div>
      {props.title}
    </div>
  )
}

export default Article
