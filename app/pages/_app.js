import 'tailwindcss/tailwind.css'
import { MenuNavigation } from '../components'

const items = [
  { url: '/ecma-2015', text: 'What is ES6 or ECMAScript 2015?' },
  { url: '/let-and-const', text: 'What is let and const?' },
  { url: '/arrow-functions', text: 'What are arrow functions?' },
  { url: '/spread-operator', text: 'What is the spead operator?' },
  { url: '/template-literals', text: 'What are template literals?' },
  { url: '/destructuring', text: 'What is destructuring?' },
  { url: '/iife', text: 'What are immediately invoked function expressions?' },
  { url: '/classes', text: 'What are classes?' },
  { url: '/generators', text: 'What are generator functions?' },
  { url: '/loops', text: 'What are the ES6 loops?' },
  { url: '/collections', text: 'What are the new collections?' },
  { url: '/promises', text: 'What are promises?' },
  { url: '/callbacks', text: 'What are callbacks?' },
  { url: '/modules', text: 'What are modules?' },
  { url: '/hoisting', text: 'What is hoisting?' },
  { url: '/array-methods', text: 'What are the new array methods?' },
  { url: '/string-methods', text: 'What are the new string methods?' },
  { url: '/babel', text: 'What is Babel?' },
  { url: '/webpack', text: 'What is Webpack?' },
]

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen md:flex">
      <MenuNavigation items={items} />
        <div className="flex-1 p-10 text-xl md:mr-20">
          <Component {...pageProps} />
        </div>
    </div>
  )
}

export default MyApp
