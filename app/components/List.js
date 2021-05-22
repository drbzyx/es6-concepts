import PropTypes from 'prop-types'
import Link from 'next/link'

export default function List({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <Link href={item.url}>{item.text}</Link>
        </li>
      ))}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}
