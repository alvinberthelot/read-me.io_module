
let config = {
  test: {
    api: {
      url: 'http://localhost',
      port: 3000
    }
  },
  prod: {
    api: {
      url: 'http://read-me.io',
    }
  }
};

module.exports = config['test'];
