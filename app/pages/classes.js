import { Code, Heading, Main, Paragraph, Section } from '../components'

export default function Classes() {
  return (
    <Main>
      <Heading>What are Classes?</Heading>
      <Section>
        <Paragraph>
          Classes are a template for creating objects. These are made with a{' '}
          <Code>constructor</Code> and are encapsulated. Class declarations are
          not hoisted, you might get a <Code>ReferenceError</Code>! I haven't
          really felt the need to use these often since React moved away from
          them.
        </Paragraph>
        <Paragraph>
          Functions of a class are used to perform actions of that specific
          class instance.
        </Paragraph>
        <Paragraph>
          Constructors in classes allocate the memory to the objects of that
          specific class.
        </Paragraph>
      </Section>
    </Main>
  )
}
