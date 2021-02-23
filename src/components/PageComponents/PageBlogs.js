import React from 'react';
import styled from 'styled-components';
import SingleBlog from './SingleBlog';

const PageBlogsStyles = styled.div`
  width: 100%;
  .pb {
    width: 85%;
    margin: 0 auto;
    padding: 2rem 0 3rem 0;
    h3 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 2rem;
      color: var(--slate);
    }
    &__grid {
      display: grid;
      grid-template-columns: 1fr;
    }
    &--btn {
      width: 70%;
      margin: 0 auto;
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
    @media only screen and (min-width: 700px) {
      .pb {
        &__grid {
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 2rem;
        }
        &--btn {
          max-width: var(--btnMaxWidth);
        }
      }
    }
  }
`;

const PageBlogs = ({ Blogs }) => (
  <PageBlogsStyles>
    <div className="pb">
      <h3>Latest news from UCtel</h3>
      <div className="pb__grid">
        {Blogs.map((blog) => (
          <SingleBlog key={blog.slug.current} blog={blog} />
        ))}
      </div>
      <div className="pb--btn">
        <button className="btn btn--slate" type="button">
          <span>Read more</span>
        </button>
      </div>
    </div>
  </PageBlogsStyles>
);
export default PageBlogs;
