import {
  Code,
  Heading,
  Main,
  Paragraph,
  Section,
  Subheading,
} from '../components'

export default function Loops() {
  return (
    <Main>
      <Heading>Loops in ES6</Heading>
      <Section>
        <Subheading>
          For values use <Code>For...of</Code>
        </Subheading>
        <Paragraph>
          Loops over an arrays values. Pretty simple really. Take an array of
          primes <Code> const primes = [2, 3, 5, 7]</Code> and loop over it:{' '}
          <Code>{`for (const value of primes) { console.log(value) }`}</Code>
        </Paragraph>
      </Section>
      <Section>
        <Subheading>
          For keys use <Code>For...in</Code>
        </Subheading>
        <Paragraph>
          Loops over an arrays or objects keys, which is quite cool. Take the
          same array as above and we can do{' '}
          <Code>{`for (const key in primes) { console.log(key) }`}</Code> and
          note that these are of type <Code>string</Code>. But we can also get
          the values of objects this way by doing:{' '}
          <Code>{`for (const key in object) { console.log(object[key]) }`}</Code>
        </Paragraph>
      </Section>
    </Main>
  )
}
