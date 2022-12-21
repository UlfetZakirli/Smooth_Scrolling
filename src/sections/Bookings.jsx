
import { useNav } from './../hooks/useNav';
const Bookings = () => {
    const bookingRef = useNav("Bookings")
    return (
        <section ref={bookingRef} id="bookingsSection">
            <h2>Bookings</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sit libero perferendis dolorem pariatur accusamus.
                Quibusdam quidem repudiandae aperiam aliquam quaerat!</p>
        </section>
    )
}

export default Bookings