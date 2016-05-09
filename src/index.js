import {h, patch, diff, create} from 'virtual-dom'

const render = function (root, left, right) {
  patch(root, diff(left, right))
}

/**
* @param {Object} model
* @param {Function} view
* @param {Function} viewModel
*/
export default function run (rootSelector, {model, view, viewModel}) {
  let left = h('div')
  let right
  let root = create(left)
  document.querySelector(rootSelector).appendChild(root)
  const notify = function notify () {
    left = right
    right = view(viewModel(model, notify))
    render(root, left, right)
  }

  right = view(viewModel(model, notify))
  render(root, left, right)
}
