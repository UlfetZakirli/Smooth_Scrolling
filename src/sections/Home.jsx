
import { useNav } from './../hooks/useNav';
const Home = () => {
    const homeRef=useNav("Home")
    return (
        <section ref={homeRef} id="homeSection">
            <h2>Home</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sit recusandae iste repellat beatae ad doloribus nisi
                deleniti fugit velit placeat?</p>
        </section>
    )
}

export default Home