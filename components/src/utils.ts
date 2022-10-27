import type { App, Plugin } from 'vue';
type SFCWithInstall<T> = T & Plugin;

/**
 * 组件注册install方法
 */
export const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App): void => {
    //注册组件
    app.component((comp as any).name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
};

/**
 * 将数字尺寸改为字符串
 * @param size 尺寸
 * @param target 单位
 * @returns
 */
export const sizeChange = (size: string | number, target = 'px'): string => {
  if (typeof size === 'string' && size.includes(target)) {
    return size;
  }
  return size + target;
};
