import { Heading, Main, Paragraph } from '../components'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Main>
      <Heading>404</Heading>
      <Paragraph>You won't be able to do much here.</Paragraph>
      <Paragraph>
        It's probably best to go <Link href="/">home</Link>.
      </Paragraph>
    </Main>
  )
}
