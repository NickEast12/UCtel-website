import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Bready = styled.div`
  width: 100%;
  .breadcrumb {
    width: 90%;
    margin: 0 auto;
    max-width: 1100px;
    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      li {
      }
      li a {
        display: flex;
        margin-right: 5px;
      }
      .sep {
        margin: 0 0.5rem;
      }
    }
    @media only screen and (min-width: 375px) {
      /* width: 85%; */
    }
  }
`;

const Bread = ({ breaddata }) => {
  const elementsNew = [];
  breaddata.crumbs.forEach(createdBread);
  function createdBread(item) {
    const newlast = item.crumbLabel.replace(/-/g, ' ');
    elementsNew.push({ pathname: item.pathname, crumlabel: newlast });
  }
  // console.log(elementsNew)

  return (
    <>
      <Bready>
        <div className="breadcrumb">
          <ul>
            {elementsNew.map((value, index) => (
              <li key={index} className="breadcrumb__wrapper__inner">
                <Link key={index} to={`${value.pathname}`}>
                  {value.crumlabel} <span className="sep">/</span>{' '}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Bready>
    </>
  );
};

export default Bread;
