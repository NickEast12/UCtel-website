import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const SingleBlogStyles = styled.article`
  width: 100%;
  margin: 0 0 3.5rem 0;
  /* border: solid 1px #d8d8d8; */
  box-shadow: 0 1.7778rem 1.6667rem rgb(10 10 10 / 10%);
  border-radius: 4.5px;
  .sb--img {
    /* object-fit: fill !important; */
    .gatsby-image-wrapper {
      height: 14.5rem;
      border-top-left-radius: 4.5px;
      border-top-right-radius: 4.5px;
      /* font-family: 'object-fit:cover';
      -o-object-fit: cover; */
      img {
        object-fit: fill !important;
      }
    }
  }
  .sb--content {
    padding: 0.5rem 0;
    width: 90%;
    margin: 0 auto;
  }
  .sb--data {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    h5 {
      color: var(--lightBlue);
      font-size: 0.9rem;
    }
    p {
      text-transform: uppercase;
      font-size: 0.9rem;
    }
  }
  h4 {
    text-align: left;
    font-size: 1.5rem;
    padding-bottom: 0.85rem;
  }
  p {
  }
  .author {
    display: flex;
    padding: 1rem 0;
    &--img {
      .gatsby-image-wrapper {
        border-radius: 50%;
        width: 50px;
        height: 50px;
      }
    }
    &--info {
      margin-left: 10px;
      margin-top: 4px;

      p {
        color: var(--lightBlue);
        font-size: 1rem;
        font-family: Gellix-Medium;
      }
      span {
        font-size: 1rem;
      }
    }
    @media only screen and (min-width: 768px) {
      &--img {
        .gatsby-image-wrapper {
          width: 55px;
          height: 55px;
        }
      }
      &--info {
        margin-top: 5px;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;
const SingleBlog = ({ blog }) => {
  const cat = blog.categories;
  const { authors } = blog;
  return (
    <SingleBlogStyles>
      <Link to={`/blogs/${blog.slug.current}`}>
        <div className="sb--img">
          <Img fluid={blog.cardImage.asset.fluid} alt={blog.mainImage.alt} />
        </div>
        <div className="sb--content">
          <div className="sb--data">
            {cat.map((category) => (
              <h5 key={category.title}>{category.title}</h5>
            ))}
            <p className="read-time">{blog.readingTimeInMinutes} Min Read</p>
          </div>
          <h4>{blog.title}</h4>
          <p>{blog.excerpt}</p>
          {authors.map((aut) => (
            <div className="author" key={aut.author.name}>
              <div className="author--img">
                <Img
                  fluid={aut.author.image.asset.fluid}
                  alt={aut.author.image.asset.alt}
                />
              </div>
              <div className="author--info">
                <p>{aut.author.name}</p>
                <span>{blog.publishedAt}</span>
              </div>
            </div>
          ))}
        </div>
      </Link>
    </SingleBlogStyles>
  );
};

export default SingleBlog;
