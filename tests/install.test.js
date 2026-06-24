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
    fs.existsSync(path.join(destination, "references", "delivery-discipline.md")),
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

test("skill documents decision-driven cross-role review", () => {
  const packageRoot = path.resolve(__dirname, "..");
  const skill = fs.readFileSync(path.join(packageRoot, "SKILL.md"), "utf8");
  const orchestration = fs.readFileSync(
    path.join(packageRoot, "references", "orchestration-model.md"),
    "utf8",
  );
  const scenarios = fs.readFileSync(
    path.join(packageRoot, "tests", "pressure-scenarios.md"),
    "utf8",
  );

  assert.match(skill, /Review Relevance Gate/);
  assert.match(skill, /cross_role_review_decision/);
  assert.match(skill, /decision_nodes/);
  assert.match(orchestration, /decision-driven/);
  assert.match(scenarios, /Cross-Role Review Must Be Decision-Driven/);
});

test("skill documents readable final artifacts", () => {
  const packageRoot = path.resolve(__dirname, "..");
  const skill = fs.readFileSync(path.join(packageRoot, "SKILL.md"), "utf8");
  const workspace = fs.readFileSync(
    path.join(packageRoot, "references", "workspace-structure.md"),
    "utf8",
  );
  const scenarios = fs.readFileSync(
    path.join(packageRoot, "tests", "pressure-scenarios.md"),
    "utf8",
  );

  assert.match(skill, /Reader-Facing Decision Artifact Contract/);
  assert.doesNotMatch(skill, /CEO Summary Readability Contract/);
  assert.match(skill, /reader_artifact/);
  assert.match(skill, /process_appendix/);
  assert.match(skill, /language consistency pass/);
  assert.match(skill, /mixed-language artifact/);
  assert.match(workspace, /reader_artifact/);
  assert.match(workspace, /process_appendix/);
  assert.match(scenarios, /Reader-Facing Artifact Must Not Look Like A CEO Log/);
  assert.match(scenarios, /Mixed-Language Artifact Must Be Rewritten/);
});

test("skill documents unified role contribution ledger", () => {
  const packageRoot = path.resolve(__dirname, "..");
  const skill = fs.readFileSync(path.join(packageRoot, "SKILL.md"), "utf8");
  const workspace = fs.readFileSync(
    path.join(packageRoot, "references", "workspace-structure.md"),
    "utf8",
  );
  const scenarios = fs.readFileSync(
    path.join(packageRoot, "tests", "pressure-scenarios.md"),
    "utf8",
  );

  assert.match(skill, /Role Contribution Ledger/);
  assert.match(skill, /role_contributions/);
  assert.match(skill, /final_artifact_impact/);
  assert.match(workspace, /role-contributions\.md/);
  assert.match(scenarios, /Role Contributions Need A Unified Ledger/);
});

test("AI target map documents supported explicit runtimes", () => {
  assert.deepEqual(Object.keys(AI_TARGETS).sort(), [
    "claude",
    "codex",
    "cursor",
  ]);
});
