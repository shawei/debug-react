import path from 'path';
import {defineConfig} from 'vite';
import babelPlugin from 'vite-plugin-babel';
import {
  DARK_MODE_DIMMED_WARNING_COLOR,
  DARK_MODE_DIMMED_ERROR_COLOR,
  DARK_MODE_DIMMED_LOG_COLOR,
  LIGHT_MODE_DIMMED_WARNING_COLOR,
  LIGHT_MODE_DIMMED_ERROR_COLOR,
  LIGHT_MODE_DIMMED_LOG_COLOR,
  GITHUB_URL,
  getVersionString,
} from 'react-devtools-extensions/utils';
const NODE_ENV = process?.env?.NODE_ENV;

const __DEV__ = false;

const DEVTOOLS_VERSION = getVersionString();

const EDITOR_URL = process.env.EDITOR_URL || null;
const LOGGING_URL = process.env.LOGGING_URL || null;
export default defineConfig({
  plugins: [
    babelPlugin({
      babelConfig: {
        presets: ['@babel/preset-flow', '@babel/preset-react'], // 处理flow和jsx
      },
    }),
  ],
  resolve: {
    alias: {},
  },
  // 全局变量
  define: {
    __DEV__,
    __EXPERIMENTAL__: true,
    __EXTENSION__: false,
    __PROFILE__: false,
    __TEST__: NODE_ENV === 'test',
    'process.env.DEVTOOLS_PACKAGE': `"react-devtools-core"`,
    'process.env.DEVTOOLS_VERSION': `"${DEVTOOLS_VERSION}"`,
    'process.env.EDITOR_URL': EDITOR_URL != null ? `"${EDITOR_URL}"` : null,
    'process.env.GITHUB_URL': `"${GITHUB_URL}"`,
    'process.env.LOGGING_URL': `"${LOGGING_URL}"`,
    'process.env.NODE_ENV': `"${NODE_ENV}"`,
    'process.env.DARK_MODE_DIMMED_WARNING_COLOR': `"${DARK_MODE_DIMMED_WARNING_COLOR}"`,
    'process.env.DARK_MODE_DIMMED_ERROR_COLOR': `"${DARK_MODE_DIMMED_ERROR_COLOR}"`,
    'process.env.DARK_MODE_DIMMED_LOG_COLOR': `"${DARK_MODE_DIMMED_LOG_COLOR}"`,
    'process.env.LIGHT_MODE_DIMMED_WARNING_COLOR': `"${LIGHT_MODE_DIMMED_WARNING_COLOR}"`,
    'process.env.LIGHT_MODE_DIMMED_ERROR_COLOR': `"${LIGHT_MODE_DIMMED_ERROR_COLOR}"`,
    'process.env.LIGHT_MODE_DIMMED_LOG_COLOR': `"${LIGHT_MODE_DIMMED_LOG_COLOR}"`,
  },
});
