import {createParser, createStringifier} from 'postcss-js-styled-core';
import {options} from './options.js';

export = {
  parse: createParser(options),
  stringify: createStringifier(options)
};
