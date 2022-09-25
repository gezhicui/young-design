//h:把一个组件变成一个VNode
//render :把VNode渲染成一个 真实的dom节点

import { h, render, VNode } from 'vue';
import { messageType, MessageProps } from './types';
import MessageCpn from './Message.vue';

const instances: VNode[] = [];
function Message(options: MessageProps | string) {
  // 处理入参
  let optionsObj = {}
  if (typeof options === 'string') {
    optionsObj = {
      message: options
    }
  } else {
    optionsObj = options
  }

  let top = 20;
  instances.forEach((vm: VNode) => {
    top += vm?.el?.offsetHeight + 16 || 16;
  });
  //创建一个文档碎片，把所有的新结点附加在其上，然后把文档碎片的内容一次性添加到document中
  const container: any = document.createDocumentFragment();
  const vm = h(MessageCpn, {
    ...optionsObj,
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
function close(vm: VNode) {
  console.log('closevm', instances);
  const index = instances.findIndex((ins) => ins === vm);
  console.log('index', index);
  if (index === -1) {
    return;
  }
  instances.splice(index, 1);

  for (let start = index; start < instances.length; start++) {
    const cpn: any = instances[start].component;
    if (cpn) {
      cpn.props.top -= vm?.el?.offsetHeight + 16;
    }

  }
}
Object.values(messageType).forEach((type) => {
  Message[type] = (options: MessageProps) => {
    options.type = type;
    return Message(options);
  };
});

export default Message;
