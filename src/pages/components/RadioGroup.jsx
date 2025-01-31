import React from "react";

function RadioGroup({ flex, object, ...props }) {
  return (
    <div style={flex? {display: "flex"} : null}>
      {object.length
        ? object.map((obj) => {
            return (
              <div class="flex items-center mb-4 mt-4">
                <input
                  id="default-radio-1"
                  type="radio"
                  value={obj.value}
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-1"
                  class="ms-2 text-sm"
                >
                  {obj.label}
                </label>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default RadioGroup;
