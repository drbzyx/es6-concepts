import { Heading, List, Main, Paragraph } from '../components'

export default function Home() {
  return (
    <Main>
      <Heading>Home</Heading>
      <Paragraph>
        I'm covering some of the common ES6 interview questions. Mostly as
        preparation for myself and to learn the ins and outs better. I've been
        using these concepts for years but never taken the time to understand
        why.
      </Paragraph>
      <List
        items={[
          { url: '/ecma-2015', text: 'What is ES6 or ECMAScript 2015?' },
          { url: '/let-and-const', text: 'What is let and const?' },
          { url: '/arrow-functions', text: 'What are arrow functions?' },
          { url: '/spread-operator', text: 'What is the spead operator?' },
          { url: '/template-literals', text: 'What are template literals?' },
          { url: '/destructuring', text: 'What is destructuring?' },
          {
            url: '/iife',
            text: 'What are immediately invoked function expressions?',
          },
          { url: '/classes', text: 'What are classes?' },
          { url: '/generators', text: 'What are generator functions?' },
          { url: '/loops', text: 'What are the ES6 loops?' },
          { url: '/maps', text: 'What are maps?' },
          { url: '/weak-things', text: 'What are weaksets and weakmaps?' },
          { url: '/promises', text: 'What are promises?' },
          { url: '/callbacks', text: 'What are callbacks?' },
          { url: '/modules', text: 'What are modules?' },
          { url: '/hoisting', text: 'What is hoisting?' },
          { url: '/array-methods', text: 'What are the new array methods?' },
          { url: '/string-methods', text: 'What are the new string methods?' },
          { url: '/babel', text: 'What is Babel?' },
          { url: '/webpack', text: 'What is Webpack?' },
        ]}
      />
    </Main>
  )
}
