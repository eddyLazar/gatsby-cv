import { useThemeUI } from 'theme-ui';
import { useWindowSize } from './useWindowSize';

export default () => {
  const { width } = useWindowSize();
  const { theme } = useThemeUI();
  return {
    ...theme,
    spacebar: width / (12 * 4),
  };
};
