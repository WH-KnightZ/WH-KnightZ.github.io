import { styled } from '@material-ui/core/styles';
import { Toolbar, Tooltip, IconButton, OutlinedInput, InputAdornment } from '@material-ui/core';
import { MaterialIcon } from 'components';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3),
}));

const SearchStyle = styled(OutlinedInput)(({ theme }: any) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&.Mui-focused': { width: 320, boxShadow: theme.customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`,
  },
}));

interface Props {
  // numSelected: PropTypes.number,
  searchValue?: string;
  onSearch: Function;
}

const ListToolbar: React.FC<Props> = ({ searchValue, onSearch }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState(searchValue || '');

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') onSearch(search);
  };

  return (
    <RootStyle
    // sx={{
    //   ...(0 > 0 && {
    //     color: 'primary.main',
    //     bgcolor: 'primary.lighter',
    //   }),
    // }}
    >
      {
        // 0 > 0 ? (
        //   <Typography component="div" variant="subtitle1">
        //     {0} selected
        //   </Typography>
        // ) : (
        <SearchStyle
          value={search}
          onChange={(e: any) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t('search') + ' ...'}
          startAdornment={
            <InputAdornment position="start">
              <MaterialIcon icon="search" color="#aaa" />
            </InputAdornment>
          }
        />
        // )
      }

      {
        // 0 > 0 ? (
        //   <Tooltip title="Delete">
        //     <IconButton>
        //       <MaterialIcon icon="delete" />
        //     </IconButton>
        //   </Tooltip>
        // ) : (
        <Tooltip title={t('filter') || ''}>
          <IconButton>
            <MaterialIcon icon="filter_list" />
          </IconButton>
        </Tooltip>
        // )
      }
    </RootStyle>
  );
};

export default ListToolbar;
