# slc -- StrongLoop Controller

`slc` is a command-line tool for development and control of your Node
application.

## Install

    npm install -g strongloop

## Documentation

See the official [StrongLoop documentation](http://docs.strongloop.com/).

## Usage

```
usage: slc <-h|--help|-v|--version>
usage: slc <command> [--help] [...]

Command-line tool for development and control of a Node application.

Options:
  -h,--help     Print usage for slc, or for an slc command, and exit.
  -v,--version  Print versions of slc and its dependencies, and exit.

Commands:

  arc: StrongLoop UI, an alternative to the CLI

    Launch the StrongLoop UI, a graphical alternative to the `loopback`,
    `build`, `deploy`, and `pmctl` commands, that also offers run-time
    profiling and debugging.

  loopback: LoopBack application scaffolder

    Create LoopBack 2.x applications, datasources, models, ACLs, and relations.

  debug: Node.js application debugger

  start: start a node application under a local process manager

    Start a local process manager, if necessary, and run the application
    in-place.

  build: package a node application for deployment

    Packages a node application as an npm tarball or into a git deploy branch.
    Deploy the package using the `deploy` command, or your existing DevOps
    pipeline.

  deploy: deploy a node application package

    Deploy an application to the StrongLoop process manager (see `pm-install`
    command), or to any PaaS that can accept a `git push` of a node
    application.

  pmctl: control a node application hosted by the process manager

    Run-time remote control of clustering, profiling, logging, restart, etc.
    See the `pm-install` and `pm` commands.

  pm-install: install the StrongLoop process manager

    The process manager hosts applications, allowing them to be deployed,
    re-deployed, controlled, and monitored, and for application metrics and
    logs to be viewed in Arc and published to thirdparty services (Splunk,
    Datadog, Statsd, etc.). To experiment locally with the manager without
    installing, see the `pm` command.

  strongops: save StrongOps API key into strongloop.json

    A key is required to publish metrics to the StrongOps hosted service.


These commands are used internally, and may be useful when building custom
tooling and integrations with StrongLoop features:

  pm: run the StrongLoop process manager

    Normally, the process manager is installed as a system service (upstart or
    systemd) and run by the system, but it can be run directly for
    experimentation, or to build custom DevOps deployment tooling.

  run: supervise a node application

    The StrongLoop kernel, the supervisor extends a node application with
    node clustering, profiling, metrics collection and delivery, dynamic
    profiling, logging, etc. Normally, its used by the process manager, but
    it can be run directly for experimentation, or to build custom DevOps
    deployment tooling.

  runctl: control a node application hosted by the supervisor

    Useful when using the `run` command directly.

  registry: npm registry manipulation

    Switch between npm registries and promote packages between them. Useful
    as a component of DevOps/CI pipelines, or from the command line.
```
