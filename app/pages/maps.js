import { Code, Heading, Main, Paragraph, Section } from '../components'

export default function Maps() {
  return (
    <Main>
      <Heading>Maps in ES6</Heading>
      <Section>
        <Paragraph>
          A Map in JavaScript is an object with key and value pairs. Maps
          remember the original insertion order of the keys.
        </Paragraph>
        <Paragraph>
          We can check the size of our <Code>const sandwiches = new Map()</Code>{' '}
          by doing <Code>sandwiches.size</Code>.
        </Paragraph>
        <Paragraph>
          Adding values is done using{' '}
          <Code>{`sandwiches.set('Ham', { bread: 'Brown', butter: true })`}</Code>
          .
        </Paragraph>
        <Paragraph>
          We can fetch specific values if we know the key doing{' '}
          <Code>sandwiches.get('key')</Code>, and if we wanted to check first we
          can do <Code>sandwiches.has('key')</Code> because otherwise we may get{' '}
          <Code>undefined</Code>.
        </Paragraph>
        <Paragraph>
          We can also delete map entries using{' '}
          <Code>sandwiches.delete('key')</Code> which returns a boolean based on
          the result of the delete.
        </Paragraph>
        <Paragraph>
          Maps can be iterated using{' '}
          <Code>{'for (const value of sandwiches) { /* ... */ }'}</Code>
        </Paragraph>
      </Section>
    </Main>
  )
}
