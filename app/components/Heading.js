import Link from 'next/link'
import PropTypes from 'prop-types'

export default function Heading({ children }) {
  return (
    <h1>
      <Link href='/'>Index</Link> {children}
    </h1>
  )
}

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
