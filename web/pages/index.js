import groq from "groq";
import client from "../client";

import Header from "../components/Header";
import About from "../components/About";
import ProjectList from "../components/ProjectList";
import Contact from "../components/Contact";

export default function Home(props) {
  const { projects, categories, sections } = props;
  console.log("section", sections);
  return (
    <div>
      <Header
        content={sections.find((item) => item.slug.current === "header")}
      />
      <About content={sections.find((item) => item.slug.current === "about")} />
      <ProjectList projects={projects} categories={categories} />
      <Contact
        content={sections.find((item) => item.slug.current === "contact")}
      />
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
  sections: await client.fetch(groq`*[_type == 'section']`),
});
