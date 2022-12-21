
import { useNav } from './../hooks/useNav';
const Destinations = () => {
    const destinationsRef = useNav("Destinations")
    return (
        <section ref={destinationsRef} id="destinationsSection" className="secondary-section">
            <h2>Destinations</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sit libero perferendis dolorem pariatur accusamus.
                Quibusdam quidem repudiandae aperiam aliquam quaerat!</p>
        </section>
    )
}

export default Destinations