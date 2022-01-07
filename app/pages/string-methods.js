import { CodeSnippit, Heading, Main, Paragraph, Section } from '../components'

export default function StringMethods() {
  return (
    <Main>
      <Heading>What are the new string methods?</Heading>
      <Section>
        <Paragraph>
          Strings have plenty of methods, but ES6 introduced four new ones;{' '}
          <CodeSnippit code="startsWith(string)" />,{' '}
          <CodeSnippit code="endsWith(string)" />,{' '}
          <CodeSnippit code="includes(string)" /> and{' '}
          <CodeSnippit code="repeat(int)" />.
        </Paragraph>
      </Section>
    </Main>
  )
}
