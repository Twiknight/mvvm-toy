import helper from 'hyperscript-helpers'
import {h} from 'virtual-dom'

import run from '../src/index'

const {div, label, input, hr, h1} = helper(h)

let model = {
  tpml: (x) => `hello ${x} !`,
  name: ''
}

const viewModel = function (model, notify) {
  return {
    msg: model.tpml(model.name),
    name: model.name,
    oninput: function (ev) {
      model.name = ev.target.value
      notify()
    }
  }
}

const view = function (vm) {
  return div(
              [label({textContent: 'Name: '}),
                input({type: 'text', value: vm.name, oninput: vm.oninput}),
                hr(),
                h1({textContent: vm.msg})
              ]
            )
}

run('#app', {model, view, viewModel})
