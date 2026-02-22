/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
    forbidden: [
        {
            name: 'no-circular',
            severity: 'error',
            comment: 'Warn when circular dependencies are found. This rule prevents cyclic references.',
            from: {},
            to: {
                circular: true
            }
        }
    ],
    options: {
        doNotFollow: {
            path: 'node_modules'
        },
        tsConfig: {
            fileName: 'tsconfig.json'
        }
    }
};
