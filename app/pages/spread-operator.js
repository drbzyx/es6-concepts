import { CodeSnippit, Heading, Main, Paragraph, Section } from '../components'

export default function SpreadOperator() {
  return (
    <Main>
      <Heading>
        What is the spead operator? <CodeSnippit code="(...)" />
      </Heading>
      <Section>
        <Paragraph>
          The spread operator has a lot of purposes, and starts with the three
          dots. In essence it allows use of expressions more easily. Some of the
          most common uses for the spread operator are: copying and merging of
          arrays and objects, and passing an object into a function. It's used
          quite a lot due to its flexibility, especially in React for handling
          state and props.
        </Paragraph>
        <Paragraph>
          For these examples lets assume we have an array{' '}
          <CodeSnippit code="const array = [1, 2, 3]" /> and an object{' '}
          <CodeSnippit code={`const object = { name: 'Bob', age: '35' }`} />.
        </Paragraph>
        <Paragraph>
          Copying arrays: <CodeSnippit code="const copiedArray = [...array]" />
        </Paragraph>
        <Paragraph>
          Merging arrays:{' '}
          <CodeSnippit code="const combinedArray = [4, 5, ...array, 6]" />
        </Paragraph>
        <Paragraph>
          Merging objects:{' '}
          <CodeSnippit
            code={`const combinedObject = { ...object, hobby: 'Fishing' }`}
          />
        </Paragraph>
        <Paragraph>
          Using an array as an argument:{' '}
          <CodeSnippit code={`const add = (a, b, c) => a + b + c`} /> with{' '}
          <CodeSnippit code="const values = add(...array)" />
        </Paragraph>
      </Section>
    </Main>
  )
}
