#!/usr/bin/env node
let argv = require('yargs');

argv = argv.usage('Usage: $0 <command> [options]');

[
    'init',
    'setupDockerImages',
    'startDev',
    'build',
    'createChaincode',
    'createMigration',
    'cleanupChaincode'
].forEach((commandName) => {
    const commandPath = `./src/commands/${commandName}`;
    argv = argv.command(require(commandPath));
});

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});

argv.help('h').alias('h', 'help').argv; // eslint-disable-line
