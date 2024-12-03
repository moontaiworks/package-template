# Contributing to this project

## Setup

### Requirements

- Node.js ^20.11 or later
- pnpm ^9

### Clone and install dependencies

```bash
git clone https://github.com/moontaiworks/package-template.git
cd package-template
pnpm install
```

## Manually Publish

```bash
# update version
sh scripts/version.sh

# test and build before publish
pnpm test -- --run
pnpm build

# publish
pnpm login
pnpm publish --tag latest

# push back to remote
git push --follow-tags
```
