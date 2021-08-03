import * as React from 'react'
import {Link} from 'gatsby'
import {listItem,posts} from '../layout.module.css'
const Article=({header,data,category})=>{
return(<div
    className={posts}><h1>{header}</h1>
    <ul>
      {data.allMdx.nodes
        .filter(
          (destination) =>
            destination.frontmatter.category === category
        )
        .map((destination) => {
          return (
            <li key={destination.id}>
              <Link
                className={listItem}
                to={`/articles/${destination.slug}`}
              >
                {destination.frontmatter.title}
              </Link>
            </li>
          );
        })}
    </ul></div>);

}

export default Article;