//h:把一个组件变成一个VNode
//render :把VNode渲染成一个 真实的dom节点

import { h, render } from 'vue';
import types from './types';
import MessageCpn from './Message.vue';
const instances = [];
function Message(options) {
  let top = 20;
  instances.forEach((vm) => {
    top += vm.el.offsetHeight + 16 || 16;
  });
  //创建一个文档碎片，把所有的新结点附加在其上，然后把文档碎片的内容一次性添加到document中
  const container = document.createDocumentFragment();
  const vm = h(MessageCpn, {
    ...options,
    top,
    onClose() {
      close(vm);
    },
    onDestroy() {
      console.log('onDestroy');
      render(null, container);
    },
  });
  render(vm, container);
  document.body.appendChild(container);
  instances.push(vm);
}
function close(vm) {
  console.log('closevm', instances);
  const index = instances.findIndex((ins) => ins === vm);
  console.log('index', index);
  if (index === -1) {
    return;
  }
  instances.splice(index, 1);

  for (let start = index; start < instances.length; start++) {
    const cpn = instances[start].component;
    cpn.props.top -= vm.el.offsetHeight + 16;
  }
}
Object.values(types).forEach((type) => {
  Message[type] = (options) => {
    options.type = type;
    return Message(options);
  };
});

export default Message;
