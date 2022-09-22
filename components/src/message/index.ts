import Message from './message.js'
// import { withInstall } from '@/utils'
// const Message = withInstall(message)
// export default Message

export default {
  install(app: any) {
    // vue3.0如果你想挂载全局的属性，能够通过组件实例调用的属性   this.$message(element-ui)
    app.config.globalProperties.$message = Message// 原型函数
  }
}