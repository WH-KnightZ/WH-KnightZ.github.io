import { useRef, useState } from 'react';
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@material-ui/core';
import { MaterialIcon } from 'components';
import { useTranslation } from 'react-i18next';

interface Props {
  onEdit: any;
  onDelete: any;
}

const MoreMenu: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const { onEdit, onDelete } = props;

  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleEdit = () => {
    onEdit();
    setIsOpen(false);
  };

  const handleDelete = () => {
    onDelete();
    setIsOpen(false);
  };

  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <MaterialIcon icon="more_vert" />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={handleEdit} sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <MaterialIcon icon="edit" />
          </ListItemIcon>
          <ListItemText primary={t('edit')} primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
        <MenuItem onClick={handleDelete} sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <MaterialIcon icon="delete" />
          </ListItemIcon>
          <ListItemText primary={t('delete')} primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
      </Menu>
    </>
  );
};

export default MoreMenu;
