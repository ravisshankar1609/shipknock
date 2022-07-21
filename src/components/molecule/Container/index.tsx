import React from 'react';

import Box from '@mui/material/Box';

const ContainerMaxWidth = ({
  children,
  padding = true,
}: {
  children: React.ReactNode;
  padding?: boolean;
}) => {
  return (
    <Box
      sx={{
        maxWidth: { xs: '100%', md: '1200px' },
        background: 'transparent',
        m: {
          md: '0 auto',
        },
        px: { xs: padding ? '1rem' : 0, md: 0 },
      }}
    >
      {children}
    </Box>
  );
};

export default ContainerMaxWidth;