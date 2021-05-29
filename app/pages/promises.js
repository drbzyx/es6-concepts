import { Code, Heading, Main, Paragraph, Section } from '../components'

export default function Promises() {
  return (
    <Main>
      <Heading>What are Promises?</Heading>
      <Section>
        <Paragraph>
          A Promise is an object which represents the eventual completion or
          failure of an asynchronous operation and its returned value. You can
          create promises by doing:{' '}
          <Code>{`const promise = new Promise((resolve, reject) => { resolve('something') })`}</Code>
        </Paragraph>
        <Paragraph>
          This asynchronous programming includes running of processes
          individually from the main thread, and it notifies the main thread
          when it gets complete.
        </Paragraph>
        <Paragraph>
          Promises can have one of three values; <Code>pending</Code>,{' '}
          <Code>fulfilled</Code> or <Code>rejected</Code>.{' '}
          <Code>promise.then()</Code>,<Code>promise.catch()</Code>, and{' '}
          <Code>promise.finally()</Code> are used to chain further action with a
          promise.
        </Paragraph>
        <Paragraph>
          You can <Code>await</Code>a promise like so:{' '}
          <Code>const value = await promise</Code> when wrapped in a{' '}
          <Code>async</Code> function.
        </Paragraph>
      </Section>
    </Main>
  )
}
