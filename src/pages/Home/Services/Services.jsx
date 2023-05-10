import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
        .catch(error=> console.log(error))
    },[])
    return (
        <div className="mt-6">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-orange-600">Our Services</h2>
                <h2 className="text-4xl">Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words <br /> which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow-lg gap-8">
                {
                    services.map(service=><ServicesCard 
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;