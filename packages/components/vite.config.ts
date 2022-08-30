import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
export default defineConfig(
  {
    build: {
      target: 'modules',
      //打包文件目录
      outDir: "es",
      //压缩
      minify: true,
      //css分离
      //cssCodeSplit: true,
      rollupOptions: {
        //忽略打包vue源码文件和.less文件
        external: ['vue', /\.less/],
        input: ['src/index.ts'],
        output: [
          {
            format: 'es',
            //不用打包成.es.js,这里我们想把它打包成.js
            entryFileNames: '[name].js',
            //让打包目录和我们目录对应
            preserveModules: true,
            //配置打包根目录
            dir: resolve(__dirname, './dist/es'),
            preserveModulesRoot: 'dist'
          },
          {
            format: 'cjs',
            //不用打包成.mjs
            entryFileNames: '[name].js',
            //让打包目录和我们目录对应
            preserveModules: true,
            //配置打包根目录
            dir: resolve(__dirname, './dist/lib'),
            preserveModulesRoot: 'src'
          }
        ]
      },
      lib: {
        entry: './index.ts',
        formats: ['es', 'cjs']
      }
    },
    plugins: [
      vue(),
      dts({
        outputDir: resolve(__dirname, './dist/es'),
        //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
        tsConfigFilePath: '../../tsconfig.json'
      }),
      //因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
      dts({
        outputDir: resolve(__dirname, './dist/lib'),
        tsConfigFilePath: '../../tsconfig.json'
      }),

      {
        name: 'style',
        generateBundle(config, bundle) {
          //这里可以获取打包后的文件目录以及代码code
          const keys = Object.keys(bundle)

          for (const key of keys) {
            const bundler: any = bundle[key as any]
            //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件

            this.emitFile({
              type: 'asset',
              fileName: key,//文件名名不变
              source: bundler.code.replace(/\.less/g, '.css')
            })
          }
        }
      }

    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    }
  }
)