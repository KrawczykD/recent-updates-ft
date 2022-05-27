# vue3-vite-spa-template

This tamplete repo is build with using vue3 sfc with setup script component example. Project use vite, tailwind, typescript.

## Urls (change these to actual library urls and remove this text)

- [Master https://http://bo-vue3-vite-spa-template.azurewebsites.net/](https://http://bo-vue3-vite-spa-template.azurewebsites.net/)


# Development Guide

## Setup

1. Clone the Repostory using
   [Github Desktop](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop)
2. Run `npm i` or `npm install` to install npm's mentioned in [package.json](package.json)
3. Run Initial Installs
3. edit [.npmrc](.npmrc) to your git name.
4. edit  [package.json](package.json)
   - name , this will be your project name

5. Change claudinary settings file in gulpt task and replace with your claudianry credentials

## Develope
 1. run Run Local dev

## Run Tailwind server

1. npm run tailwindWatch - that run tailwind server and compile new css on css change.

### NPM Scrits Available
- [Initial Installs] - Install packages and husky
- [Run Local dev] - Thatruns vite dev server with tailwind watch
- [predeploy:ft] - !Important run this command only when want deploy new ft to claudinary.
- [deploy:ft] - run build and push tags
- [postdeploy:ft] - run gulp uplaod task
- [uploadLibToClaudinary] - Uploading ./dist current version
- [versionUpdate] - update version.ts file base on package.json version number
- [deleteLibFromClaudinary] - delete library from caludinary , deleted version can't be current version. To delete version use format '--bv x.x.x'
- [getLatestLibraryVersion] - display lastest updated library with url link
- [postversion] - run version update gulp task , crate and push git commit with version
- [preversion] - Hapens after version patch, update version.ts file , create bump version commit and sent github tags.
- [tailwindWatch] - run tailwind server to watch and compile any css changes.
- [format:check] - run prettier check on all files without modifying
- [format:fix] - run prettier and overwrite files
- [lint](https://cli.vuejs.org/core-plugins/eslint.html#injected-commands) - scans for syntax errors, wrong use of [Vue.js Directives](https://v3.vuejs.org/api/directives.html) and violation for
  [Vue.js Style Guide](https://v3.vuejs.org/style-guide/)
- [lint]
- [lint:fix] - run lint and auto fix problems if possible

### Lint

This project use [vue3-strongly-recommended](https://eslint.vuejs.org/rules/#priority-b-strongly-recommended-improving-readability-for-vue-js-3-x)

To run linting run lint to check linting or lint:fix to fix issues

### Prettier

Have project settings file

## Contribute

use Conventional Commits https://www.conventionalcommits.org/en/v1.0.0/ and tool is documented here http://commitizen.github.io/cz-cli/

## Deploy
  
 #### Before any release make sure version is changed by run npm version upgrade

 ### feature - run deploy:ft to publish new ft in to claudianry
