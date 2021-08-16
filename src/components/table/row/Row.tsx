import { TableCell, TableRow } from '@material-ui/core';
import { MaxLine } from 'components';
import { DEFAULT_AVATAR } from 'extensions/constants';
import moment from 'moment';
import React from 'react';
import './Row.scss';

export type RowType = {
  [key: string]: any;
};

export type TableFieldsType = {
  [key: string]: {
    label?: string;
    style?: any;
    className?: string;
    type?: 'date' | 'avatar' | 'text';
    renderContent?: (item: any) => any;
    disableMaxLine?: boolean;
    defaultTitle?: boolean;
  };
};

interface Props {
  fields: TableFieldsType;
  row: RowType;
}

const Row: React.FC<Props> = (props) => {
  const { row, fields } = props;

  return (
    <TableRow>
      {Object.keys(fields).map((cell: string, index: number) => {
        const columnName = cell;
        const field = fields[columnName];
        let newContent = row[columnName];
        let newRenderContent;
        if (field.type === 'date')
          newRenderContent = !newContent ? '-' : moment(newContent * 1000).format('DD/MM/YYYY');
        else if (field.type === 'avatar') {
          newRenderContent = <img src={newContent || DEFAULT_AVATAR} alt="content" className="Row-avatar" />;
        } else {
          if (field.renderContent) newRenderContent = field.renderContent(row);
          else newRenderContent = newContent;
        }
        return (
          <TableCell key={index} style={field.style}>
            {field.disableMaxLine ? (
              newRenderContent
            ) : (
              <MaxLine title={field.defaultTitle ? newContent : undefined} text={newRenderContent} />
            )}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default Row;
