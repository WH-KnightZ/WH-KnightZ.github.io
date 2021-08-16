import { Box } from '@material-ui/core';

interface Props {
  title: string;
  className?: string;
}

const Page: React.FC<Props> = ({ title, children, ...rest }) => (
  <Box {...rest}>
    <title>{title}</title>
    {children}
  </Box>
);

export default Page;
