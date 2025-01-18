import { useState, useEffect } from "react";
import { useTourSearchContext } from "../../context/TourSearchContext";
import SearchResultsCard from "./component/SearchResultsCard";
import Pagination from "./component/Pagination";
import axios from 'axios';
import TourEndDestinationFilter from "./component/TourEndDestinationFilter";
import StartDestinationFilter from "./component/startDestinationFilter";
import TransMethodFilter from "./component/TransMethodFilter";

const Search = () => {
    const { endDestination, startDateBooking, budget } = useTourSearchContext();
    const [page, setPage] = useState(1);
    const [tourData, setTourData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedEndDestination, setSelectedEndDestination] = useState(endDestination || '');
    const [selectedstartDestination, setSelectedstartDestination] = useState("");
    const [selectedTransMethods, setSelectedTransMethods] = useState([]);

    // Các tham số tìm kiếm
    const searchParams = {
        endDestination: selectedEndDestination,
        startDateBooking,
        budget,
        startDestination: selectedstartDestination,
        transportationMethod: selectedTransMethods,
        page: page.toString(),
    };

    const fetchTourData = async () => {
        setIsLoading(true);
        setError(null);

        try {
            // Log giá trị của selectedstartDestination
            console.log("Selected Start Destination:", selectedstartDestination);
            console.log("Selected Transportation Methods:", selectedTransMethods);

            // Tạo một đối tượng URLSearchParams
            const queryParams = new URLSearchParams();

            // Dùng append để thêm các tham số vào queryParams
            Object.entries(searchParams).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    // Nếu là mảng, append nhiều lần cho mỗi phần tử
                    value.forEach(val => queryParams.append(key, val));
                } else if (value) {
                    // Nếu không phải mảng và có giá trị, append một lần
                    queryParams.append(key, value);
                }
            });

            // Log queryParams để kiểm tra
            console.log("Query Params:", queryParams.toString());

            // Gọi API với queryParams đã được thêm tham số
            const response = await axios.get(`http://localhost:8080/api/v1/search?${queryParams.toString()}`, {
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
        fetchTourData();
    }, [selectedEndDestination, selectedstartDestination, startDateBooking, selectedTransMethods, budget, page]);

    const handlePageChange = (page) => {
        setPage(page);
    };
    const handleTransMethodChange = (newMethods) => {
        console.log("New Methods:", newMethods);
        setSelectedTransMethods(newMethods);  // Cập nhật trạng thái khi checkbox thay đổi
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
            <div className="rounded-lg border border-slate-300 p-5 h-fit sticky top-10">
                <div className="space-y-5">
                    <h3 className="text-lg font-semibold border-b border-slate-300 pb-5">
                        Filter by:
                    </h3>

                    <StartDestinationFilter
                        selectedstartDestination={selectedstartDestination}
                        onChange={(event) => setSelectedstartDestination(event.target.value)}
                    />
                    <TourEndDestinationFilter
                        selectedEndDestination={selectedEndDestination}
                        onChange={(value) => {
                            console.log("Updated End Destination:", value);  // Kiểm tra giá trị được truyền về
                            setSelectedEndDestination(value);  // Cập nhật state với giá trị mới
                        }}
                    />
                    <TransMethodFilter
                        selectedTransMethods={selectedTransMethods}
                        onChange={handleTransMethodChange}  // Truyền hàm onchange đúng cách
                    />
                </div>
            </div>
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
