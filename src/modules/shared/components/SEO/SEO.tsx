import Head from 'next/head';
import React from 'react';
import { EnvVariables } from 'src/modules/shared/utils/EnvironmentVariables';

type SEOProps = {
  description: string;
  title: string;
  siteTitle: string;
};

export const SEO: React.FC<SEOProps> = ({ description, title, siteTitle }) => {
  const imgUrl = EnvVariables.URL_BASE + '/seo_image.png';
  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <link rel="icon" href="/icons/favicon.svg" />
      <meta property="og:locale" content="us_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={EnvVariables.URL_BASE} />
      <meta property="og:site_name" content={`${title} | ${siteTitle}`} />

      {/* MICROSOFT APPLICATIONS */}
      <meta name="msapplication-TileImage" itemProp="image" content={imgUrl} />

      {/* FACEBOOK */}
      <meta property="og:image" itemProp="image" content={imgUrl} />
      <meta property="og:image:secure_url" itemProp="image" content={imgUrl} />
      <meta property="og:image:width" content="715" />
      <meta property="og:image:height" content="716" />
      <meta property="og:image:alt" content={description} />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={EnvVariables.URL_BASE} />
      <meta property="twitter:url" content={EnvVariables.URL_BASE} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" itemProp="image" content={imgUrl} />

      {/* WHATSAPP */}
      <meta property="og:image" itemProp="image" content={imgUrl} />
      <meta property="og:image:secure_url" itemProp="image" content={imgUrl} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="715" />
      <meta property="og:image:height" content="716" />
    </Head>
  );
};
