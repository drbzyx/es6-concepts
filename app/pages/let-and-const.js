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
        <Subheading>
          The mutable <Code>let</Code>
        </Subheading>
        <Paragraph>
          As it was introduced, <Code>let</Code> was the new <Code>var</Code>.
          It is similar to the <Code>var</Code> keyword except it provides block
          scoping.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>
          The immutable <Code>const</Code>
        </Subheading>
        <Paragraph>
          The <Code>const</Code> keyword is similar to let, it's block scoped
          too. Except it's used for values which can't be changed.
        </Paragraph>
      </Section>
    </Main>
  )
}
