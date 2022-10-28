//h:把一个组件变成一个VNode
//render :把VNode渲染成一个 真实的dom节点

import { h, render, VNode } from 'vue';
import {
  notificationType,
  NotificationFun,
  NotificationFunAttrs,
} from './types';
import NotificationCpn from './notification.vue';

const instances: VNode[] = [];

const formatParams = (
  options: NotificationFunAttrs | string,
  type?: string
) => {
  let formatOpts: NotificationFunAttrs = {
    type,
    message: '',
    duration: 4500,
    showClose: false,
  };

  if (typeof options === 'string') {
    formatOpts.message = options;
  } else {
    formatOpts = { ...formatOpts, ...options };
  }
  return formatOpts;
};

const Notification: NotificationFun = function (
  options: NotificationFunAttrs | string
) {
  const formatOpts = formatParams(options);
  let top = 20;
  instances.forEach((vm: VNode) => {
    top += vm?.el?.offsetHeight + 16 || 16;
  });
  //创建一个文档碎片，把所有的新结点附加在其上，然后把文档碎片的内容一次性添加到document中
  const container: any = document.createDocumentFragment();
  const vm = h(NotificationCpn, {
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

Object.values(notificationType).forEach((type) => {
  (Notification as NotificationFun)[type] = (
    options: NotificationFunAttrs | string
  ) => {
    const formatOpts = formatParams(options, type);
    return Notification(formatOpts);
  };
});

export default Notification;
