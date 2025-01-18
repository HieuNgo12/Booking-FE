const transMethods = ["Airplane", "Train", "Bus"];
const TransMethodFilter = ({ selectedTransMethods, onChange }) => {
    // hàm xử lý thay đổi khi người dùng chọn hay bỏ chọn checkbox
    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        console.log(`Checkbox value: ${value}, Checked: ${checked}`);
        // Cập nhật trạng thái (selectedTransMethods) dựa vào việc chọn/bỏ chọn
        if (checked) {
            // nếu checked thì thêm giá trị vào selectedTransMethod
            onChange([...selectedTransMethods, value]);

        } else {
            // nếu unchecked thì bỏ giá trị khỏi selectedTransMethod
            onChange(selectedTransMethods.filter(item => item !== value))
        }

    }

    return (
        <div className="border-b border-slate-300 pb-5">
            <h4 className="text-md font-semibold mb-2">Phương Tiện Di Chuyển</h4>
            <div className="space-y-2">
                {transMethods.map((method) =>
                    <label key={method} className="block">
                        <input
                            type="checkbox"
                            value={method}
                            checked={selectedTransMethods.includes(method)}
                            onChange={handleCheckboxChange}
                            className="mr-2"

                        />
                        {method}
                    </label>)}


            </div>
        </div>
    )
}

export default TransMethodFilter


