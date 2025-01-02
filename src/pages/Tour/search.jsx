import { useState, useEffect } from "react";
import { useTourSearchContext } from "../../context/TourSearchContext";
import SearchResultsCard from "./component/SearchResultsCard";
import Pagination from "./component/Pagination";
import axios from 'axios';

const Search = () => {
    const { endDestination, startDateBooking, budget } = useTourSearchContext();
    const [page, setPage] = useState(1);
    const [tourData, setTourData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Các tham số tìm kiếm
    const searchParams = {
        endDestination,
        startDateBooking,
        budget,
        page: page.toString(),
    };
    //console.log("Search Params:", searchParams);

    const fetchTourData = async () => {
        setIsLoading(true);
        setError(null);
        try {

            const queryParams = new URLSearchParams(searchParams).toString();

            const response = await axios.get(`http://localhost:8080/api/v1/search?${queryParams}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            // Kiểm tra kết quả phản hồi
            console.log("API response data:", response.data);

            setTourData(response.data);
        } catch (error) {
            console.error("Error details:", error);  // Log chi tiết lỗi
            setError("Failed to fetch data.");
        } finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {
        //console
        // console.log("End Destination:", endDestination);
        // console.log("Start Date Booking:", startDateBooking);
        // console.log("Budget:", budget);
        fetchTourData();
    }, []);

    const handlePageChange = (page) => {
        setPage(page);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
            <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">
                        {tourData?.pagination.total} Tours found
                        {endDestination ? ` in ${endDestination}` : ""}
                    </span>
                </div>

                {/* Hiển thị trạng thái loading */}
                {isLoading && <div>Loading...</div>}

                {/* Hiển thị thông báo lỗi nếu có */}
                {error && <div>{error}</div>}

                {/* Hiển thị các tour */}
                {tourData?.data.map((tour) => (
                    <SearchResultsCard key={tour._id} tour={tour} />
                ))}

                {/* Phân trang */}
                <Pagination
                    page={tourData?.pagination.page || 1}
                    pages={tourData?.pagination.pages || 1}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default Search;
