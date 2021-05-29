import Link from 'next/link'
import {
  Code,
  Heading,
  Main,
  Paragraph,
  Section,
  Subheading,
} from '../components'

export default function WeakThings() {
  return (
    <Main>
      <Heading>Weak Things in ES6</Heading>
      <Section>
        <Subheading>Weaksets</Subheading>
        <Paragraph>Weaksets</Paragraph>
      </Section>
      <Section>
        <Subheading>Weakmaps</Subheading>
        <Paragraph>
          A <Code>WeakMap</Code> is basically just a <Code>Map</Code> except it
          has a few differences. The <Code>key</Code> must be an object. The{' '}
          <Code>key</Code> is weakly referenced. A <Code>WeakMap</Code> is a
          black box; there's no way retrieve the list of keys or see its size.
          You cannot loop over these with <Code>for...of</Code> either.
        </Paragraph>
        <Paragraph>
          There are only 4 methods: <Code>get(key)</Code>,{' '}
          <Code>set(key, value)</Code>, <Code>delete(key)</Code> and{' '}
          <Code>has(key)</Code>.
        </Paragraph>
        <Paragraph>
          In examples I have seen, it's common to use elements as the{' '}
          <Code>Map</Code> key, and if that element is removed from the DOM, we
          no longer need that reference but the <Code>Map</Code> still holds
          that reference. JavaScript's garbage collector cannot free up that
          object. Because a <Code>WeakMap</Code> maintains a weak reference to
          objects, it would be garbage collected. See{' '}
          <Link href='https://javascript.plainenglish.io/weakmaps-illustrated-8169ce4764bb'>
            this example
          </Link>
          .
        </Paragraph>
      </Section>
    </Main>
  )
}
