//h:把一个组件变成一个VNode
//render :把VNode渲染成一个 真实的dom节点

import { h, render, VNode } from 'vue';
import { messageType, MessageFun, MessageFunAttrs } from './types';
import MessageCpn from './message.vue';

const instances: VNode[] = [];

const formatParams = (
  options: MessageFunAttrs | string,
  type: string = messageType.INFO
) => {
  let formatOpts: MessageFunAttrs = {
    type,
    message: '',
    duration: 3000,
    showClose: false,
  };
  if (typeof options === 'string') {
    formatOpts.message = options;
  } else {
    formatOpts = { ...formatOpts, ...options };
  }
  return formatOpts;
};

const Message: MessageFun = function (options: MessageFunAttrs | string) {
  const formatOpts = formatParams(options);
  let top = 20;
  instances.forEach((vm: VNode) => {
    top += vm?.el?.offsetHeight + 16 || 16;
  });
  //创建一个文档碎片，把所有的新结点附加在其上，然后把文档碎片的内容一次性添加到document中
  const container: any = document.createDocumentFragment();
  const vm = h(MessageCpn, {
    ...formatOpts,
    top,
    onClose() {
      close(vm);
    },
    onDestroy() {
      render(null, container);
    },
  });
  render(vm, container);
  document.body.appendChild(container);
  instances.push(vm);
};

const close = (vm: VNode) => {
  const index = instances.findIndex((ins) => ins === vm);
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
};

Object.values(messageType).forEach((type) => {
  (Message as MessageFun)[type] = (options: MessageFunAttrs | string) => {
    const formatOpts = formatParams(options, type);
    return Message(formatOpts);
  };
});

export default Message;
