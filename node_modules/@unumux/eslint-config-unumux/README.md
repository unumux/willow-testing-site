# Unum UX eslint config

[![Travis](https://img.shields.io/travis/unumux/eslint-config-unumux.svg)](https://travis-ci.org/unumux/eslint-config-unumux) [![npm (scoped)](https://img.shields.io/npm/v/@unumux/eslint-config-unumux.svg)](https://www.npmjs.com/package/@unumux/eslint-config-unumux)

This repo contains defaults for the Unum UX team's default eslint configuration.

## Usage

Install in your project with:

```bash
npm i --save-dev @unumux/eslint-config-unumux eslint babel-eslint
```

Then create a file in the root folder called .eslintrc.json. Put the following in this file:

```json
{
    "extends": "@unumux/unumux"
}
```

Use the eslint command line tool (`npm i -g eslint`) or a plugin for your editor (such as [linter-eslint](https://atom.io/packages/linter-eslint) for Atom) to see linting errors

## Overriding config

Config can be easily modified by modifying the .eslintrc.json file in your project folder. For example, if you don't want console.log to raise a linting error, simply change the file like so:

```json
{
    "rules": {
        "no-console": 0
    },
    "extends": "@unumux/unumux"
}
```

**IMPORTANT**: Do not modify the rules inside of node_modules/@unumux/unumux - these won't be updated for other users of your project, and will be overwritten if you reinstall your packages.


## Usage with node

Node has slightly different rules for linting. To enable this ruleset, create an .eslintrc.json file with the following:

```json
{
    "extends": "@unumux/unumux/node"
}
```

## Usage with React

React also has slightly different rules for linting. To enable this ruleset, create an .eslintrc.json file with the following:

```json
{
    "extends": "@unumux/unumux/react"
}
```
