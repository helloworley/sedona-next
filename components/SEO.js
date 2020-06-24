// react
import React from 'react';
import { NextSeo } from 'next-seo';

const SEO = props => {

  return(  
    <NextSeo
      title="Sedona"
      description="A short description goes here."
      openGraph={{
        url: `https://sedo.na/`,
        title: props.title,
        description: props.description,
        images: [
          {
            url: props.image,
            width: 1200,
            height: 675,
            alt: props.description,
          },
        ],
        site_name: 'Sedona',
      }}
      twitter={{
        // handle: '@handle',
        // site: '@site',
        cardType: 'summary_large_image',
      }}
    />
    
  )};

export default SEO;

