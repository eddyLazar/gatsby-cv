/** @jsx jsx */
import { Box, jsx, Text, useThemeUI } from 'theme-ui';

const ExperienceCard = ({
  company = '',
  title = '',
  period = '',
  html = '',
}) => {
  const { theme } = useThemeUI();
  return (
    <Box mb="large">
      <Text
        as="p"
        sx={{
          color: 'gray3',
          fontStyle: 'italic',
          mb: 'medium',
          width: 'max-content',
        }}
        variant="heading"
      >
        {period}
      </Text>
      <Text color="white" m={0} variant="lead" as="p">
        {title}
      </Text>
      <Text color="gray4" variant="lead" as="p">
        {company}
      </Text>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        sx={{
          '& > p': {
            ...theme.text.paragraph,
            color: 'white',
          },
          '& a': {
            ...theme.text.paragraph,
            color: 'inherit!important',
          },
        }}
      />
    </Box>
  );
};

export default ExperienceCard;
