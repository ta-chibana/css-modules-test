import React from 'react'
import * as styles from '../stylesheets/index.css'
import * as other from '../stylesheets/other.css'

interface IArticleProps {
  title: string
}

const Article = (props: IArticleProps) => {
  return (
    <div className={`${styles.pageTitle} ${other.titleSize}`}>
      {props.title}
    </div>
  )
}

export default Article
