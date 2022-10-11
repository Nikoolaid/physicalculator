import * as React from "react"
import Container from "../components/Container"
import Navbar from "../components/Navbar"

const IndexPage = () => {
  return (
    <Container>
      <Navbar />
      <p>This is a website that aims to showcase what a free, open source physics education could look like. </p>
    </Container>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
