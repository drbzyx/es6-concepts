import {
  CodeSnippit,
  Heading,
  Main,
  Paragraph,
  Section,
  Subheading,
} from '../components'

export default function LetAndConst() {
  return (
    <Main>
      <Heading>What is let and const?</Heading>
      <Section>
        <Subheading>
          The mutable <CodeSnippit code="let" />
        </Subheading>
        <Paragraph>
          As it was introduced, <CodeSnippit code="let" /> was the new{' '}
          <CodeSnippit code="var" />. It is similar to the{' '}
          <CodeSnippit code="var" /> keyword except it provides block scoping.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>
          The immutable <CodeSnippit code="const" />
        </Subheading>
        <Paragraph>
          The <CodeSnippit code="const" /> keyword is similar to{' '}
          <CodeSnippit code="let" />, it's block scoped too. Except it's used
          for values which can't be changed; hence immutable.
        </Paragraph>
      </Section>
    </Main>
  )
}
