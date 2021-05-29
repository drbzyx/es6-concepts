import {
  Heading,
  List,
  Main,
  Paragraph,
  Section,
  Subheading,
} from '../components'

export default function Ecma() {
  const items = [
    { text: 'Arrow functions' },
    { text: 'Destructuring' },
    { text: 'Generator functions' },
    { text: 'Iterators' },
    { text: 'Let and const keywords' },
    { text: 'Modules' },
    { text: 'Revamped Classes' },
    { text: 'Object literals' },
    { text: 'Promises' },
    { text: 'Rest and spread operators' },
    { text: 'Template literals' },
  ]

  return (
    <Main>
      <Heading>What is ES6 or ECMAScript 2015?</Heading>
      <Section>
        <Subheading>Well, what is it?</Subheading>
        <Paragraph>
          ECMAScript is a JavaScript standard meant to ensure interoperability
          between browsers. ES6 was the second major revision of JavaScript
          released in 2015.
        </Paragraph>
        <Paragraph>
          It included a lot of new features such as modules, new iterators, new
          classes, arrow functions, spreading, template literals and more.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>New Features</Subheading>
        <List items={items} />
      </Section>
    </Main>
  )
}
