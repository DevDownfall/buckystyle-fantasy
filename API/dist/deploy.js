console.clear();
const pm2Deploy = require('./deployer.js');

const config = {
    deploymentName: 'downfall-api',
    deploymentServers: [
        {
            name: 'Downfall - Node 7',
            host: '91.134.153.166',
            username: 'root',
            password: 'Xx3v40EdiV8*R#',
            port: 22,
        },
    ],
    deleteRemote: true,
    sftp: true,
    remoteRoot: '/root',
    fileName: 'main.js',
};
pm2Deploy.deploy(config);
