
import { useNav } from './../hooks/useNav';
const Flights = () => {
    const flightRef = useNav("Flights")
    return (
    <section ref={flightRef} id="flightsSection" className="secondary-section">
            <h2>Flights</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sit libero perferendis dolorem pariatur accusamus.
                Quibusdam quidem repudiandae aperiam aliquam quaerat!</p>
        </section>
    )
}

export default Flights