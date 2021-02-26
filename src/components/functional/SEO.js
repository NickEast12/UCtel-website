import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';

export default function SEO({ children, location, description, title, img }) {
  const { pathname } = useLocation();
  const { site, settings } = useStaticQuery(graphql`
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
      settings: allSanitySiteSettings {
        nodes {
          openGraph {
            title
            description
            image {
              alt
              asset {
                path
              }
            }
          }
        }
      }
    }
  `);
  const data = settings.nodes[0];
  console.log(data);
  return (
    <Helmet>
      <html lang="en" />
      <title>{`${title || data.openGraph.title}`}</title>
      <meta
        name="description"
        content={`${description || data.openGraph.description}`}
      />
      <link rel="canonical" href={`${site.siteMetadata.siteUrl}${pathname}`} />
      <link rel="icon" href={`${img || data.openGraph.image.asset.path}`} />
      <link
        rel="alternate icon"
        href={`${img || data.openGraph.image.asset.path}`}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />

      <meta
        property="og:url"
        content={`${site.siteMetadata.siteUrl}${pathname}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:domain"
        content={`${site.siteMetadata.siteUrl}${pathname}`}
      />
      <meta
        property="twitter:url"
        content={`${site.siteMetadata.siteUrl}${pathname}`}
      />
      <meta name="twitter:creator" content={site.siteMetadata.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  );
}

// titleTemplate={`%s - ${site.siteMetadata.title}`}
