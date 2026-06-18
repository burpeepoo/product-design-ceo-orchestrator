#!/usr/bin/env node

const path = require("node:path");
const { copySkill, resolveInstallDir, AI_TARGETS } = require("../lib/install");
const packageJson = require("../package.json");

function usage() {
  const supported = Object.keys(AI_TARGETS).join("|");
  return `Product Design CEO Orchestrator

Usage:
  product-design-ceo-orchestrator install --ai ${supported} [--force]
  product-design-ceo-orchestrator install --target <directory> [--force]
  product-design-ceo-orchestrator --help
  product-design-ceo-orchestrator --version

Examples:
  npx product-design-ceo-orchestrator install --ai codex
  npx product-design-ceo-orchestrator install --ai claude --force
  npx product-design-ceo-orchestrator install --target ~/.my-agent/skills/product-design-ceo-orchestrator
`;
}

function parseArgs(argv) {
  const options = {
    command: null,
    ai: null,
    targetDir: null,
    force: false,
    dryRun: false,
    help: false,
    version: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (index === 0 && !arg.startsWith("-")) {
      options.command = arg;
      continue;
    }

    if (arg === "--ai") {
      options.ai = argv[++index];
    } else if (arg === "--target") {
      options.targetDir = argv[++index];
    } else if (arg === "--force") {
      options.force = true;
    } else if (arg === "--dry-run") {
      options.dryRun = true;
    } else if (arg === "--help" || arg === "-h") {
      options.help = true;
    } else if (arg === "--version" || arg === "-v") {
      options.version = true;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  return options;
}

function main(argv = process.argv.slice(2)) {
  const options = parseArgs(argv);

  if (options.version) {
    console.log(packageJson.version);
    return;
  }

  if (options.help || !options.command) {
    console.log(usage());
    return;
  }

  if (options.command !== "install") {
    throw new Error(`Unknown command: ${options.command}`);
  }

  const destination = resolveInstallDir({
    ai: options.ai,
    targetDir: options.targetDir,
  });

  if (options.dryRun) {
    console.log(`Would install to: ${destination}`);
    return;
  }

  const result = copySkill({
    packageRoot: path.resolve(__dirname, ".."),
    destination,
    force: options.force,
  });

  console.log(`Installed product-design-ceo-orchestrator to ${result.destination}`);
  console.log(`Copied ${result.files.length} files.`);
}

try {
  main();
} catch (error) {
  console.error(error.message);
  console.error("");
  console.error(usage());
  process.exitCode = 1;
}
