import { CodeSnippit, Heading, Main, Paragraph, Section } from '../components'

export default function IIFE() {
  return (
    <Main>
      <Heading>What are immediately invoked function expressions?</Heading>
      <Section>
        <Paragraph>
          These functions are run as soon as they are "defined" and are
          self-executing. They look quite messy{' '}
          <CodeSnippit
            code={`(function () { console.log('I am called immediately') })()`}
          />{' '}
          or <CodeSnippit code={`(() => { /* ... */ })()`} />.
        </Paragraph>
        <Paragraph>
          These functions can have parameters. For example take an array, and
          pass it in.{' '}
          <CodeSnippit code={`((...args) => console.log(args))(...array)`} />.
        </Paragraph>
      </Section>
    </Main>
  )
}
