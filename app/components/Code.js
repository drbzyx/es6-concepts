import PropTypes from 'prop-types'

export default function Code({ children }) {
  return <code>{children}</code>
}

Code.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
