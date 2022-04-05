module.exports = ({ types: t }) => {
  return {
    visitor: {
      Identifier(path) {
        const parentIsIf = t.isIfStatement(path.parentPath)
        const isDEBUG = path.node.name === 'DEBUG'
        if (parentIsIf && isDEBUG) {
          const stringPath = t.stringLiteral('DEBUG')
          path.replaceWith(stringPath)
        }
      },
      StringLiteral(path, { opts }) {
        const parentIsIf = t.isIfStatement(path.parentPath)
        const isDEBUG = path.node.value === 'DEBUG'
        const isProd = process.env.NODE_ENV === 'production'
        if (parentIsIf && isDEBUG && opts.isProd) {
          path.parentPath.remove()
        }
      },
    },
  }
}
