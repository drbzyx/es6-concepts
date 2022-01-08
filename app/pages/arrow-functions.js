import { CodeSnippit, Heading, Main, Paragraph, Section } from '../components'

export default function ArrowFunctions() {
  return (
    <Main>
      <Heading>What are Arrow Functions?</Heading>
      <Section>
        <Paragraph>
          Arrow functions are a shorthand notation for writing ES6 functions.
          They are rather flexible in terms of how they are written and reduce
          the code size. Small arrow functions don't need to use the{' '}
          <CodeSnippit code="return" /> keyword.
        </Paragraph>
        <Paragraph>
          Example of a simple arrow function which console logs some arguements:{' '}
          <CodeSnippit
            code={`const printArgs = (...args) => { console.log(args) }`}
          />
          .
        </Paragraph>
        <Paragraph>
          Due to the fact this is a one liner, you could ditch the{' '}
          <CodeSnippit code={`{ ... }`} /> like:{' '}
          <CodeSnippit code={`const returnArgs = (...args) => args`} />.
        </Paragraph>
        <Paragraph>
          They can be written anonymously too, just like regular functions.
          Instead of doing{' '}
          <CodeSnippit code={`function() { console.log('something')}`} /> we
          could do <CodeSnippit code={`() => console.log('wow')`} />
        </Paragraph>
        <Paragraph>
          Arrow functions are context bound. We wouldn't need to implicitly bind{' '}
          <CodeSnippit code="this" /> because it is performed automatically by
          the arrow function, <CodeSnippit code="this" /> representing the
          object that defined the function.
        </Paragraph>
      </Section>
    </Main>
  )
}
