import {
  CodeSnippit,
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
          For values use: <CodeSnippit code="For...of" />
        </Subheading>
        <Paragraph>
          Loops over an arrays values. Pretty simple really. Take an array of
          primes <CodeSnippit code="const primes = [2, 3, 5, 7]" /> and loop
          over it:{' '}
          <CodeSnippit
            code={`for (const value of primes) { console.log(value) }`}
          />
        </Paragraph>
      </Section>
      <Section>
        <Subheading>
          For keys use: <CodeSnippit code="For...in" />
        </Subheading>
        <Paragraph>
          Loops over an arrays or objects keys, which is quite cool. Take the
          same array as above and we can do{' '}
          <CodeSnippit
            code={`for (const key in primes) { console.log(key) }`}
          />{' '}
          and note that these are of type <CodeSnippit code="string" />. But we
          can also get the values of objects this way by doing:{' '}
          <CodeSnippit
            code={`for (const key in object) { console.log(object[key]) }`}
          />
          .
        </Paragraph>
      </Section>
    </Main>
  )
}
