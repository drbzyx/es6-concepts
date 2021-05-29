import { Code, Heading, Main, Paragraph, Section } from '../components'

export default function Generators() {
  return (
    <Main>
      <Heading>What are Generators?</Heading>
      <Section>
        <Paragraph>
          Generators are a new function introduced by ES6 which can be suspended
          and return different values depending which time it has been called.
          Generator functions are denoted using an asterisk;{' '}
          <Code>{'function* generateSomething() { ... }'}</Code>.
        </Paragraph>
        <Paragraph>
          The keyword <Code>yield</Code> is used to suspend the function and
          return a value. Calling the function again would resume from after
          that statement.
        </Paragraph>
        <Paragraph>
          The <Code>next()</Code> method is the main method of these generators.
          Calling this method resumes the generator function up until the next{' '}
          <Code>yield</Code>. This function returns the <Code>value</Code> from
          the next <Code>yield</Code>, and a <Code>done</Code> boolean to say
          whether there is more statements to come.
        </Paragraph>
        <Paragraph>
          You can even use the <Code>for...of</Code> loop to iterate over values
          returned from generator functions which is quite cool.
        </Paragraph>
      </Section>
    </Main>
  )
}
