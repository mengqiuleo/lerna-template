const path = require('path')
const modulePathMap = {
  '@ts-lernarepo/log': './node_modules/@ts-lernarepo/log/src/index.ts',
  '@ts-lernarepo/plus': '../../node_modules/@ts-lernarepo/plus/src/index.ts',
  // 其他模块
};

module.exports = {
  moduleNameMapper: Object.fromEntries(
    Object.entries(modulePathMap).map(([moduleName, modulePath]) => [
      `^${moduleName}$`,
      path.resolve(__dirname, modulePath),
    ])
  )
};
