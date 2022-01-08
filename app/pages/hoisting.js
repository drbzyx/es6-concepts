import { CodeSnippit, Heading, Main, Paragraph, Section } from '../components'

export default function Hoisting() {
  return (
    <Main>
      <Heading>What is Hoisting?</Heading>
      <Section>
        <Paragraph>
          Hoisting is the default behaviour of moving declarations (Functions
          and Variables) to the top of the current scope, whether it's the
          script or a function. Variables using <CodeSnippit code="let" /> or{' '}
          <CodeSnippit code="const" /> are hoisted to top of the block, but they
          aren't initialized; so the block of code is aware of these variables,
          but they can't be used until they are declared. Classes aren't
          hoisted.
        </Paragraph>
      </Section>
    </Main>
  )
}
