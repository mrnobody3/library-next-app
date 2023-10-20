import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    status?: {
      danger?: string;
    };
    text?: {
      fontSize?: string;
    };
  }

  interface CustomThemeOptions extends ThemeOptions {
    status?: {
      danger?: string;
    };
    text?: {
      fontSize?: string;
    };
  }
  interface Palette {
    primaryLight: Palette['primary'];
  }
  interface PaletteOptions {
    primaryLight: PaletteOptions['primary'];
  }

  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
