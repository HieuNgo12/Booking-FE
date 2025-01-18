

const startDestinations = ["Hà Nội", "Đà Nẵng", "TP Hồ Chí Minh"];
const StartDestinationFilter = ({ selectedstartDestination, onChange }) => {
    return (
      <div className="border-b border-slate-300 pb-5">
        <h4 className="text-md font-semibold mb-2">Điểm Xuất Phát</h4>
        <select
          className="border rounded p-2"
          value={selectedstartDestination}
          onChange={onChange}
        >
          <option value="">Chọn Điểm Xuất Phát</option>
          {startDestinations.map((destination) => (
            <option key={destination} value={destination}>
              {destination}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default StartDestinationFilter