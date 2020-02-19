/** @jsx jsx */
import { jsx, Link } from 'theme-ui';
import LayoutColumn from '../LayoutColumn';
import Tag from '../Tag';
import { Paragraph } from '../Typography';
import { Year } from './Bio.style';

const Bio = ({
  about = '',
  educationList = [emptyEducationItem],
  confsList = [emptyConfItem],
  interests = [''],
  email = '',
  phone = '',
}) => (
  <LayoutColumn>
    <Paragraph dangerouslySetInnerHTML={{ __html: about }} />
    <Paragraph isLead>education</Paragraph>
    {educationList.map(({ name, city, description, dates }) => (
      <Paragraph key={name}>
        {name} ({city})<br />
        {description}
        <br />
        <Year>{dates}</Year>
      </Paragraph>
    ))}
    <Paragraph isLead>CONFERENCES & COURSES</Paragraph>
    {confsList.map(({ name, description, date }) => (
      <Paragraph key={name}>
        {name}
        <br />
        {description}
        <br />
        <Year>{date}</Year>
      </Paragraph>
    ))}
    <Paragraph isLead>interests</Paragraph>
    <Paragraph>
      {interests.map(name => (
        <Tag key={name}>{name}</Tag>
      ))}
    </Paragraph>
    <Paragraph isLead>contacts</Paragraph>
    <Paragraph>
      <Link href={`mailto:${email}`}>{email}</Link>
      <br />
      <Link href={`tel:${phone}`}>{phone}</Link>
    </Paragraph>
  </LayoutColumn>
);

export default Bio;

const emptyEducationItem = {
  name: '',
  city: '',
  description: '',
  dates: '',
};

const emptyConfItem = {
  name: '',
  description: '',
  date: '',
};
