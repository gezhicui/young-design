import { h, render } from 'vue'
import types from './types'
import MessageCpn from './Message.vue'

const instances = []

function Message(options) {
    let top = 20;

    instances.forEach(vm => {
        top += (vm.el.offsetHeight + 16) || 16
    });

    const container = document.createDocumentFragment()

    const vm = h(MessageCpn, {
        ...options,
        top,
        onClose() {
            close(vm)
        },
        onDestroy() {
            render(null, container)
        }
    })

    render(vm, container)
    document.body.appendChild(container)

    instances.push(vm)
}

function close(vm) {
    const index = instances.findIndex(ins => ins === vm)
    if (index === -1) {
        return;
    }

    instances.splice(index, 1)

    for (let start = index; start < instances.length; start++) {
        const cpn = instances[start].component
        cpn.props.top -= vm.el.offsetHeight + 16
    }
}

Object.values(types).forEach(type => {
    Message[type] = (options) => {
        options.type = type;
        return Message(options)
    }
})


export default Message