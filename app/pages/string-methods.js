import { Code, Heading, Main, Paragraph, Section } from '../components'

export default function StringMethods() {
  return (
    <Main>
      <Heading>What are the new string methods?</Heading>
      <Section>
        <Paragraph>
          Strings have plenty of methods, but ES6 introduced four new ones;{' '}
          <Code>startsWith(string)</Code>, <Code>endsWith(string)</Code>,{' '}
          <Code>includes(string)</Code> and <Code>repeat(int)</Code>.
        </Paragraph>
      </Section>
    </Main>
  )
}
