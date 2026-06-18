const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const SKILL_NAME = "product-design-ceo-orchestrator";

const AI_TARGETS = {
  codex: [".codex", "skills"],
  claude: [".claude", "skills"],
  cursor: [".cursor", "skills"],
};

const INSTALL_ENTRIES = [
  "SKILL.md",
  "README.md",
  "LICENSE",
  "skill.json",
  path.join("references", "delivery-discipline.md"),
  path.join("references", "kb-policy.md"),
  path.join("references", "orchestration-model.md"),
  path.join("references", "role-catalog.md"),
  path.join("references", "workspace-structure.md"),
  path.join("tests", "pressure-scenarios.md"),
];

function expandHome(input, homeDir = os.homedir()) {
  if (input === "~") {
    return homeDir;
  }
  if (input.startsWith("~/")) {
    return path.join(homeDir, input.slice(2));
  }
  return input;
}

function resolveInstallDir({ ai, targetDir, homeDir = os.homedir() }) {
  if (targetDir) {
    return path.resolve(expandHome(targetDir, homeDir));
  }

  if (!ai) {
    throw new Error("Pass --ai codex|claude|cursor or --target <directory>.");
  }

  const normalized = ai.toLowerCase();
  const parts = AI_TARGETS[normalized];

  if (!parts) {
    throw new Error(
      `Unsupported --ai "${ai}". Supported: ${Object.keys(AI_TARGETS).join(", ")}.`,
    );
  }

  return path.join(homeDir, ...parts, SKILL_NAME);
}

function copyFileWithParents(source, destination) {
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
}

function copySkill({ packageRoot, destination, force = false }) {
  const sourceSkill = path.join(packageRoot, "SKILL.md");
  if (!fs.existsSync(sourceSkill)) {
    throw new Error(`Cannot find SKILL.md in package root: ${packageRoot}`);
  }

  if (fs.existsSync(destination)) {
    if (!force) {
      throw new Error(
        `${destination} already exists. Re-run with --force to overwrite it.`,
      );
    }
    fs.rmSync(destination, { recursive: true, force: true });
  }

  for (const entry of INSTALL_ENTRIES) {
    const source = path.join(packageRoot, entry);
    if (!fs.existsSync(source)) {
      throw new Error(`Missing package file: ${entry}`);
    }
    copyFileWithParents(source, path.join(destination, entry));
  }

  return {
    destination,
    files: INSTALL_ENTRIES.slice(),
  };
}

module.exports = {
  AI_TARGETS,
  INSTALL_ENTRIES,
  SKILL_NAME,
  copySkill,
  resolveInstallDir,
};
