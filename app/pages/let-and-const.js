import {
  Code,
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
        <Subheading>Let</Subheading>
        <Paragraph>
          As it was introduced, <Code>let</Code> was the new <Code>var</Code>.
          It's the keyword which allows you to declare a variable with block
          scope.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>Const</Subheading>
        <Paragraph>
          The <Code>const</Code> keyword is similar to let, it's block scoped
          too. Except it's used for values which can't be changed.
        </Paragraph>
      </Section>
    </Main>
  )
}
