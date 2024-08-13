module.exports = {
  apps: [
    {
      name: "byf-website",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
