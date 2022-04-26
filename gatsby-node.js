const path = require('path');
const data = require('./data/data.json');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  createPage({
    path: '/languages',
    component: path.resolve('./src/pages/language.tsx'),
  });
};
