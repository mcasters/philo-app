module.exports = {
    modify: (config, {target, dev}, webpack) => {
            if (!target.server) {
                config.node = {
                    fs: 'empty',
                    net: 'empty',
                    tls: 'empty',
                };
            }
            return config;
        },
    };
