import React from "react";
import "./ConfirmTable.css";
function ConfirmTable() {
  return (
    <div>
      <div className="">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Stays
                </th>
                <th scope="col" class="px-6 py-3">
                  Check-In
                </th>
                <th scope="col" class="px-6 py-3">
                  Check-Out
                </th>
                <th scope="col" class="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                  Room Type
                </th>
                <th scope="col" class="px-6 py-3">
                  Bed Type
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td
                  scope="row"
                  class=""
                >
                 5 Nights
                </td>
                <td class="px-6 py-4">25 Jan 2024</td>
                <td class="px-6 py-4">30 Jan 2024</td>
                <td class="px-6 py-4">2 Rooms</td>
                <td class="px-6 py-4">Double</td>
                <td class="px-6 py-4">Two Twin</td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ConfirmTable;
