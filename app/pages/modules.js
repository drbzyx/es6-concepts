import { CodeSnippit, Heading, Main, Paragraph, Section } from '../components'

export default function Modules() {
  return (
    <Main>
      <Heading>What are Modules?</Heading>
      <Section>
        <Paragraph>
          Modules are functions, variables, anything which are in essence
          self-contained code with specific functionality; which is exported and
          then imported throughout an app.
        </Paragraph>
        <Paragraph>
          I like defining whatever I need a file, and export them together in an
          object after the fact. React components are generally default
          exported. For example{' '}
          <CodeSnippit code={`export default function Component() { ... }`} />{' '}
          and <CodeSnippit code={`export { function, variable }`} />.
        </Paragraph>
      </Section>
    </Main>
  )
}
