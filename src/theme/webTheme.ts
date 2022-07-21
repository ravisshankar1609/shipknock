import { createTheme } from '@mui/material/styles';
import { COLORS } from './colors';
import { WEB_TYPOGRAPHY } from './typography';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: COLORS.primary.main,
      dark: COLORS.primary.dark,
    },
    secondary: {
      main: COLORS.secondary.main,
      light: COLORS.secondary.light,
      dark: COLORS.secondary.dark,
    },
    black: {
      10: COLORS.black10,
      40: COLORS.black40,
      60: COLORS.black60,
      70: COLORS.black70,
      80: COLORS.black80,
      100: COLORS.black100,
    },
    white: {
      0: COLORS.white0,
      50: COLORS.white50,
      100: COLORS.white100,
    },
    lime: {
      200: COLORS.lime200,
    },
    gold: {
      100: COLORS.gold100,
    },
    grey: {
      300: COLORS.grey300,
      400: COLORS.grey400,
      600: COLORS.grey600,
      700: COLORS.grey700,
    },
    green: {
      400: COLORS.green400,
      500: COLORS.green500,
      600: COLORS.green600,
      700: COLORS.grey700,
    },
    purple: {
      100: COLORS.purple100,
    },
    red: {
      10: COLORS.red10,
      100: COLORS.red100,
      700: COLORS.red700,
    },
    divider: COLORS.divider,
    tag: {
      10: COLORS.tag10,
      30: COLORS.tag30,
      50: COLORS.tag50,
      70: COLORS.tag70,
      90: COLORS.tag90,
      100: COLORS.tag100,
    },
    progress: COLORS.progress,
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  typography:WEB_TYPOGRAPHY
});

theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html{
          font-size: 16px;
        };
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.primary.main,
          borderRadius: Number(theme.shape.borderRadius) * 12,
          padding: theme.spacing(1.8),
          fontSize: theme.typography.button,
          textTransform: 'capitalize',
          color: theme.palette.white[50],
          '&:hover': {
            backgroundColor: COLORS.primary.main,
            color: theme.palette.white[50],
          },
          '&:disabled': {
            backgroundColor: theme.palette.black[40],
            color: theme.palette.black[60],
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '0.875rem',
          color: COLORS.black80,
          lineHeight: 1.142,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.black[40],
          borderRadius: 16,
          '& .MuiLinearProgress-bar': {
            backgroundColor: COLORS.progress,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '& p:only-child': {
            margin: 0,
            width: '100%',
          },
          '& img': {
            width: '100%',
            height: '100%',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
          '&:last-child': {
            paddingBottom: 0,
          },
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          width: '290px',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: theme.spacing(1.5),
          '& .MuiPaper-root': {
            borderRadius: 56,
            backgroundColor: COLORS.white100,
            padding: theme.spacing(1, 2.5),
            justifyContent: 'center',
            '& .MuiSnackbarContent-message': {
              color: COLORS.black100,
              padding: 0,
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          lineHeight: 0,
        },
      },
    },
  },
});

export default theme;