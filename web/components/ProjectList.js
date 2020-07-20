import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';

const ProjectList = (props) => {
  const { projects = [] } = props;
  const urlFor = (source) => {
    return imageUrlBuilder(client).image(source);
  };
  return (
    <div style={{ fontSize: '1.6rem' }}>
      <h1>project list</h1>
      <h3>{projects.length}</h3>
      {projects.map(
        ({ _id, title = '', slug = '', _udatedAt = '', mainImage }) => (
          <div className='card' key={_id}>
            <Link href='/project/[slug]' as={`/project/${slug.current}`}>
              <a>
                {title}
                <img src={urlFor(mainImage)} alt='screen shot' />
              </a>
            </Link>
          </div>
        )
      )}
    </div>
  );
};

export default ProjectList;
