module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  },
  env: {
    formApi: 'https://usebasin.com/f/bfefabc83256.json',
  },
};