import React from 'react';
import { useRouter } from 'next/navigation'; // Correct import for useRouter
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface DataObject {
    id: string | number;
    [key: string]: any; // Allows for a flexible object structure
}

interface ColumnMapping {
    [field: string]: string; // Maps data object fields to column names
}

interface IndicatorTableProps {
    dataObjects: DataObject[];
    indicatorKey: string;
    linkKey: string;
    linkPath: string;
    columnMapping?: ColumnMapping; // Optional column mapping
}


const getIndicatorColor = (value: number | boolean | string) => {
    if (typeof value === 'number') {
        return value >= 70 ? 'green' : value >= 30 ? 'orange' : 'red';
    } else if (typeof value === 'boolean') {
        return value ? 'green' : 'red';
    } else if (typeof value === 'string') {
        return value.toLowerCase() === 'online' ? 'green' : 'red';
    } else {
        console.error("Indicator value must be a number, boolean, or specific strings");
        return 'transparent'; // Fallback color
    }
};

const IndicatorTable: React.FC<IndicatorTableProps> = ({
  dataObjects,
  indicatorKey,
  linkKey,
  linkPath,
  columnMapping,
}) => {
  const router = useRouter();

  // Function to get display value for a key based on columnMapping
  const getDisplayValue = (key: string) => columnMapping && columnMapping[key] ? columnMapping[key] : key;

  // Determine columns to display based on columnMapping or dataObject keys
  const columns = columnMapping
    ? Object.keys(columnMapping).map(key => ({ key, name: columnMapping[key] }))
    : dataObjects[0] ? Object.keys(dataObjects[0]).map(key => ({ key, name: key })) : [];

  return (
    <div style={{ margin: '2rem' }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map(({ key, name }) => (
                <TableCell key={key}>{name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataObjects.map((dataObject, index) => (
              <TableRow
                key={index}
                className="dataRow"
                onClick={() => router.push(`${linkPath}/${dataObject[linkKey]}`)}
                style={{ cursor: 'pointer' }}
              >
                {columns.map(({ key }, cellIndex) => (
                  <TableCell key={key}>
                    {cellIndex === 0 ? (
                      <div
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: getIndicatorColor(dataObject[indicatorKey]),
                          display: 'inline-block',
                          marginRight: '0.5rem',
                          animation: 'blink 1.5s infinite',
                        }}
                      />
                    ) : null}
                    {dataObject[key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default IndicatorTable;
