import { CodeSnippit, Heading, Main, Paragraph, Section } from '../components'

export default function Classes() {
  return (
    <Main>
      <Heading>What are Classes?</Heading>
      <Section>
        <Paragraph>
          Classes are a template for creating objects. These are made with a{' '}
          <CodeSnippit code="constructor" /> and are encapsulated. Class
          declarations are not hoisted, you might get a{' '}
          <CodeSnippit code="ReferenceError" />! I haven't really felt the need
          to use these often since React moved away from them.
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
