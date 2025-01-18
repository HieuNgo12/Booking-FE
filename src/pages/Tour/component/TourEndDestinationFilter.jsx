import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";

const TourEndDestinationFilter = ({ selectedEndDestination, onChange }) => {
    const [tours, setTours] = useState([]);
    const [endDestinations, setEndDestinations] = useState([]);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/v1/get-all-tour");
                setTours(response.data);
            } catch (error) {
                console.error("Error fetching tours:", error);
            }
        };

        fetchTours();
    }, []);

    useEffect(() => {
        if (tours.length > 0) {
            const destinations = new Set();

            tours.forEach((tour) => {
                if (tour.inforLocation && tour.inforLocation.endDestination) {
                    destinations.add(tour.inforLocation.endDestination);
                }
            });

            setEndDestinations([...destinations]);
        }
    }, [tours]);
    const handleSelectChange = (event) => {
        // Kiểm tra event.target có phải là thẻ <select> không
        if (event.target) {
            console.log("Selected End Destination:", event.target.value);
            onChange(event.target.value);  // Gọi hàm onChange từ prop
        }
    };

    return (
        <div className="border-b border-slate-300 pb-5">
            <h4 className="text-md font-semibold mb-2">Điểm đến</h4>
            <select
                className="border rounded p-2"
                value={selectedEndDestination}
                onChange={handleSelectChange}  // Sử dụng hàm handleSelectChange
            >
                <option value="">Chọn điểm đến</option>
                {endDestinations.map((destination) => (
                    <option key={destination} value={destination}>
                        {destination}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TourEndDestinationFilter;