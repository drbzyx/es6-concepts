import { Code, Heading, Main, Paragraph, Section } from '../components'

export default function Destructuring() {
  return (
    <Main>
      <Heading>What is Destructuring?</Heading>
      <Section>
        <Paragraph>
          Destructuring is an expression which makes it possible to unpack
          values from arrays or objects, or declare them. Usually this solves
          the problem of repeating the object dot annotation{' '}
          <Code>{`object.property`}</Code>.
        </Paragraph>
        <Paragraph>
          You can use destructuring assignment by declaring variables{' '}
          <Code>let ten, twenty</Code> and then assigning values{' '}
          <Code>[ten, twenty] = [10, 20]</Code>.
        </Paragraph>
        <Paragraph>
          To destructure an object such as{' '}
          <Code>{`const object = { a: 'a', b: 'b', c: 'c' }`}</Code> you can
          simply <Code>{`const { a, b, c } = object`}</Code> which means you
          then don't need to use <Code>object.a</Code> to refer to the value.
        </Paragraph>
        <Paragraph>
          To destructure an array such as{' '}
          <Code>const array = ['random', 'variable', 'names']</Code> you can do{' '}
          <Code>const [anything, you, want] = array</Code>. Note that to
          destructure objects, you use <Code>{`{}`}</Code> and arrays{' '}
          <Code>{`[]`}</Code>; they would be undefined values otherwise.
        </Paragraph>
      </Section>
    </Main>
  )
}
