var fork = require('child_process').fork;
var fs = require('fs');
var path = require('path');
var open = require('opener');

/**
 * By default:
 *
 * 1. Runs the supplied script in debug mode
 * 2. Runs node-inspector.
 * 3. Opens the user's browser, pointing it at the inspector.
 */
function debug(argv, options, loader) {
  var script = options._[0];

  if (!script) {
    console.log(loader.loadManual('debug'));
    process.exit(0);
  }

  // We want to pass along subarguments, but re-parse our arguments.
  var subprocArgs = argv.splice(argv.indexOf(script) + 1);
  options = loader.parse(argv);

  var inspectorPort = options.p || options.port || 8080;
  var inspectorArgs = ['--web-port=' + inspectorPort];
  var subprocPort = options.d || options['debug-port'] || 5858;
  var subprocExecArgs = ['--debug=' + subprocPort];
  var url = 'http://127.0.0.1:' + inspectorPort + '/debug?port=' + subprocPort;

  if (options.s || options.suspend) {
    subprocExecArgs.push('--debug-brk');
  }

  fork(require.resolve('node-inspector/bin/inspector'), inspectorArgs, { silent: true });
  fork(path.resolve(process.cwd(), script), subprocArgs, {
    execArgv: subprocExecArgs
  });

  if (!options.cli && !options.c) {
    open(url);
  }

  console.log('Node-inspector is now available from %s', url);
  console.log('Debugging %s %s\n', script, subprocArgs.join(' '));
}

module.exports = debug;