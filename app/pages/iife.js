import { Code, Heading, Main, Paragraph, Section } from '../components'

export default function IIFE() {
  return (
    <Main>
      <Heading>What are immediately invoked function expressions?</Heading>
      <Section>
        <Paragraph>
          These functions are run as soon as they are "defined" and are
          self-executing. They look quite messy{' '}
          <Code>{`(function () { console.log('I am called immediately') })()`}</Code>{' '}
          or <Code>{`(() => { /* ... */ })()`}</Code>.
        </Paragraph>
        <Paragraph>
          These functions can have parameters. For example take an array, and
          pass it in.{' '}
          <Code>{`((...args) => console.log(args))(...array)`}</Code>
        </Paragraph>
      </Section>
    </Main>
  )
}
