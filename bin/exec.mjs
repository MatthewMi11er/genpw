#!/usr/bin/env node -r esm
import PasswordGenerator from '../lib/passwordgenerator';

const pw = new PasswordGenerator();
console.log(pw.generate(7)); // eslint-disable-line no-console
