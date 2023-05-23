const Table = ({ headers, rows }) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          {headers.map((header) => (
            <th className="px-4 py-2" key={header}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {Object.keys(row).map((key) => (
              <td className="border px-4 py-2" key={key}>
                {row[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
