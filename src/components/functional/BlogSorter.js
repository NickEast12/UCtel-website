import { graphql, Link, navigate, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const BlogSorterStyles = styled.div`
  width: 100%;
  .bs {
    background-color: var(--lightBlue);
    width: 90%;
    margin: 0 auto;
    border-radius: 4.5px;
    padding: 1.5rem 1rem;
    max-width: 1100px;
    h6 {
      color: var(--white);
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;

      li {
        background-color: var(--white);
        margin: 0.25rem 0.5rem 0.25rem 0;
        color: var(--slate);
        padding: 0.5rem 1rem;
        flex-grow: 1;
        text-align: center;
        border-radius: 4.5px;
      }
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
  }
  @media only screen and (min-width: 375px) {
    width: 100%;
    margin: 0 auto;
  }
  @media only screen and (min-width: 768px) {
    .bs {
      width: 90%;
      display: flex;
      padding: 1rem;
      align-items: center;
      h6 {
        margin-bottom: 0;
        margin-right: 25px;
      }
      ul {
        justify-content: space-between;
        flex-grow: 2;
        li {
          background-color: var(--lightBlue);
          color: var(--white);
          padding: 0;
          margin: 0;

          border-radius: 4.5px;
        }
      }
    }
  }
`;
const BlogSorter = () => {
  const data = useStaticQuery(graphql`
    query {
      catergory: allSanityCategory {
        nodes {
          title
          id
          slug {
            current
          }
        }
      }
    }
  `);
  const categorys = data.catergory.nodes;
  return (
    <BlogSorterStyles>
      <div className="bs">
        <h6>Categories:</h6>
        <ul>
          <li>
            <Link to="/blogs">All</Link>
          </li>
          {categorys.map((cat) => (
            <li key={cat.id}>
              <Link to={`/blogs/${cat.slug.current}`}>{cat.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </BlogSorterStyles>
  );
};

export default BlogSorter;
