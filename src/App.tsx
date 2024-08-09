import { ConfigProvider } from "antd"
import { FloatMenu } from "./components/FloatMenu/FloatMenu"
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { Projects } from "./components/Projects/Projects"
import { ContactMe } from "./components/ContactMe/ContactMe"
function App() {


  return (
    <>
      <ConfigProvider theme={{
        token: {
          colorPrimary: "#44bba4ff",
        }
      }}>
        <Header />
        <Hero />
        <Projects />
        <ContactMe />
        <FloatMenu />
      </ConfigProvider >
    </>
  )
}

export default App
