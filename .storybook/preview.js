import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import dark from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/assets/themes/dark.css';
import light from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/assets/themes/default.css';
import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme';

export const decorators = [
  cssVariablesTheme,
];

setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  cssVariables: {
    files: {
      'Light Theme': light,
      'Dark Theme': dark,
    },
    defaultTheme: 'Light Theme'
  }
}
