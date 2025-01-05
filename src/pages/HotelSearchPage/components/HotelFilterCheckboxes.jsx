import React, {useState} from 'react'
const CheckboxGroup = Checkbox.Group;
import { Checkbox, Divider, List } from "antd";

function HotelFilterCheckboxes({options,...props}) {
      const [checkedListPassenger, setCheckedListPassenger] = useState([]);

    const indeterminatePassenger =
    checkedListPassenger.length > 0 &&
    checkedListPassenger.length < options.length;
  const checkAllPassenger =
    options.length === checkedListPassenger.length;
    const onChangePLane = (list) => {
        setCheckedListPlane(list);
      };
      const onCheckAllChangePassenger = (e) => {
        setCheckedListPassenger(e.target.checked ? options : []);
      };
      const onChangePassenger = (list) => {
        setCheckedListPassenger(list);
      };
  return (
    <div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <Checkbox
                    indeterminate={indeterminatePassenger}
                    onChange={onCheckAllChangePassenger}
                    checked={checkAllPassenger}
                  >
                    All
                  </Checkbox>
                  <CheckboxGroup
                    options={options}
                    value={checkedListPassenger}
                    onChange={onChangePassenger}
                    className="flex flex-col gap-2"
                  />
                </div>
              </div>
    </div>
  )
}

export default HotelFilterCheckboxes
