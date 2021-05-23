import { Heading, Main, Paragraph, Section } from '../components'

export default function Webpack() {
  return (
    <Main>
      <Heading>What is Webpack?</Heading>
      <Section>
        <Paragraph>
          Webpack is an open-source JavaScript module bundler. It is made
          primarily for JavaScript but it can transform front-end assets such as
          HTML, CSS, and images if the corresponding loaders are included.
          Webpack takes modules with dependencies and generates static assets
          representing those modules.
        </Paragraph>
      </Section>
    </Main>
  )
}
