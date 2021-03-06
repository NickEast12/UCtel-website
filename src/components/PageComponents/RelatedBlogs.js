import React from 'react';
import styled from 'styled-components';
import SingleBlog from './SingleBlog';

const RelatedBlogsStyles = styled.section`
  width: 100%;
  .empty {
    display: none;
  }
  .related {
    width: 90%;
    margin: 0 auto;
    padding: 1rem 0;
    max-width: 1100px;
    > h4 {
      font-size: 1.75rem;
      text-align: center;
      padding-bottom: 2rem;
    }
    @media only screen and (min-width: 414px) {
      width: 85%;
    }
    @media only screen and (min-width: 701px) {
      padding-top: 2rem;
      &__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 2rem 0;
        grid-gap: 1.5rem;
      }
    }
  }
`;
const RelatedBlogs = ({ relatedBlogsData }) => {
  const data = relatedBlogsData.nodes;
  return (
    <RelatedBlogsStyles>
      <div className={data.length === 0 ? 'empty' : 'related'}>
        <h4>Fancy reading more?</h4>
        <div className="related__grid">
          {data.map((blog) => (
            <SingleBlog blog={blog} key={blog.title} />
          ))}
        </div>
      </div>
    </RelatedBlogsStyles>
  );
};

export default RelatedBlogs;
