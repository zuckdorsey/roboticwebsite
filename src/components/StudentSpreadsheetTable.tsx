/*
╭──────────────────────────────────────────────────────────────────╮
│                        PORTFOLIO PROJECT                          │
╰──────────────────────────────────────────────────────────────────╯

Project : Polibatam Robotic Major Website
Author  : zuckdorsey
Website : https://ababil.is-not-a.dev
GitHub  : zuckdorsey
Year    : 2025

This project showcases my technical skills and coding style.
Feel free to explore and provide feedback!
*/

'use client';

import { useEffect, useState, useCallback } from 'react';
import { HiTable, HiRefresh, HiExclamationCircle, HiSearch } from 'react-icons/hi';

interface StudentData {
  [key: string]: string;
}

const YEAR_GIDS: { [key: string]: string } = {
  '2023': '0',
  '2022': '1316266327',
  '2021': '129805932',
  '2020': '1697667625',
  '2019': '1469936933',
  '2018': '831525550',
  '2017': '1608300011',
};

const COLUMN_MAPPING: { [key: string]: string } = {
  'NO': 'No.',
  'STUDENT ID': 'NIM',
  'STUDENT NAME': 'Nama Lengkap',
  'ENROLLMENT DATE': 'Tanggal Masuk',
  'ENROLMENT DATE': 'Tanggal Masuk',
  'GENDER': 'Jenis Kelamin',
  'TINGKAT': 'KELAS',
  'PARAREL': 'KELAS'
};


const HIDDEN_COLUMNS = [
  'TIMESTAMP',
  'EMAIL ADDRESS',
  'NKELAS',
  'TMPLAHIR',
  'TGLLAHIR',
  'DOSEN_WALI',
  'TINGKAT'

];

const YEARS = Object.keys(YEAR_GIDS).sort((a, b) => Number(b) - Number(a));

export default function StudentSpreadsheetTable() {
  const [selectedYear, setSelectedYear] = useState(YEARS[0]);
  const [data, setData] = useState<StudentData[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const BASE_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS6HWd6n9Ay5vBNwHl8XEfAX8GLdGsQgCIqVLqPcp4CIF9LcAGpW7PpLW_YvHRnBAdsgizpqjzhW7JH/pub';


  const filteredData = data.filter(student =>
    Object.values(student).some(value =>
      value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );


  const parseCSV = (text: string) => {
    const lines = text.split('\n');
    if (lines.length === 0) return { headers: [], data: [] };


    const headers = lines[0].split(',').map(header =>
      header.trim().replace(/^"|"$/g, '').replace(/""/g, '"')
    );

    const result = [];


    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;






      const values: string[] = [];
      let currentVal = '';
      let inQuotes = false;

      for (let j = 0; j < line.length; j++) {
        const char = line[j];
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          values.push(currentVal.trim().replace(/^"|"$/g, '').replace(/""/g, '"'));
          currentVal = '';
        } else {
          currentVal += char;
        }
      }
      values.push(currentVal.trim().replace(/^"|"$/g, '').replace(/""/g, '"'));



      if (values.length >= headers.length) {
        const obj: StudentData = {};
        headers.forEach((header, index) => {
          obj[header] = values[index] || '';
        });
        result.push(obj);
      }
    }

    return { headers, data: result };
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const gid = YEAR_GIDS[selectedYear];
      const url = `${BASE_URL}?gid=${gid}&single=true&output=csv`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const text = await response.text();
      const { headers: rawHeaders, data } = parseCSV(text);


      const displayHeaders = rawHeaders.filter(header =>
        !HIDDEN_COLUMNS.includes(header.toUpperCase())
      );

      setHeaders(displayHeaders);
      setData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [selectedYear]);

  useEffect(() => {
    fetchData();
  }, [selectedYear]);

  return (
    <div className="w-full space-y-6">
      {/* Year Tabs */}
      <div className="flex flex-wrap gap-2">
        {YEARS.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedYear === year
              ? 'bg-polibatam-orange text-white shadow-lg shadow-polibatam-orange/20'
              : 'bg-[#111827] text-gray-400 border border-gray-800 hover:border-polibatam-orange/50 hover:text-white'
              }`}
          >
            {year}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="w-full p-8 flex flex-col items-center justify-center bg-[#111827] rounded-xl border border-gray-800 min-h-[300px]">
          <div className="w-10 h-10 border-4 border-polibatam-orange border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-400 animate-pulse">Loading student data for {selectedYear}...</p>
        </div>
      ) : error ? (
        <div className="w-full p-8 flex flex-col items-center justify-center bg-[#111827] rounded-xl border border-red-900/50 min-h-[200px]">
          <HiExclamationCircle className="w-10 h-10 text-red-500 mb-3" />
          <p className="text-red-400 mb-4 text-center">Failed to load data: {error}</p>
          <button
            onClick={fetchData}
            className="px-4 py-2 bg-red-900/30 hover:bg-red-900/50 text-red-300 rounded-lg transition-colors flex items-center gap-2"
          >
            <HiRefresh className="w-4 h-4" /> Try Again
          </button>
        </div>
      ) : (
        <div className="w-full bg-[#111827] rounded-xl border border-gray-800 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-900/50">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="p-2 bg-polibatam-orange/10 rounded-lg">
                <HiTable className="w-6 h-6 text-polibatam-orange" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Student Directory</h3>
                <p className="text-sm text-gray-400">Live data from Google Sheets</p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search students..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-polibatam-orange focus:ring-1 focus:ring-polibatam-orange transition-all"
                />
              </div>
              <button
                onClick={fetchData}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
                title="Refresh Data"
              >
                <HiRefresh className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900/80 border-b border-gray-800">
                  {headers.map((header, index) => (
                    <th
                      key={index}
                      className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap sticky top-0 bg-gray-900/95 backdrop-blur-sm z-10"
                    >
                      {COLUMN_MAPPING[header.toUpperCase()] || header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {filteredData.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="group hover:bg-gray-800/50 transition-colors duration-200"
                  >
                    {headers.map((header, colIndex) => (
                      <td
                        key={`${rowIndex}-${colIndex}`}
                        className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap group-hover:text-white transition-colors"
                      >
                        {/* Special styling for first column (usually Name or ID) */}
                        {colIndex === 0 ? (
                          <span className="font-semibold text-white">{row[header]}</span>
                        ) : (
                          row[header]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-800 bg-gray-900/30 text-xs text-gray-500 flex justify-between items-center">
            <span>Showing {filteredData.length} records</span>
            <span>Last updated: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}

