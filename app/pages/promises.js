import { CodeSnippit, Heading, Main, Paragraph, Section } from '../components'

export default function Promises() {
  return (
    <Main>
      <Heading>What are Promises?</Heading>
      <Section>
        <Paragraph>
          A Promise is an object which represents the eventual completion or
          failure of an asynchronous operation and its returned value. You can
          create promises by doing:{' '}
          <CodeSnippit
            code={`const promise = new Promise((resolve, reject) => { resolve('something') })`}
          />
          .
        </Paragraph>
        <Paragraph>
          This asynchronous programming includes running of processes
          individually from the main thread, and it notifies the main thread
          when it gets complete.
        </Paragraph>
        <Paragraph>
          Promises can have one of three values; <CodeSnippit code="pending" />,{' '}
          <CodeSnippit code="fulfilled" /> or <CodeSnippit code="rejected" />.{' '}
          <CodeSnippit code="promise.then()" />,{' '}
          <CodeSnippit code="promise.catch()" />, and{' '}
          <CodeSnippit code="promise.finally()" /> are used to chain further
          action with a promise.
        </Paragraph>
        <Paragraph>
          You can <CodeSnippit code="await" /> a promise like so:{' '}
          <CodeSnippit code="const value = await promise" /> when wrapped in an{' '}
          <CodeSnippit code="async" /> function.
        </Paragraph>
      </Section>
    </Main>
  )
}
