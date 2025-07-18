import sun2 from "../../assets/sun2.svg"
import cloud from "../../assets/cloud.svg"

function PartlyCloudy() {
    return (
        <div className="relative h-8 overflow-visible mx-1">
            <img src={sun2} alt="sun" className="absolute top-0 right-2 h-8 animate-spin object-cover" />
            <img src={cloud} alt="cloud" className="relative h-8 object-cover" />
        </div>
    )
}

export default PartlyCloudy