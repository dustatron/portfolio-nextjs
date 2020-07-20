import client from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import groq from 'groq';

const project = (props) => {
  const {
    title = 'Missing title',
    subtitle = 'Missing SubTitle',
    categories,
    imageMain,
    imageSub,
    details = [],
    hurdles = [],
  } = props;
  const urlFor = (source) => {
    return imageUrlBuilder(client).image(source);
  };
  return (
    <div>
      <h1>Project</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <BlockContent
        blocks={details}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
      <h3>Hurdles</h3>
      <BlockContent
        blocks={hurdles}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
      {categories && (
        <ul>
          Technologies
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )}
      {imageMain && (
        <div>
          <img src={urlFor(imageMain)} alt='screen shot' />
        </div>
      )}
      {imageSub && (
        <div>
          <img src={urlFor(imageSub).width(150).url()} alt='screen shot' />
        </div>
      )}
    </div>
  );
};

const query = groq`
    *[_type == "project" && slug.current == $slug][0]{
      title,
      subtitle,
      "categories": categories[]->title,
      "imageMain": mainImage,
      "imageSub": subImage,
      details,
      hurdles
    }
`;

project.getInitialProps = async function (context) {
  const { slug = ' ' } = context.query;
  return await client.fetch(query, { slug });
};

export default project;
