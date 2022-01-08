import PropTypes from 'prop-types'

export default function Button({ handler, children }) {
  return (
    <button
      onClick={handler}
      className="bg-green-500 hover:bg-green-400 text-white py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mr-2 disabled:opacity-50"
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  handler: PropTypes.func.isRequired,
}
