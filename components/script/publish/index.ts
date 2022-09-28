import { src, dest } from 'gulp'
import { componentPath, projectPath } from '../utils/paths'
import run from '../utils/run'
//发布组件
export const publish = async () => {
  //先给transitpkg升个版本
  await run('pnpm version patch', `${componentPath}/transitpkg`)
  //复制到dist目录
  await copypackage()
  //复制readme
  await copyReadme()
  //在dist下执行发布命令
  await run('npm publish --access=public', `${componentPath}/dist`)
  // run('pnpm publish')

}

// 复制readme
export const copyReadme = async () => {
  return src(`${projectPath}/README.md`)
    .pipe(dest(`${componentPath}/dist`))
}


//复制发布时的package.json
const copypackage = async () => {
  return src(`${componentPath}/transitpkg/**`).pipe(dest(`${componentPath}/dist/`));
};