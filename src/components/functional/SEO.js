import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { imageUrlFor } from '../../utils/image-url';
import { buildImageObj } from '../../utils/helpers';

export default function SEO({ children, location, description, title, img }) {
  const { pathname } = useLocation();
  const { site, data } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitter
          siteUrl
          image
        }
      }
      data: allSanitySiteSettings {
        nodes {
          title
          openGraph {
            title
            description
            image {
              asset {
                url
              }
            }
          }
        }
      }
    }
  `);
  const settings = data.nodes[0];
  console.log(settings);
  // const image = imageUrlFor(buildImageObj(settings.openGraph.image)).width(200);

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${site.siteMetadata.siteUrl}${pathname}`} />
      <link rel="icon" href="/favicon.png" />
      <link rel="alternate icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />

      <meta
        property="og:url"
        content={`${site.siteMetadata.siteUrl}${pathname}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || settings.openGraph.title} />
      <meta
        property="og:description"
        content={title || settings.openGraph.description}
      />
      <meta
        property="og:image"
        content={img || settings.openGraph.image.asset.url}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="sortedpropertyservices.co.uk" />
      <meta
        property="twitter:url"
        content={`${site.siteMetadata.siteUrl}${pathname}`}
      />
      <meta name="twitter:creator" content={site.siteMetadata.twitter} />
      <meta name="twitter:title" content={title || settings.openGraph.title} />
      <meta
        name="twitter:description"
        content={title || settings.openGraph.description}
      />
      <meta
        name="twitter:image"
        content={img || settings.openGraph.image.asset.url}
      />
    </Helmet>
  );
}

// titleTemplate={`%s - ${site.siteMetadata.title}`}
