import React from 'react';
import styled from 'styled-components';
import SingleBlog from './SingleBlog';

const RelatedBlogsStyles = styled.div`
  width: 100%;
  .empty {
    display: none;
  }
  .related {
    width: 90%;
    margin: 0 auto;
    padding: 1rem 0;
    > h4 {
      font-size: 1.75rem;
      text-align: center;
      padding-bottom: 2rem;
    }
    @media only screen and (min-width: 414px) {
      width: 85%;
    }
    @media only screen and (min-width: 701px) {
      width: 80%;
      &__grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
`;
const RelatedBlogs = ({ relatedBlogsData }) => {
  const data = relatedBlogsData.nodes;
  console.log(data);
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
