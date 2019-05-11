import React from "react";
import Helmet from "react-helmet";
import { string, bool } from "prop-types";

// utils
import config from "../../../../data";

const schemaOrgJSONLD = ({
  url,
  title,
  siteTitleAlt,
  isPost,
  image,
  description
}) => [
  {
    "@context": "http://schema.org",
    "@type": "WebSite",
    url,
    name: title,
    alternateName: siteTitleAlt || ""
  },
  isPost
    ? {
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": url,
            name: title,
            image
          }
        }
      ]
    }
    : null,
  isPost
    ? {
      "@context": "http://schema.org",
      "@type": "BlogPosting",
      url,
      name: title,
      alternateName: siteTitleAlt || "",
      headline: title,
      image: {
        "@type": "ImageObject",
        url: image
      },
      description
    }
    : null
];

const SEO = ({ url, title, description, image, siteTitleAlt, isPost }) => (
  <Helmet>
    <title>{title}</title>

    {/* General tags */}
    <meta name="description" content={description} />
    <meta name="image" content={image} />

    {/* Schema.org tags */}
    <script type="application/ld+json">
      {JSON.stringify(schemaOrgJSONLD(url, title, siteTitleAlt, isPost))}
    </script>

    {/* OpenGraph tags */}
    <meta property="og:url" content={url} />
    {isPost ? (
      <meta property="og:type" content="article" />
    ) : (
      <meta property="og:type" content="website" />
    )}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta
      property="fb:app_id"
      content={config.siteFBAppID ? config.siteFBAppID : ""}
    />

    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:creator"
      content={config.twitter_username ? config.twitter_username : ""}
    />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Helmet>
);

SEO.propTypes = {
  url: string.isRequired,
  title: string,
  description: string.isRequired,
  image: string.isRequired,
  siteTitleAlt: string.isRequired,
  isPost: bool.isRequired
};

SEO.defaultProps = {
  title: config.title
};

export default SEO;
