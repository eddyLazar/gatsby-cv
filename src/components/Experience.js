/** @jsx jsx */
import { jsx } from 'theme-ui';
import LayoutColumn from './LayoutColumn';
import { Heading, Paragraph } from './Typography';

const Experience = ({ experience = [defaultItem] }) => (
  <LayoutColumn>
    <Heading marginBottom={48} color="gray4">
      experience
    </Heading>
    {experience.map(({ period, title, company, html }) => {
      console.log(html);

      return (
        <div key={period}>
          <Heading sx={{ color: 'gray3', fontStyle: 'italic' }}>
            {period}
          </Heading>
          <Paragraph color="white" m={0}>
            {title}
          </Paragraph>
          <Paragraph color="gray4">{company}</Paragraph>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            sx={{ color: 'white', fontSize: 1, lineHeight: '20px' }}
          />
        </div>
      );
    })}
  </LayoutColumn>
);

const defaultItem = {
  company: '',
  title: '',
  period: '',
  html: '',
};

export default Experience;
