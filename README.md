# @moontaiworks/package-template

## Intro

This is an out-of-box **TypeScript-based project template** with the following features:

- **Testing**:
  - Powered by [Vitest](https://github.com/vitest-dev/vitest) with built-in code coverage.
- **Code Quality**:
  - [ESLint](https://eslint.org) + [Prettier](https://prettier.io) for linting and formatting.
  - [Husky](https://github.com/typicode/husky) + [Lint-staged](https://github.com/okonet/lint-staged) for pre-commit checks.
  - Auto-organized imports and objects via [Perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist).
- **Commit Standards**: [Commitlint](https://github.com/conventional-changelog/commitlint) ensures adherence to [Conventional Commits](https://www.conventionalcommits.org).
- **Automated Releases**:
  - Version bumping, changelog generation via [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version).
  - Parses conventional commit messages for versioning and changelog updates.
  - Code coverage reported to [CodeCov](https://codecov.io).
- **Documentation**: Generate API documentation with [Typedoc](https://github.com/TypeStrong/typedoc).

Ideal for maintaining high-quality, well-documented, and automated TypeScript projects.

## Getting Started

### 1. Use this template to create a new repository.

Click the [`Use this template`](https://github.com/new?template_name=package-template&template_owner=moontaiworks) button on the top right corner of the repository page.

### 2. Clone the repository, and install the dependencies.

Just clone your repo and install the dependencies with any package manager you like. This template does not strong bind to any package manager, but the used package manager in GitHub Actions workflow is `pnpm`. You may need to modify the workflow file if you use other package managers.

### 3. Modify the package content to fit your project.

There are few places you need to modify to fit your project.

For first, you have setup the project name in `package.json` and `README.md`. You can use the following command to replace it and initialize project:

```bash
YOUR_GITHUB_USER="your-user-name"
YOUR_REPO_NAME="your-awesome-package-name"
sed -i "s/moontaiworks/${YOUR_GITHUB_USER}/g" package.json README.md CONTRIGUTING.md .github/workflows/*
sed -i "s/package[-_]template/${YOUR_REPO_NAME}/g" package.json README.md CONTRIGUTING.md .github/workflows/*
rm -rf src/calculator tests/calculator tests/shared
echo "" > src/index.ts
```

**Note:** This package template is designed for build package that will be use in both **Node.js** and the **browser**. Hence, it also generates an **IIFE format bundle** for browser compatibility, using the project name as the global variable name. If you don't need this feature, you can remove the `build:iife` script and related configurations in `package.json`.

⚠️ If your project name contains special characters that are invalid for an global variable, you have to update the name in the `build:iife` script in `package.json` to a valid identifier.

### 4. Start coding!

You can now start coding! Simple right?

You can also checkout the [Contributing Guide](CONTRIBUTING.md) to learn more.

### 5. Publish

> This template uses [CodeCov](https://docs.codecov.com/docs/quick-start) to archive the code coverage.
> If you want to use CodeCov, you need to set the `CODECOV_TOKEN` in the [repository secrets](https://github.com/moontaiworks/package-template/settings/secrets/actions).
> If you don't need to use CodeCov, you can remove the CodeCov badge and the related scripts in `package.json` and [`.github/workflows/publish.yml`](.github/workflows/publish.yml).

Once you done your first version, you can open pull request or directly push your codes to the `main` branch.

The actions in this template will auto perform following steps when you push the code to the `main` branch:

- Test: Run tests and generate coverage report.
- Build: Generate bundled and minified esm, cjs and iife version, and unminified esm version for node.
- Release: Bump Version & Generate Changelog.
- [Publish the package to npm](https://www.npmjs.com/package/@moontaiworks/package-template/)
- [Publish docs to GitHub Pages](https://moontaiworks.github.io/package-template/): You may need to setup the GitHub Pages in the repository settings.

You can modify the workflow file to fit your needs.

Before start developing your package, you should remove all desciptions above this line.

---

[![NPM Version](https://img.shields.io/npm/v/@moontaiworks/package-template)](https://www.npmjs.com/package/@moontaiworks/package-template)
[![NPM Downloads](https://img.shields.io/npm/d18m/@moontaiworks/package-template)](https://www.npmjs.com/package/@moontaiworks/package-template)
[![Codecov](https://codecov.io/gh/moontaiworks/package-template/graph/badge.svg)](https://codecov.io/gh/moontaiworks/package-template)

## Install

```
# NPM
npm install @moontaiworks/package-template

# Yarn
yarn add @moontaiworks/package-template

# PNPM
pnpm add @moontaiworks/package-template
```

## Usage

```typescript
import { add, divide, max } from "@moontaiworks/package-template";

add(1, 2); // 3
divide(1, 2); // 0.5
max(1, 2); // 2
```

## API Document

See the [API documentation](https://moontaiworks.github.io/package-template/).
