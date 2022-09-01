import { componentPath } from '../utils/paths'
import run from '../utils/run'
import { src, dest } from 'gulp'
//复制
const copypackage = async () => {
    return src(`${componentPath}/transitpkg/**`).pipe(dest(`${componentPath}/dist/`));
};
//发布组件
export const publish = async () => {
    //先给transitpkg升个版本
    await run('pnpm version patch', `${componentPath}/transitpkg`)
    //复制到dist目录
    await copypackage()
    //在dist下执行发布命令
    await run('npm publish --access=public', `${componentPath}/dist`)
    // run('pnpm publish')

}
