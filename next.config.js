const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = {
      topLevelAwait: true,
      asyncWebAssembly: true,
      layers: true,
    };
    config.plugins.push(
      new NextFederationPlugin({
        name: "main",
        remotes: {},
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          // "./home": "./PagesComponents/Home/Home.jsx",
          "./header": "./components/Header/Header.jsx",
          "./footer": "./components/Footer/Footer.jsx",
        },

        extraOptions: {
          exposePages: true,
          automaticAsyncBoundary: true,
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
