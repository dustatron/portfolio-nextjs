import groq from 'groq';
import client from '../client';

import Header from '../components/Header';
import About from '../components/About';
import ProjectList from '../components/ProjectList';
import Contact from '../components/Contact';

export default function Home(props) {
  const { projects, categories, aboutSection } = props;
  return (
    <div>
      <Header />
      <About content={aboutSection} />
      <ProjectList projects={projects} categories={categories} />
      <Contact />
    </div>
  );
}

Home.getInitialProps = async () => ({
  projects: await client.fetch(groq`
    *[_type == 'project']|order(publishedAt desc)
  `),
  categories: await client.fetch(groq`
    *[_type == 'category']|order(order asc)
  `),
  aboutSection: await client.fetch(groq`
    *[_type == 'section' && slug.current == 'about'][0]
  `),
});
