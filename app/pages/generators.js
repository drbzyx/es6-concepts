import { CodeSnippit, Heading, Main, Paragraph, Section } from '../components'

export default function Generators() {
  return (
    <Main>
      <Heading>What are Generators?</Heading>
      <Section>
        <Paragraph>
          Generators are a new function introduced by ES6 which can be suspended
          and return different values depending which time it has been called.
          Generator functions are denoted using an asterisk;{' '}
          <CodeSnippit code={'function* generateSomething() { ... }'} />.
        </Paragraph>
        <Paragraph>
          The keyword <CodeSnippit code="yield" /> is used to suspend the
          function and return a value. Calling the function again would resume
          from after that statement.
        </Paragraph>
        <Paragraph>
          The <CodeSnippit code="next()" /> method is the main method of these
          generators. Calling this method resumes the generator function up
          until the next <CodeSnippit code="yield" />. This function returns the{' '}
          <CodeSnippit code="value" /> from the next{' '}
          <CodeSnippit code="yield" />, and a <CodeSnippit code="done" />{' '}
          boolean to say whether there is more statements to come.
        </Paragraph>
        <Paragraph>
          You can even use the <CodeSnippit code="for...of" /> loop to iterate
          over values returned from generator functions which is quite cool.
        </Paragraph>
      </Section>
    </Main>
  )
}
