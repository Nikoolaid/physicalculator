import * as React from "react"
import Container from "../components/Container"
import Navbar from "../components/Navbar"

const IndexPage = () => {
  return (
    <Container>
      <Navbar />
      <h1>Let's make physics education more accessible.</h1>
      <h2>What This Site Is</h2>
      <p>Quality physics equcation, like the kind found in institutions of education, is not very accessible. The cost of textbooks is rarely below $100, the price to attend a college where you'd have resources to help you learn is astronomically high, and for many parts of the world attending these kinds of institutions in the first place is impossible. While services like <a href="https://www.edx.org">EdX</a>, <a href="https://ocw.mit.edu/">MIT OpenCourseWare</a>, and <a href="https://www.khanacademy.org/">Khan Academy</a> aim to help make STEM (including Physics) education more accessible to those who might not otherwise be able to get it, the more options are available the better chance there is that people will be able to find a source that works well for them. This type of site would be one of those sources.</p>

      <h2>How is this different than Khan Academy, EdX, or MIT OCW?</h2>

      <p>While these sites are great for finding lectures or other lecture-style videos to help you learn, they don't really provide great textbook-like resources. (Khan Academy does have "articles" to suppliment videos, but those aren't really the same). That means that if a textbook works better than videos for you, you're kinda out of luck. This site aims to fill that gap. Text-based educational resources also have the benefit that they are easier to translate into other languages. With videos you'd need to hire someone to record the lectures in different languages, text can be thrown into translator algoritm or all typed up quickly by a translator service, which drastically lowers the barrier to internationalization. It's also good easily fed into braile displays, audio readers, or adjusted to accomodate a number of disabilities.</p>

      <h2>And it's open source!</h2>

      <p>Open source is great. It means that all the source code is freely available, and most open source code is licensed so that people can just use it with propper crediting. This makes it super easy for aspiring web developers to learn by reading through the code, or for enterprizing individuals to extend this base to make something even better.</p>
    </Container>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
