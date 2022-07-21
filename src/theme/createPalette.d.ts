import '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface Palette {
    black: Palette['black'];
    white: Palette['white'];
    green: Palette['green'];
    tag: Palette['tag'];
    progress: Palette['progress'];
    gold: Palette['gold'];
    purple: Palette['purple'];
    red: Palette['red'];
    lime: Palette['lime'];
    red: Palette['red'];
    tag: Palette['tag'];
    progress: Palette['progress'];
  }

  interface PaletteOptions {
    black?: ColorPartial;
    white?: ColorPartial;
    green?: ColorPartial;
    tag?: ColorPartial;
    progress?: ColorPartial;
    gold?: ColorPartial;
    purple?: ColorPartial;
    red?: ColorPartial;
    red?: ColorPartial;
    tag?: ColorPartial;
    lime?: ColorPartial;
    progress?: ColorPartial;
  }

  interface PaletteColor {
    black: Color;
    white: Color;
    green: Color;
    tag: Color;
    progress: Color;
    gold: Color;
    purple: Color;
    red: Color;
    red: Color;
    tag: Color;
    lime: Color;
    progress: Color;
  }

  interface TypographyVariants {
    body3: TypographyStyleOptions;
    subtitle3: TypographyStyleOptions;
    subtitle4: TypographyStyleOptions;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: TypographyStyleOptions;
    subtitle3?: TypographyStyleOptions;
    subtitle4?: TypographyStyleOptions;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    subtitle3: true;
    subtitle4: true;
  }
}