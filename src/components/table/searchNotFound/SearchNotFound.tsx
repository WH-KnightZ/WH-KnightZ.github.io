import { Paper, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

interface Props {
  searchQuery: string;
}

const SearchNotFound: React.FC<Props> = ({ searchQuery = '', ...other }) => {
  const { t } = useTranslation();

  return (
    <Paper {...other}>
      <Typography gutterBottom align="center" variant="subtitle1">
        {t('not_found')}
      </Typography>
      <Typography variant="body2" align="center">
        {t('no_results_found_for')} &nbsp;
        <strong>&quot;{searchQuery}&quot;</strong>. {t('check_keyword')}.
      </Typography>
    </Paper>
  );
};

export default SearchNotFound;
