import About from "./components/about_me/About"
import Blog from "./components/blog/Blog"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Service from "./components/services/Service"

function App(){
    return(
        <>
            <Header />
            <About />
            <Service/>
            <Blog />
            <Footer/>
        
        </>

    )
}

export default App