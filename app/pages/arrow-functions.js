import { Code, Heading, Main, Paragraph, Section } from '../components'

export default function ArrowFunctions() {
  return (
    <Main>
      <Heading>What are Arrow Functions?</Heading>
      <Section>
        <Paragraph>
          Arrow functions are a shorthand notation for writing ES6 functions.
          They are rather flexible in terms of how they are written and reduce
          the code size. Small arrow functions don't need to use the{' '}
          <Code>return</Code> keyword.
        </Paragraph>
        <Paragraph>
          Example of a simple arrow function which console logs some arguements:{' '}
          <Code>{`const printArgs = (...args) => { console.log(args) }`}</Code>
        </Paragraph>
        <Paragraph>
          Due to the fact this is a one liner, you could ditch the{' '}
          <Code>{`{ ... }`}</Code> like:{' '}
          <Code>{`const returnArgs = (...args) => args`}</Code>
        </Paragraph>
        <Paragraph>
          They can be written anonymously too, just like regular functions.
          Instead of doing{' '}
          <Code>{`function() { console.log('something')}`}</Code> we could do{' '}
          <Code>{`() => console.log('wow')`}</Code>
        </Paragraph>
        <Paragraph>
          Arrow functions are context bound. We wouldn't need to implicitly bind{' '}
          <Code>this</Code> because it is performed automatically by the arrow
          function, <Code>this</Code> representing the object that defined the
          function.
        </Paragraph>
      </Section>
    </Main>
  )
}
