import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BodyTourDetailPage() {
    const [tour, setTour] = useState(null); // Khởi tạo là null thay vì []
    const { tourId } = useParams();
    const [ratingsCount, setRatingsCount] = useState(0);
    const [averageRating, setAverageRating] = useState(0);

    useEffect(() => {
        console.log("tourId từ URL:", tourId);
        axios.get(`https://booking-be-z8l2.onrender.com/api/v1/get-tour-by-id/${tourId}`)
            .then(response => {
                const tourData = response.data;
                setTour(tourData);

                // Đếm số lượng reviewId để biết có bao nhiêu người đã đánh giá
                const count = tourData.reviewId ? tourData.reviewId.length : 0;
                setRatingsCount(count);

                // Tính toán đánh giá trung bình
                if (tourData.reviewId && tourData.reviewId.length > 0) {
                    const avgRating = tourData.reviewId.reduce((acc, review) => acc + parseInt(review.rating), 0) / tourData.reviewId.length;
                    setAverageRating(avgRating);
                }
            })
            .catch(error => {
                console.error("Có lỗi xảy ra khi tải tour:", error);
            });
    }, [tourId]);

    // Kiểm tra tour có hợp lệ hay không trước khi render
    if (!tour) {
        return <div>Không tìm thấy tour!</div>;
    }

    const changeTab = (event, sectionId) => {
        const tabs = document.querySelectorAll('.tab-btn');
        tabs.forEach(tab => {
            tab.classList.remove('font-bold', 'text-blue-600');
            tab.classList.add('text-gray-600');
        });

        const clickedTab = event.target;
        clickedTab.classList.add('font-bold', 'text-blue-600');
        clickedTab.classList.remove('text-gray-600');

        scrollToSection(sectionId);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 60,
                behavior: 'smooth'
            });
        }
        document.querySelectorAll('.tab-btn').forEach((btn) => btn.classList.remove('active', 'font-bold', 'text-blue-600'));
        event.target.classList.add('active', 'font-bold', 'text-blue-600');
    };

    const changeMainImage = (thumbnail) => {
        const mainImage = document.getElementById('mainImage');
        const tempSrc = mainImage.src;
        mainImage.src = thumbnail.src;
        thumbnail.src = tempSrc;
    };

    const gravatarUrl = (email) => {
        return email ? `https://www.gravatar.com/avatar/${email}?s=50` : 'default-avatar-url';  // Đường dẫn đến ảnh mặc định
    };

    return (
        <div>
            <section className="container mx-auto py-6 px-6 flex">
                <div className="w-3/4 pr-6">
                    <h1 className="text-3xl font-bold">{tour.tourName}</h1>
                    <p className="text-gray-600 text-base">
                        {tour.inforLocation?.startDestination || 'N/A'} - {tour.inforLocation?.endDestination || 'N/A'} | {tour.duration}
                    </p>
                    {/* Image Gallery */}
                    <div className="mt-4">
                        <div id="mainImageContainer" className="w-full h-80 aspect-[4/3] mb-4">
                            <img
                                id="mainImage"
                                src={tour.imgTour?.listTour[0] || 'default-image-url'}
                                alt="Main Image"
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {tour.imgTour?.listTour.map((imageUrl, index) => (
                                <img
                                    key={index}
                                    onClick={() => changeMainImage(imageUrl)}
                                    src={imageUrl}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-20 aspect-[4/3] object-cover rounded cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>
                    {/* Toggle Tab */}
                    <div className="sticky top-0 z-50 bg-white shadow-md mt-4">
                        <div className="container mx-auto flex gap-4 py-2 px-6 text-base">
                            <button className="tab-btn text-gray-600 hover:text-blue-600" onClick={(e) => changeTab(e, 'info')}>Thông Tin Tour</button>
                            <button className="tab-btn text-gray-600 hover:text-blue-600" onClick={(e) => changeTab(e, 'schedule')}>Lịch Trình</button>
                            <button className="tab-btn text-gray-600 hover:text-blue-600" onClick={(e) => changeTab(e, 'pricing')}>Giá Tour</button>
                            <button className="tab-btn text-gray-600 hover:text-blue-600" onClick={(e) => changeTab(e, 'policy')}>Chính Sách</button>
                            <button className="tab-btn text-gray-600 hover:text-blue-600" onClick={(e) => changeTab(e, 'comments')}>Comments and Ratings</button>
                        </div>
                    </div>
                    {/* Description */}
                    <div id="info" className="mt-6">
                        <h2 className="text-xl font-bold">Thông Tin Tour</h2>
                        <p className="text-gray-600 mt-2 text-base">Bắt đầu: {tour.inforLocation?.startDestination || 'N/A'} | Kết thúc: {tour.inforLocation?.endDestination || 'N/A'}</p>
                        <p className="text-gray-600 text-base">Phương tiện di chuyển: {tour.transportationMethod?.join(", ") || 'N/A'}</p>
                    </div>
                    {/* Travel Schedule */}
                    <div id="schedule" className="mt-6">
                        <h2 className="text-xl font-bold">Lịch Trình</h2>
                        <ul className="list-disc list-inside text-gray-600 mt-2">
                            {tour.inforLocation?.travelSchedule?.map((item, index) => (
                                <li key={index}>{item}</li>
                            )) || <li>Không có lịch trình</li>}
                        </ul>
                    </div>
                    {/* Pricing Details */}
                    <div id="pricing" className="mt-6">
                        <h2 className="text-xl font-bold">Giá Tour</h2>
                        <p className="text-gray-600 mt-2 text-base">{tour.price}</p>
                        <p className="text-gray-600 text-base">Chỗ ngồi còn lại: {tour.capacity}</p>
                    </div>
                    {/* Policies */}
                    <div id="policy" className="mt-6">
                        <h2 className="text-xl font-bold">Chính Sách</h2>
                        <p className="text-gray-600 mt-2 text-base">{tour.cancellationPolicy || 'N/A'}</p>
                    </div>
                    <div id="priceIncludes" className="mt-6">
                        <h2 className="text-xl font-bold">Tour Bao Gồm</h2>
                        <ul className="list-disc list-inside text-gray-600 mt-2">
                            {tour.priceIncludes?.map((item, index) => (
                                <li key={index}>{item}</li>
                            )) || <li>Không có thông tin</li>}
                        </ul>
                    </div>
                    <div id="priceExcludes" className="mt-6">
                        <h2 className="text-xl font-bold">Tour Không Bao Gồm</h2>
                        <ul className="list-disc list-inside text-gray-600 mt-2">
                            {tour.priceExcludes?.map((item, index) => (
                                <li key={index}>{item}</li>
                            )) || <li>Không có thông tin</li>}
                        </ul>
                    </div>
                    {/* Comments and Ratings */}
                    <div id="comments" className="mt-6">
                        <section className="container mx-auto py-6">
                            <div className="bg-white p-6 rounded shadow">
                                <div className="text-center">
                                    <h2 className="text-xl font-bold">Comments and ratings</h2>
                                    <div className="text-blue-600 text-4xl font-bold">{averageRating.toFixed(1) || 'N/A'}</div>
                                    <p className="text-gray-600">Very good</p>
                                    <p className="text-sm text-gray-400">{ratingsCount} user ratings</p>
                                </div>

                                <div className="mt-6">
                                    {tour.reviewId?.map((review, index) => (
                                        <div key={index} className="flex gap-4 items-start mb-4">
                                            <img
                                                src={gravatarUrl(review.userId?.email)}
                                                alt="User Avatar"
                                                className="w-12 h-12 rounded-full"
                                            />
                                            <div>
                                                <h3 className="text-lg font-bold">
                                                    {review.comment} <span className="text-blue-600">{review.rating}</span>
                                                </h3>
                                                <p className="text-sm text-gray-400">{new Date(review.createdAt).toLocaleDateString()}</p>
                                                <p className="text-gray-600">{review.comment}</p>
                                            </div>
                                        </div>
                                    )) || <p>Chưa có đánh giá</p>}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <aside className="w-1/4 ml-auto sticky top-4 self-start">
                    <div className="bg-white p-4 rounded shadow-md">
                        <h2 className="text-xl font-bold mb-4">Thông Tin Tour</h2>
                        <p className="text-gray-600 mb-2 text-base">Giá: <span className="font-bold text-blue-600">{tour.price}</span></p>
                        <p className="text-gray-600 mb-2 text-base">Ngày khởi hành: <span className="font-bold">{tour.startDate}</span></p>
                        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-base">Đặt Ngay</button>
                    </div>
                </aside>
            </section>
        </div>
    );
}

export default BodyTourDetailPage;
