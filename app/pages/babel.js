import { Heading, Main, Paragraph, Section } from '../components'

export default function Babel() {
  return (
    <Main>
      <Heading>What is Babel?</Heading>
      <Section>
        <Paragraph>
          Babel is one of the popular transpilers (source-to-source compiler) of
          JavaScript. It is mainly used for converting the ES6 plus code into
          the backward-compatible version of JavaScript that can be run by
          previous JavaScript engines.
        </Paragraph>
      </Section>
    </Main>
  )
}
