import React from 'react';
import { Text } from 'theme-ui';
import { About } from '../components/About';
import Contacts from '../components/Contacts';
import ExperienceCard from '../components/ExperienceCard';
import Header from '../components/Header';
import LanguageList from '../components/LanguageList';
import {
  ExperienceColumn,
  Layout,
  MainColumn,
  SkillsColumn,
} from '../components/Layout';
import SEO from '../components/seo';
import List from '../components/ui/List';
import TagList from '../components/ui/TagList';
import formatExperience from '../utils/formatExperience';

export default ({ data }) => {
  const aboutHtml = data.bio.html;

  const {
    name,
    interests = [],
    jobTitle,
    email,
    phone,
    skills,
    langs,
    socials,
    softSkills = [],
  } = data.bio.frontmatter;

  const educationItems = data.education.frontmatter.items.map(
    ({ name, city, description, dates }) => ({
      text: (
        <React.Fragment>
          {name} ({city})<br />
          {description}
        </React.Fragment>
      ),
      additional: dates,
    })
  );
  const confItems = data.confs.frontmatter.items.map(
    ({ name, description, date }) => ({
      text: (
        <React.Fragment>
          {name}
          <br />
          {description}
        </React.Fragment>
      ),
      additional: date,
    })
  );

  const experienceList = data.experience.edges || [];

  return (
    <Layout>
      <SEO />
      <MainColumn
        variant="main"
        header={<Header name={name} jobTitle={jobTitle} />}
      >
        <About html={aboutHtml} />
        <Text variant="lead" as="p" sx={{ width: 'max-content' }}>
          EDUCATION
        </Text>
        <List items={educationItems} />
        <Text variant="lead" as="p" sx={{ width: 'max-content' }}>
          CONFERENCES & COURSES
        </Text>
        <List items={confItems} />
        <Text as="p" variant="lead" sx={{ width: 'max-content' }}>
          INTERESTS
        </Text>
        <TagList tags={interests} />
        <Contacts phone={phone} email={email} {...socials} />
      </MainColumn>
      <SkillsColumn>
        <TagList tags={skills} />
        <LanguageList languages={langs} />
        <Text variant="lead" as="p" sx={{ width: 'max-content' }}>
          SOFT SKILLS
        </Text>
        <TagList tags={softSkills} />
      </SkillsColumn>
      <ExperienceColumn>
        {experienceList.map((item, index) => (
          <ExperienceCard {...formatExperience(item)} key={index} />
        ))}
      </ExperienceColumn>
    </Layout>
  );
};

// eslint-disable-next-line no-undef
export const query = graphql`
  query {
    confs: markdownRemark(fields: { sourceName: { eq: "confs" } }) {
      frontmatter {
        items {
          name
          date
          description
        }
      }
    }

    education: markdownRemark(fields: { sourceName: { eq: "education" } }) {
      frontmatter {
        items {
          name
          city
          description
          dates
        }
      }
    }
    bio: markdownRemark(fields: { sourceName: { eq: "bio" } }) {
      frontmatter {
        jobTitle
        name
        email
        phone
        skills
        softSkills
        interests
        langs
        socials {
          twitter
          facebook
          instagram
          github
          linkedin
        }
      }
      html
    }
    experience: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "experience" } } }
      sort: { order: DESC, fields: frontmatter___period }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            period
            title
            company
          }
        }
      }
    }
  }
`;
