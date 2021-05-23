import {
  Code,
  Heading,
  Main,
  Paragraph,
  Section,
  Subheading,
} from '../components'

export default function ArrayMethods() {
  return (
    <Main>
      <Heading>What are the new array methods?</Heading>
      <Section>
        <Paragraph>ES6 introduced 9 new array methods.</Paragraph>
      </Section>
      <Section>
        <Subheading>Array.from()</Subheading>
        <Paragraph>
          It converts array-like values and iterable values such as{' '}
          <Code>new Map()</Code> and <Code>new Set()</Code> into arrays.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>Array.of()</Subheading>
        <Paragraph>
          It creates an instance from a variable number of arguments instead of
          the number of arguments or type of arguments. For example{' '}
          <Code>const array = Array.of(10)</Code> will create an array with one
          value of <Code>10</Code>.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>Array.prototype.copyWithin()</Subheading>
        <Paragraph>
          The <Code>copyWithin()</Code> method copies array elements to another
          position in the array, overwriting the existing values. If we had the
          array <Code>const array = ['Volvo', 'BMW', 'Tesla', 'Audi']</Code>, we
          could copy the first two values into the last two values by doing{' '}
          <Code>const newArray = array.copyWithin(2)</Code>. This returns{' '}
          <Code>(4) ["Volvo", "BMW", "Volvo", "BMW"]</Code>.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>Array.prototype.find()</Subheading>
        <Paragraph>
          It finds a value from an array, based on the condition that is passed
          to this method. If we have the following array{' '}
          <Code>const numArray = [1, 4, 10, 25]</Code>, we can find the first
          element larger than 5 doing:{' '}
          <Code>{`const found = numArray.find((element) => element > 5)`}</Code>{' '}
          which would return <Code>10</Code>. Replacing <Code>find</Code> with{' '}
          <Code>filter</Code> would return both <Code>10</Code> and{' '}
          <Code>25</Code>.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>Array.prototype.findIndex()</Subheading>
        <Paragraph>
          <Code>Array.prototype.findIndex()</Code> returns the index of the
          first element of the given array that satisfies the given condition.
          If we have the following array{' '}
          <Code>const numArray = [1, 4, 10, 25]</Code>, we can find the first
          element larger than 5,{' '}
          <Code>{`const found = numArray.find((element) => element > 5)`}</Code>{' '}
          which would return <Code>2</Code>.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>Array.prototype.entries()</Subheading>
        <Paragraph>
          It returns an array iterator object, which can be used to loop through
          keys and values of arrays.{' '}
          <Code>const entries = stringArray.entries()</Code> which then can be
          iterated on{' '}
          <Code>{`for (const i of entries) { console.log(i) }`}</Code> which
          logs like: <Code>(2) [0, "Volvo"]</Code> assuming an array of{' '}
          <Code>const stringArray = ['Volvo', 'BMW', 'Tesla', 'Audi']</Code>.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>Array.prototype.keys()</Subheading>
        <Paragraph>
          It returns an array iterator object along with the keys of the array;{' '}
          <Code>const keys = stringArray.keys()</Code> which can be then looped
          over; <Code>{`for (const i of keys) { console.log(i) }`}</Code>.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>Array.prototype.values()</Subheading>
        <Paragraph>
          It returns an array iterator object along with the values of the
          array; <Code>const values = stringArray.values()</Code> which can be
          then looped over;{' '}
          <Code>{`for (const i of values) { console.log(i) }`}</Code>.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>Array.prototype.fill()</Subheading>
        <Paragraph>
          It fills the specified array elements with a static value. This can
          replace the entire array, for example{' '}
          <Code>const filledArray = stringArray.fill('Fiat')</Code> which would
          return <Code>(4) ["Fiat", "Fiat", "Fiat", "Fiat"]</Code>. The start
          and end can be specified as second and third arguments;{' '}
          <Code>fill(value: string, start?: number, end?: number)</Code>
        </Paragraph>
      </Section>
    </Main>
  )
}
