import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import React from 'react';

interface Props {
  show: boolean;
  title: string;
  content: string;
  confirm?: { text: string; action: any };
  cancel?: { text: string; action: any };
}

const ModalConfirm: React.FC<Props> = (props) => {
  const { show, title, content, confirm, cancel } = props;

  return (
    <Dialog open={show} fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        {cancel && (
          <Box mr={1} mb={1}>
            <Button onClick={cancel.action} color="primary">
              {cancel.text}
            </Button>
          </Box>
        )}
        {confirm && (
          <Box mr={1} mb={1}>
            <Button onClick={confirm.action} variant="contained" color="primary">
              {confirm.text}
            </Button>
          </Box>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ModalConfirm;
