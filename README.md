# Test task for [Etton](etton.ru) by Veretennikov Alexey

For this task i was using boilerplate from https://github.com/vedees/webpack-template-pug

Test link: https://github.com/against-v/test-task-frontend

Github pages: https://devialex.github.io/test-task-frontend/list.html

## Build Setup:

``` bash
# Install dependencies:
npm install

# Server with hot reload at http://localhost:8081/
npm run dev

# Output will be at dist/ folder
npm run build
```
## Project Structure:

* `src/pug/layout` - put custom layout for pages
* `src/pug/includes` - all app includes
* `src/pug/utils` - pug mixins and other
* `src/pug/pages` - put custom app pages. Don't forget to import them in `index.js`
* `src/assets/scss` - put custom app SCSS styles here. Don't forget to import them in `index.js`
* `src/assets/img` - put images here. Don't forget to use correct path: `assets/img/some.jpg`
* `src/js` - put custom app scripts here
* `src/index.js` - main app file where you include/import all required libs and init app
* `static/` - folder with extra static assets that will be copied into output folder
## License
[MIT](./LICENSE)

Boilerplate author: [Evgenii Vedegis](https://github.com/vedees)