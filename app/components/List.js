import PropTypes from 'prop-types'
import Link from 'next/link'

export default function List({ items }) {
  return (
    <ul className="list-inside list-disc">
      {items.map((item, index) => (
        <li key={index}>
          {item.url ? <Link href={item.url}>{item.text}</Link> : item.text}
        </li>
      ))}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}
