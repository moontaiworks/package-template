# tag root commit as 0.0.0 to aviod first version being empty
git tag -f v0.0.0 $(git rev-list --max-parents=0 HEAD)

# bump version by commit message, then tag and commit
npx -y commit-and-tag-version

echo "Set output to ${GITHUB_OUTPUT:="GITHUB_OUTPUT"}"

# extract and output version to GitHub actions output
version=$(jq -r .version package.json)
echo "version=$version" >> $GITHUB_OUTPUT
major=$(echo $version | cut -d. -f1)
echo "major=$major" >> $GITHUB_OUTPUT

# extract last commit and version info
echo "commit=$(git rev-parse HEAD)" >> $GITHUB_OUTPUT
echo "message=$(git log -1 --pretty=%B)" >> $GITHUB_OUTPUT
# extract changelog
DELIMITER=$(dd if=/dev/urandom bs=15 count=1 status=none | base64)
echo "changelog<<$DELIMITER" >> $GITHUB_OUTPUT
echo "$(sed -n "/## \[$version\]/,/^## /p" CHANGELOG.md | sed '$d')" >> $GITHUB_OUTPUT
echo "$DELIMITER" >> $GITHUB_OUTPUT

# cleanup to remove added tag
git tag -d v0.0.0
