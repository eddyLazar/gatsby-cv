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
        sx={{ color: 'gray3', fontStyle: 'italic', mb: 'medium' }}
        variant="heading"
      >
        {period}
      </Text>
      <Text color="white" m={0} variant="lead">
        {title}
      </Text>
      <Text color="gray4" variant="lead">
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
