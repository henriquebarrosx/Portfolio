module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
      issuer: {
        test: /\.(js|ts)x?$/,
      },
    });

    return config;
  }
};