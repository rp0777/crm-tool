/* eslint-disable @typescript-eslint/no-explicit-any */
import { Lead } from "@/utils/constants";
import Image from "next/image";
import React from "react";

type Column = {
  label: string;
  value: string;
};

const Table = ({
  columns,
  leads,
  handleSendSms,
}: {
  columns: Column[];
  leads: Lead[];
  handleSendSms: (phoneNumber: string) => void;
}) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-full">
      {/* Search Bar */}
      {/* <div className="py-4 px-4 bg-white dark:bg-gray-900">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center justify-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search htmlFor items"
          />
        </div>
      </div> */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {/* <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th> */}
            {columns.map((column: any, index: number) => (
              <th key={index} scope="col" className="px-6 py-3">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {leads.map((lead: Lead) => (
            <tr
              key={lead.phoneNumber}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {lead.name}
              </th>
              <td className="px-6 py-4">{lead.phoneNumber}</td>
              <td className="px-6 py-4">{lead.email}</td>
              <td className="px-6 py-4">{lead.status}</td>
              <td className="px-6 py-4">
                {lead.status === "Pending" ? (
                  <button disabled>
                    <Image
                      className="cursor-not-allowed opacity-35"
                      src={"/send.png"}
                      width={20}
                      height={20}
                      alt="Disabled Send"
                    />
                  </button>
                ) : (
                  <button onClick={() => handleSendSms(lead.phoneNumber)}>
                    <Image
                      src={"/send.png"}
                      width={20}
                      height={20}
                      alt="Send"
                    />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
