import {
  Card,
  TableContainer,
  Table as TableWrapper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  CircularProgress,
} from '@material-ui/core';
import Scrollbar from 'components/scrollbar/Scrollbar';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ListToolbar from '../listToolbar/ListToolbar';
import Row, { RowType, TableFieldsType } from '../row/Row';
import SearchNotFound from '../searchNotFound/SearchNotFound';
import './DataTable.scss';

interface Props {
  data: RowType[];
  fields: TableFieldsType;
  loading?: boolean;
  toolbar?: {
    searchValue?: string;
    onSearch?: any;
  };
  pagination?: {
    count: number;
    rowsPerPage: number;
    page: number;
    onPageChange?: any;
    onRowsPerPageChange?: any;
  };
}

const DataTable: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const showToolbar = !!props.toolbar;
  const {
    data,
    fields,
    loading,
    toolbar = { searchValue: '', onSearch: () => {} },
    pagination = { count: 0, rowsPerPage: 0, page: 0, onPageChange: () => {}, onRowsPerPageChange: () => {} },
  } = props;
  const { searchValue, onSearch } = toolbar;
  const { count, rowsPerPage, page, onPageChange, onRowsPerPageChange } = pagination;

  const columns = Object.keys(fields).map((item) => ({ key: item, label: fields[item].label }));

  const renderLoading = (
    <TableRow className={`DataTable-loading${data.length > 0 ? ' has-items' : ' no-items'}`}>
      <TableCell align="center" colSpan={columns.length}>
        <CircularProgress size={28} color="inherit" />
      </TableCell>
    </TableRow>
  );

  return (
    <Card>
      {showToolbar && <ListToolbar searchValue={searchValue} onSearch={onSearch} />}
      <Scrollbar>
        <TableContainer sx={{ minWidth: 800 }}>
          <TableWrapper>
            <TableHead>
              <TableRow>
                {/* <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={numSelected > 0 && numSelected < rowCount}
                    checked={rowCount > 0 && numSelected === rowCount}
                    onChange={handleSelectAllClick}
                  />
                </TableCell> */}
                {columns.map(({ key, label }) => (
                  <TableCell key={key} style={fields[key].style}>
                    {t(label || key)}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
          </TableWrapper>
          <TableWrapper className="DataTable">
            <TableBody>
              {data.length > 0 ? (
                <>
                  {data.map((item, index) => (
                    <Row key={item.id || index} fields={fields} row={item} />
                  ))}
                  {loading && renderLoading}
                </>
              ) : !loading ? (
                <TableRow>
                  <TableCell align="center" colSpan={columns.length} sx={{ py: 5 }}>
                    <SearchNotFound searchQuery={toolbar?.searchValue || ''} />
                  </TableCell>
                </TableRow>
              ) : (
                renderLoading
              )}
            </TableBody>
          </TableWrapper>
        </TableContainer>
      </Scrollbar>

      {count > 0 && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          labelDisplayedRows={({ from, to, count }: any) => `${from}-${to} ${t('of')} ${count}`}
          labelRowsPerPage={t('rows_per_page')}
        />
      )}
    </Card>
  );
};

export default DataTable;
