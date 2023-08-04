/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => ({
    beforeFiles: [
      {
        source: "/script.js",
        destination: "https://cdn.usefathom.com/script.js",
      },
      {
        source: "/",
        destination: "https://cdn.usefathom.com",
        has: [
          {
            type: "query",
            key: "sid",
            value: "IVBPNICR",
          },
        ],
      },
    ],
  }),
};

module.exports = nextConfig;
