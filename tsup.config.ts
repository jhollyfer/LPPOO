import { fixImportsPlugin } from 'esbuild-fix-imports-plugin'
import { copyFile, glob, mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['**/*.ts', '!node_modules/**', '!build/**', '!tsup.config.ts'],
  ignoreWatch: ['node_modules'],
  outDir: 'build',
  target: 'es2024',
  format: ['esm'],
  bundle: false,
  clean: true,
  esbuildPlugins: [fixImportsPlugin()],
  esbuildOptions(options) {
    options.outbase = '.'
  },
  // banner: {
  //   js: "import 'reflect-metadata';",
  // },
  async onSuccess(): Promise<void> {
    const patterns: ReadonlyArray<{ pattern: string; label: string }> = [
      { pattern: 'package.json', label: 'package.json' },
    ]

    for (const { pattern, label } of patterns) {
      const matches = await Array.fromAsync(glob(pattern))
      for (const src of matches) {
        const dst = join('build', src)
        await mkdir(dirname(dst), { recursive: true })
        await copyFile(src, dst)
      }
      console.info(
        `[tsup:onSuccess] copied ${matches.length} ${label} -> build/`,
      )
    }
  },
})
