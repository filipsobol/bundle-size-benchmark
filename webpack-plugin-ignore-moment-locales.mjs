const PLUGIN_NAME = "ignore-moment-locales-plugin"

export class IgnoreMomentLocale {
  /**@type {import('webpack').Compiler} */
  apply(compiler) {
    compiler.hooks.contextModuleFactory.tap(PLUGIN_NAME, (cmf) => {
      cmf.hooks.beforeResolve.tap(PLUGIN_NAME, (data) => {
        if (data.request === './locale' && data.context.includes('node_modules/moment')) {
          return false
        }
      })
    })
  }
}

