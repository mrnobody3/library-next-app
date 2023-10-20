import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import { Link } from '@mui/material';
import NextLink from 'next/link';
import { FC } from 'react';
import { SxProps } from '@mui/system';
interface IHeaderLogo {
  muiStyles: SxProps;
}

const HeaderLogo: FC<IHeaderLogo> = ({ muiStyles }) => {
  return (
    <Link component={NextLink} href="/" variant="h6" noWrap sx={muiStyles}>
      <MenuBookTwoToneIcon sx={{ mr: 1 }} />
      YOL
    </Link>
  );
};

export default HeaderLogo;
