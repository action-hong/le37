// eslint-disable-next-line @typescript-eslint/no-unused-vars
function table(obj) {
  return Object.entries(obj)
    .map(item => `| \`${item[0]}\` | \`${item[1].replaceAll('|', '\\|')}\` |`)
    .join('\n')
}
