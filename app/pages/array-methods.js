import {
  CodeSnippit,
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
        <Subheading>
          <CodeSnippit code="Array.from()" />
        </Subheading>
        <Paragraph>
          It converts array-like values and iterable values such as{' '}
          <CodeSnippit code="new Map()" /> and <CodeSnippit code="new Set()" />{' '}
          into arrays.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>
          <CodeSnippit code="Array.of()" />
        </Subheading>
        <Paragraph>
          It creates an instance from a variable number of arguments instead of
          the number of arguments or type of arguments. For example{' '}
          <CodeSnippit code="const array = Array.of(10)" /> will create an array
          with one value of <CodeSnippit code="10" />.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>
          <CodeSnippit code="Array.prototype.copyWithin()" />
        </Subheading>
        <Paragraph>
          The <CodeSnippit code="copyWithin()" /> method copies array elements
          to another position in the array, overwriting the existing values. If
          we had the array{' '}
          <CodeSnippit code="const array = ['Volvo', 'BMW', 'Tesla', 'Audi']" />
          , we could copy the first two values into the last two values by doing{' '}
          <CodeSnippit code="const newArray = array.copyWithin(2)" />. This
          returns <CodeSnippit code={`(4) ["Volvo", "BMW", "Volvo", "BMW"]`} />.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>
          <CodeSnippit code="Array.prototype.find()" />
        </Subheading>
        <Paragraph>
          It finds a value from an array, based on the condition that is passed
          to this method. If we have the following array{' '}
          <CodeSnippit code="const numArray = [1, 4, 10, 25]" />, we can find
          the first element larger than 5 doing:{' '}
          <CodeSnippit
            code={`const found = numArray.find((element) => element > 5)`}
          />{' '}
          which would return <CodeSnippit code="10" />. Replacing{' '}
          <CodeSnippit code="find" /> with <CodeSnippit code="filter" /> would
          return both <CodeSnippit code="10" /> and <CodeSnippit code="25" />.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>
          <CodeSnippit code="Array.prototype.findIndex()" />
        </Subheading>
        <Paragraph>
          This function returns the index of the first element of the given
          array that satisfies the given condition. For example if we have the
          following array <CodeSnippit code="const numArray = [1, 4, 10, 25]" />
          , we can find the first element larger than 5,{' '}
          <CodeSnippit
            code={`const found = numArray.find((element) => element > 5)`}
          />{' '}
          which would return <CodeSnippit code="2" />.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>
          <CodeSnippit code="Array.prototype.entries()" />
        </Subheading>
        <Paragraph>
          It returns an array iterator object, which can be used to loop through
          keys and values of arrays.{' '}
          <CodeSnippit code="const entries = stringArray.entries()" /> which
          then can be iterated on{' '}
          <CodeSnippit code={`for (const i of entries) { console.log(i) }`} />{' '}
          which logs like: <CodeSnippit code={`(2) [0, "Volvo"]`} /> assuming an
          array of{' '}
          <CodeSnippit
            code={`const stringArray = ['Volvo', 'BMW', 'Tesla', 'Audi']`}
          />
          .
        </Paragraph>
      </Section>
      <Section>
        <Subheading>
          <CodeSnippit code="Array.prototype.keys()" />
        </Subheading>
        <Paragraph>
          It returns an array iterator object along with the keys of the array;{' '}
          <CodeSnippit code="const keys = stringArray.keys()" /> which can be
          then looped over;{' '}
          <CodeSnippit code={`for (const i of keys) { console.log(i) }`} />.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>
          <CodeSnippit code="Array.prototype.values()" />
        </Subheading>
        <Paragraph>
          It returns an array iterator object along with the values of the
          array; <CodeSnippit code="const values = stringArray.values()" />{' '}
          which can be then looped over;{' '}
          <CodeSnippit code={`for (const i of values) { console.log(i) }`} />.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>
          <CodeSnippit code="Array.prototype.fill()" />
        </Subheading>
        <Paragraph>
          It fills the specified array elements with a static value. This can
          replace the entire array, for example{' '}
          <CodeSnippit code="const filledArray = stringArray.fill('Fiat')" />{' '}
          which would return{' '}
          <CodeSnippit code={`(4) ["Fiat", "Fiat", "Fiat", "Fiat"]`} />. The
          start and end can be specified as second and third arguments;{' '}
          <CodeSnippit code="fill(value: string, start?: number, end?: number)" />
          .
        </Paragraph>
      </Section>
    </Main>
  )
}
