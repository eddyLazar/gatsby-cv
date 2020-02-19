/** @jsx jsx */
import { jsx } from 'theme-ui';
import LayoutColumn from './LayoutColumn';
import Tag from './Tag';
import { Heading, Paragraph } from './Typography';

const Skills = ({ skills = [''], langs = [''] }) => (
  <LayoutColumn>
    <Heading marginBottom={48} color="gray2">
      skills
    </Heading>
    <Paragraph marginBottom={48}>
      {skills.map((skill, i) => (
        <Tag key={i}>{skill}</Tag>
      ))}
    </Paragraph>
    <Paragraph isLead>SPOKEN LANGUAGES</Paragraph>
    <Paragraph>
      {langs.map((lang, i) => (
        <span key={i}>
          {lang}
          <br />
        </span>
      ))}
    </Paragraph>
  </LayoutColumn>
);

export default Skills;
