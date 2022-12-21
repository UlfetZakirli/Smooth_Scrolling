
import { useNav } from './../hooks/useNav';
const Hotels = () => {
    const hotelsRef = useNav("Hotels")
    return (
        <section ref={hotelsRef} id="hotelsSection">
            <h2>Hotels</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sit libero perferendis dolorem pariatur accusamus.
                Quibusdam quidem repudiandae aperiam aliquam quaerat!</p>
        </section>
    )
}

export default Hotels