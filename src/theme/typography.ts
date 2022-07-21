import { COLORS } from './colors';

export const WEB_TYPOGRAPHY = {
  fontFamily: ['FoundersGrotesk', 'Recoleta', 'FoundersGroteskCondesed', 'sans-serif'].join(','),
  h1: {
    fontFamily: 'Recoleta',
    fontSize: '7.5rem',
    fontWeight: 400,
    lineHeight: '128px',
    color: COLORS.secondary.dark,
    '@media(max-width:1200px)': {
      fontSize: '3.25rem',
      lineHeight: '1.25',
    },
  },
  h2: {
    fontFamily: 'Recoleta',
    fontSize: '5rem', // 80px
    lineHeight: '88px',
    fontWeight: 400,
    color: COLORS.secondary.dark,
    '@media(max-width:1200px)': {
      fontSize: '3rem',
      lineHeight: '1.4',
    },
  },
  h3: {
    fontFamily: 'Recoleta',
    fontSize: '4rem',
    lineHeight: '72px',
    fontWeight: 400,
    color: COLORS.secondary.dark,
    '@media(max-width:1200px)': {
      fontSize: '2.25rem',
      lineHeight: '1.4',
    },
  },
  h4: {
    fontFamily: 'Recoleta',
    fontSize: '3rem', //48px
    fontWeight: 400,
    lineHeight: '56px',
    color: COLORS.secondary.dark,
    '@media(max-width:1200px)': {
      fontSize: '2rem',
      lineHeight: '2rem',
    },
  },
  h5: {
    fontFamily: 'Recoleta',
    fontSize: '2.25rem', // 36px
    fontWeight: 400,
    lineHeight: '44px',
    color: COLORS.secondary.dark,
    '@media(max-width:1200px)': {
      fontSize: '1.75rem',
      lineHeight: '2.25rem',
    },
  },
  body1: {
    fontFamily: 'FoundersGrotesk',
    fontSize: '1.5rem', // 24px
    lineHeight: '32px',
    fontWeight: 400,
    color: COLORS.secondary.dark,
    '@media(max-width:1200px)': {
      fontSize: '1.25rem',
      lineHeight: '28px',
    },
  },
  body2: {
    fontFamily: 'FoundersGrotesk',
    fontSize: '1.375rem', // 22px
    fontWeight: 400,
    lineHeight: '28px',
    color: COLORS.secondary.dark,
    '@media(max-width:1200px)': {
      fontSize: '1.125rem',
      lineHeight: '26px',
    },
  },
  body3: {
    fontFamily: 'FoundersGrotesk',
    fontSize: '1.125rem', // 18px
    fontWeight: 400,
    lineHeight: '26px',
    color: COLORS.secondary.dark,
    '@media(max-width:1200px)': {
      fontSize: '1rem', // 16px
      lineHeight: '24px',
    },
  },
  subtitle1: {
    fontFamily: 'FoundersGrotesk',
    fontSize: '1.75rem',
    fontWeight: 400,
    lineHeight: '36px',
    color: COLORS.secondary.dark,
    '@media(max-width:1200px)': {
      fontSize: '1.5rem',
      lineHeight: '28px',
    },
  },
  subtitle2: {
    fontFamily: 'FoundersGrotesk',
    fontSize: '1.75rem',
    fontWeight: 400,
    lineHeight: '36px',
    color: COLORS.secondary.dark,
    '@media(max-width:1200px)': {
      fontSize: '1.25rem',
      lineHeight: '28px',
    },
  },
  subtitle3: {
    fontFamily: 'FoundersGrotesk',
    fontSize: '2.5rem',
    fontWeight: 400,
    lineHeight: '48px',
    color: COLORS.secondary.dark,
    '@media(max-width:1200px)': {
      fontSize: '2rem',
      lineHeight: '40px',
    },
  },
  subtitle4: {
    fontSize: '2rem', // 32px
    fontFamily: 'FoundersGrotesk',
    fontWeight: 400,
    lineHeight: '40px',
    color: COLORS.secondary.dark,
    '@media(max-width:1200px)': {
      fontSize: '1.5rem', // 24px
      lineHeight: '32px',
    },
  },
  button: {
    fontSize: '1.125rem',
    fontFamily: 'FoundersGrotesk',
    fontWeight: 400,
    lineHeight: '26px',
    color: COLORS.secondary.dark,
    '@media(max-width:1200px)': {
      fontSize: '1.125rem', // 18px
      lineHeight: '26px',
    },
  },
  caption: {
    fontFamily: 'FoundersGrotesk',
    fontSize: '1rem', // 16px
    fontWeight: 400,
    lineHeight: '24px',
    color: COLORS.secondary.dark,
    '@media(max-width:1200px)': {
      fontSize: '0.875rem', // 14px
      lineHeight: '20px',
    },
  },
  overline: {
    fontSize: '1.125rem', // 18px
    fontFamily: 'FoundersGrotesk',
    fontWeight: 400,
    lineHeight: '26px',
    color: COLORS.secondary.dark,
    '@media(max-width:1200px)': {
      fontSize: '1rem',
      lineHeight: '24px',
    },
  },
};