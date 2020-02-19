import React from 'react';
import { Box, Flex } from 'theme-ui';
import Bio from '../components/Bio';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Skills from '../components/Skills';
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
  } = data.bio.frontmatter;

  const educationItems = data.education.frontmatter.items;
  const confItems = data.confs.frontmatter.items;

  const experience = data.experience;

  return (
    <Flex sx={{ height: '100%', overflow: 'hidden' }}>
      <Box variant="layout.main">
        <Header name={name} jobTitle={jobTitle} />
        <Bio
          about={aboutHtml}
          educationList={educationItems}
          confsList={confItems}
          interests={interests}
          email={email}
          phone={phone}
        />
      </Box>
      <Box variant="layout.skills">
        <Skills skills={skills} langs={langs} />
      </Box>
      <Box variant="layout.experience">
        <Experience experience={formatExperience(experience)} />
      </Box>
    </Flex>
  );
};

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
        interests
        langs
      }
      html
    }
    experience: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "experience" } } }
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
