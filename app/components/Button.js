import PropTypes from 'prop-types'

export default function Button({ handler, children }) {
  return <button onClick={handler}>{children}</button>
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  handler: PropTypes.func.isRequired,
}
