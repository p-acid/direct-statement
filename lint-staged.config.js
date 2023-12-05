module.exports = {
  "**/*.{tsx,ts,jsx,js}": ["eslint --fix", "prettier --write"],
  "*.{ts,tsx}": [() => "tsc --skipLibCheck --noEmit", "eslint --cache --fix"],
}
