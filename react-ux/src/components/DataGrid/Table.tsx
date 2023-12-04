import React from 'react'

type Props = { data: any[]; columns: string[] }

const TableLayout: React.FC<Props> = ({ data, columns }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col, i) => {
            return <th key={i}>{col}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => {
          return (
            <tr key={i}>
              {columns.map((col, j) => {
                return <td key={j}>{row[col]}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TableLayout
