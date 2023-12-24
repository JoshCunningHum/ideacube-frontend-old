module.exports = {
    apps: [
        {
            name: "IdeaCube",
            port: "5174",
            exec_mode: "cluster",
            instances: "max",
            script: "./node_modules/nuxt/bin/nuxt.mjs",
            args: "start"
        },
    ],
};
