/**
 *
 * If
 *
 */

import Proptypes from 'prop-types'

function If(props) {
  return props.condition ? props.children : props.otherwise
}

If.propsTypes = {
  condition: Proptypes.bool,
  otherwise: Proptypes.oneOfType([
    Proptypes.arrayOf(Proptypes.node),
    Proptypes.node
  ]),
  children: Proptypes.oneOfType([
    Proptypes.arrayOf(Proptypes.node),
    Proptypes.node
  ])
}
If.defaultProps = {
  otherwise: null
}
export default If
