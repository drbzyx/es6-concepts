import { Code, Heading, Main, Paragraph, Section } from '../components'

export default function TemplateLiterals() {
  return (
    <Main>
      <Heading>What are Template Literals?</Heading>
      <Section>
        <Paragraph>
          Template literals are a new method of multi-line strings and string
          interopolation. This makes strings a lot easier and prettier.
        </Paragraph>
        <Paragraph>
          For example lets take the <Code>name</Code> 'Dan' and throw him in
          some strings. The "old" way could have been something like this:{' '}
          <Code>
            const string = 'My name is ' + name + ', nice to see you.'
          </Code>{' '}
          but now we can do{' '}
          <Code>
            {'const template = `My name is ${name}, nice to see you.`'}
          </Code>
        </Paragraph>
      </Section>
    </Main>
  )
}
