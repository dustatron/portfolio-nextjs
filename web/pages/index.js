import groq from 'groq';
import client from '../client';

import Header from '../components/Header';
import About from '../components/About';
import ProjectList from '../components/ProjectList';
import Contact from '../components/Contact';

export default function Home(props) {
  return (
    <div>
      <Header />
      <About />
      <ProjectList projects={props.projects} />
      <Contact />
    </div>
  );
}

Home.getInitialProps = async () => ({
  projects: await client.fetch(groq`
    *[_type == 'project']|order(publishedAt desc)
  `),
});
