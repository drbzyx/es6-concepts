import {
  CodeSnippit,
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
          We can check the size of our{' '}
          <CodeSnippit code="const sandwiches = new Map()" /> by doing{' '}
          <CodeSnippit code="sandwiches.size" />.
        </Paragraph>
        <Paragraph>
          Adding values is done using{' '}
          <CodeSnippit
            code={`sandwiches.set('Ham', { bread: 'Brown', butter: true })`}
          />
          . Using <CodeSnippit code="set" /> on a key which already exists
          overwrites the value but not its insertion order.
        </Paragraph>
        <Paragraph>
          We can fetch specific values if we know the key doing{' '}
          <CodeSnippit code="sandwiches.get('key')" />, and if we wanted to
          check first we can do <CodeSnippit code="sandwiches.has('key')" />{' '}
          because otherwise we may get <CodeSnippit code="undefined" />.
        </Paragraph>
        <Paragraph>
          We can also delete map entries using{' '}
          <CodeSnippit code="sandwiches.delete('key')" /> which returns a
          boolean based on the result of the delete.
        </Paragraph>
        <Paragraph>
          Maps can be iterated using{' '}
          <CodeSnippit code={'for (const value of sandwiches) { ... }'} />
        </Paragraph>
      </Section>
      <Section>
        <Subheading>WeakMaps (New with ES6)</Subheading>
        <Paragraph>
          A <CodeSnippit code="WeakMap" /> is basically just a{' '}
          <CodeSnippit code="Map" /> except it has a few differences. The{' '}
          <CodeSnippit code="key" /> must be an object. The{' '}
          <CodeSnippit code="key" /> is weakly referenced. A{' '}
          <CodeSnippit code="WeakMap" /> is a black box; there's no way retrieve
          the list of keys or see its size. You cannot loop over these with{' '}
          <CodeSnippit code="for...of" /> either. The{' '}
          <CodeSnippit code="value" /> is accessible using the{' '}
          <CodeSnippit code="key" /> reference.
        </Paragraph>
        <Paragraph>
          There are only 4 methods: <CodeSnippit code="get(key)" />,{' '}
          <CodeSnippit code="set(key, value)" />,{' '}
          <CodeSnippit code="delete(key)" /> and <CodeSnippit code="has(key)" />
          .
        </Paragraph>
        <Paragraph>
          In examples I have seen, if reference to the original object is
          destroyed, the value of the <CodeSnippit code="WeakSet" /> with that
          key will also be removed and garbage collected: For example;{' '}
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
          A <CodeSnippit code="Set" /> is a collection of unique values. They
          can be iterated through in the order they were inserted. Sets can be
          iterated using{' '}
          <CodeSnippit code={'for (const value of set) { ... }'} />.
        </Paragraph>
        <Paragraph>
          <CodeSnippit code="Map" /> and <CodeSnippit code="Set" /> share the
          same methods: <CodeSnippit code="set.add(value)" />,
          <CodeSnippit code="set.has(value)" />,{' '}
          <CodeSnippit code="set.delete(value)" />,{' '}
          <CodeSnippit code="set.size" /> and they can be iterated.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>WeakSets (New with ES6)</Subheading>
        <Paragraph>
          As with the <CodeSnippit code="WeakMap" /> discussion above, here we
          follow a similar pattern. We may only add objects, an object may exist
          in the <CodeSnippit code="WeakSet" /> if it's reachable from somewhere
          else, and it only supports <CodeSnippit code="add" />,{' '}
          <CodeSnippit code="has" />, <CodeSnippit code="delete" />; it doesn't
          have any iterators or have <CodeSnippit code="values()" /> or{' '}
          <CodeSnippit code="keys()" />.
        </Paragraph>
      </Section>
    </Main>
  )
}
