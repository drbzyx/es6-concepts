import {
  Code,
  Heading,
  Main,
  Paragraph,
  Section,
  Subheading,
} from '../components'
import Link from 'next/link'

export default function Maps() {
  return (
    <Main>
      <Heading>Collections</Heading>
      <Section>
        <Subheading>Maps</Subheading>
        <Paragraph>
          A Map in JavaScript is an object with key and value pairs. Maps
          remember the original insertion order of the keys.
        </Paragraph>
        <Paragraph>
          We can check the size of our <Code>const sandwiches = new Map()</Code>{' '}
          by doing <Code>sandwiches.size</Code>.
        </Paragraph>
        <Paragraph>
          Adding values is done using{' '}
          <Code>{`sandwiches.set('Ham', { bread: 'Brown', butter: true })`}</Code>
          . Using <Code>set</Code> on a key which already exists overwrites the
          value but not its insertion order.
        </Paragraph>
        <Paragraph>
          We can fetch specific values if we know the key doing{' '}
          <Code>sandwiches.get('key')</Code>, and if we wanted to check first we
          can do <Code>sandwiches.has('key')</Code> because otherwise we may get{' '}
          <Code>undefined</Code>.
        </Paragraph>
        <Paragraph>
          We can also delete map entries using{' '}
          <Code>sandwiches.delete('key')</Code> which returns a boolean based on
          the result of the delete.
        </Paragraph>
        <Paragraph>
          Maps can be iterated using{' '}
          <Code>{'for (const value of sandwiches) { ... }'}</Code>
        </Paragraph>
      </Section>
      <Section>
        <Subheading>WeakMaps (New with ES6)</Subheading>
        <Paragraph>
          A <Code>WeakMap</Code> is basically just a <Code>Map</Code> except it
          has a few differences. The <Code>key</Code> must be an object. The{' '}
          <Code>key</Code> is weakly referenced. A <Code>WeakMap</Code> is a
          black box; there's no way retrieve the list of keys or see its size.
          You cannot loop over these with <Code>for...of</Code> either. The{' '}
          <Code>value</Code> is accessible using the <Code>key</Code> reference.
        </Paragraph>
        <Paragraph>
          There are only 4 methods: <Code>get(key)</Code>,{' '}
          <Code>set(key, value)</Code>, <Code>delete(key)</Code> and{' '}
          <Code>has(key)</Code>.
        </Paragraph>
        <Paragraph>
          In examples I have seen, if reference to the original object is
          destroyed, the value of the <Code>WeakSet</Code> with that key will
          also be removed and garbage collected: For example;{' '}
          <Link href="https://javascript.plainenglish.io/weakmaps-illustrated-8169ce4764bb">
            this example
          </Link>{' '}
          and{' '}
          <Link href="https://javascript.info/weakmap-weakset#weakmap">
            this one (which is better)
          </Link>
          .
        </Paragraph>
      </Section>
      <Section>
        <Subheading>Sets</Subheading>
        <Paragraph>
          A <Code>Set</Code> is a collection of unique values. They can be
          iterated through in the order they were inserted. Sets can be iterated
          using <Code>{'for (const value of set) { ... }'}</Code>.
        </Paragraph>
        <Paragraph>
          <Code>Map</Code> and <Code>Set</Code> share the same methods:{' '}
          <Code>set.add(value)</Code>,<Code>set.has(value)</Code>,{' '}
          <Code>set.delete(value)</Code>, <Code>set.size</Code> and they can be
          iterated.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>WeakSets (New with ES6)</Subheading>
        <Paragraph>
          As with the <Code>WeakMap</Code> discussion above, here we follow a
          similar pattern. We may only add objects, an object may exist in the{' '}
          <Code>WeakSet</Code> if it's reachable from somewhere else, and it
          only supports <Code>add</Code>, <Code>has</Code>, <Code>delete</Code>;
          it doesn't have any iterators or have <Code>values()</Code> or{' '}
          <Code>keys()</Code>.
        </Paragraph>
      </Section>
    </Main>
  )
}
