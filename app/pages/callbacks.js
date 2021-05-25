import { useState } from 'react'
import { Button, Code, Heading, Main, Paragraph, Section } from '../components'

export default function Callbacks() {
  const [count, setCount] = useState(0)

  const handleClick = () => setCount(count + 1)

  return (
    <Main>
      <Heading>What are Callbacks?</Heading>
      <Section>
        <Paragraph>
          Callbacks are functions passed as an argument to another function...
          which is then called. A pretty good example of callback usage would be
          those called by events in React{' '}
          <Code>{`<Button changeHandler={handleClick}>Clicked {count} times</Button>`}</Code>
        </Paragraph>
        <Button handler={handleClick}>Clicked {count} times</Button>
        <Paragraph>
          As some applications get larger and larger, following the sequence of
          callbacks may get harder and harder. This is commonly referred to as
          callback hell.
        </Paragraph>
      </Section>
    </Main>
  )
}
