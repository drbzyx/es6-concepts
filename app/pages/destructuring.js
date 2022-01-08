import { CodeSnippit, Heading, Main, Paragraph, Section } from '../components'

export default function Destructuring() {
  return (
    <Main>
      <Heading>What is Destructuring?</Heading>
      <Section>
        <Paragraph>
          Destructuring is an expression which makes it possible to unpack
          values from arrays or objects, or declare them. Usually this solves
          the problem of repeating the object dot annotation{' '}
          <CodeSnippit code={`object.property`} />.
        </Paragraph>
        <Paragraph>
          You can use destructuring assignment by declaring variables{' '}
          <CodeSnippit code="let ten, twenty" /> and then assigning values{' '}
          <CodeSnippit code="[ten, twenty] = [10, 20]" />.
        </Paragraph>
        <Paragraph>
          To destructure an object such as{' '}
          <CodeSnippit code={`const object = { a: 'a', b: 'b', c: 'c' }`} /> you
          can simply <CodeSnippit code={`const { a, b, c } = object`} /> which
          means you then don't need to use <CodeSnippit code="object.a" /> to
          refer to the value.
        </Paragraph>
        <Paragraph>
          To destructure an array such as{' '}
          <CodeSnippit code="const array = ['random', 'variable', 'names']" />{' '}
          you can do <CodeSnippit code="const [anything, you, want] = array" />.
          Note that to destructure objects, you use <CodeSnippit code={`{}`} />{' '}
          and arrays <CodeSnippit code={`[]`} />; they would be undefined values
          otherwise.
        </Paragraph>
      </Section>
    </Main>
  )
}
