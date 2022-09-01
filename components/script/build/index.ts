import { src, dest } from 'gulp'
import { componentPath } from '../utils/paths'
import less from "gulp-less"
import autoprefixer from 'gulp-autoprefixer'
import run from "../utils/run"

//删除dist
export const removeDist = () => {
    return run(`rm -rf ${componentPath}/dist`, componentPath)
}

//处理样式
export const buildStyle = () => {
    return src(`${componentPath}/src/**/style/**.less`)
        .pipe(less())
        .pipe(
            autoprefixer()
        )
        .pipe(dest(`${componentPath}/dist/lib/src`))
        .pipe(dest(`${componentPath}/dist/es/src`));
};

//打包组件
export const buildComponent = async () => {
    run('pnpm run build', componentPath)
}