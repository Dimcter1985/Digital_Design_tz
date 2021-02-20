const withImages = require('next-images');
const path = require('path');

module.exports = withImages({
    webpack: config => {
    config.resolve.modules.push(path.resolve('/'))

    return config
  },
  // sassOptions: {
  //   includePaths: [path.join('styles')],
  //   prependData: `@import "mixins.scss"; @import "variables.scss";`,
  // }
})

