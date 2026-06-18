const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

const {
  AI_TARGETS,
  copySkill,
  resolveInstallDir,
} = require("../lib/install");

test("resolveInstallDir maps known agent runtimes to skill directories", () => {
  const homeDir = path.join(path.sep, "Users", "tester");

  assert.equal(
    resolveInstallDir({ ai: "codex", homeDir }),
    path.join(homeDir, ".codex", "skills", "product-design-ceo-orchestrator"),
  );
  assert.equal(
    resolveInstallDir({ ai: "claude", homeDir }),
    path.join(homeDir, ".claude", "skills", "product-design-ceo-orchestrator"),
  );
  assert.equal(
    resolveInstallDir({ ai: "cursor", homeDir }),
    path.join(homeDir, ".cursor", "skills", "product-design-ceo-orchestrator"),
  );
});

test("resolveInstallDir accepts a custom target directory", () => {
  const target = path.join(os.tmpdir(), "custom-skill-target");

  assert.equal(resolveInstallDir({ targetDir: target }), target);
});

test("copySkill installs required skill files and references", () => {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "pdco-install-"));
  const destination = path.join(tempRoot, "skill");

  copySkill({
    packageRoot: path.resolve(__dirname, ".."),
    destination,
    force: false,
  });

  assert.equal(fs.existsSync(path.join(destination, "SKILL.md")), true);
  assert.equal(fs.existsSync(path.join(destination, "README.md")), true);
  assert.equal(fs.existsSync(path.join(destination, "skill.json")), true);
  assert.equal(
    fs.existsSync(path.join(destination, "references", "orchestration-model.md")),
    true,
  );
  assert.equal(
    fs.existsSync(path.join(destination, "tests", "pressure-scenarios.md")),
    true,
  );

  assert.throws(
    () =>
      copySkill({
        packageRoot: path.resolve(__dirname, ".."),
        destination,
        force: false,
      }),
    /already exists/,
  );

  copySkill({
    packageRoot: path.resolve(__dirname, ".."),
    destination,
    force: true,
  });

  assert.equal(fs.existsSync(path.join(destination, "SKILL.md")), true);

  fs.rmSync(tempRoot, { recursive: true, force: true });
});

test("AI target map documents supported explicit runtimes", () => {
  assert.deepEqual(Object.keys(AI_TARGETS).sort(), [
    "claude",
    "codex",
    "cursor",
  ]);
});
