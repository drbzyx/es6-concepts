import { Code, Heading, Main, Paragraph, Section } from '../components'

export default function SpreadOperator() {
  return (
    <Main>
      <Heading>
        What is the spead operator? <Code>(...)</Code>
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
          For these examples lets assume we have an array
          <Code>const array = [1, 2, 3]</Code> and an object{' '}
          <Code>{`const object = { name: 'Bob', age: '35' }`}</Code>.
        </Paragraph>
        <Paragraph>
          Copying arrays: <Code>const copiedArray = [...array]</Code>
        </Paragraph>
        <Paragraph>
          Merging arrays: <Code>const combinedArray = [4, 5, ...array, 6]</Code>
        </Paragraph>
        <Paragraph>
          Merging objects:{' '}
          <Code>{`const combinedObject = { ...object, hobby: 'Fishing' }`}</Code>
        </Paragraph>
        <Paragraph>
          Using an array as an argument:{' '}
          <Code>{`const add = (a, b, c) => a + b + c`}</Code> with{' '}
          <Code>const values = add(...array)</Code>
        </Paragraph>
      </Section>
    </Main>
  )
}
