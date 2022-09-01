import { componentPath } from '../utils/paths'
import run from '../utils/run'
//发布组件
export const publish = async () => {
  //先给transitpkg升个版本
  await run('pnpm version patch', `${componentPath}`)
  //在dist下执行发布命令
  await run('npm publish --access=public', `${componentPath}`)
  // run('pnpm publish')

}
