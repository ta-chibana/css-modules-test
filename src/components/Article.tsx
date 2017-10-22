import React from 'react'
import styles from '../stylesheets/index.css'
import other from '../stylesheets/other.css'

interface IArticleProps {
  title: string
}

const Article = (props: IArticleProps) => {
  console.log(styles)
  return (
    <div>
      <div className={`${styles.pageTitle} ${other.titleSize}`}>
        {props.title}
      </div>
      <div className={styles.bemStyleClass}>
        test css modules
      </div>
    </div>
  )
}

export default Article
