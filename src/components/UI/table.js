import TableCols from "./tableCols";

const Table = ({plotData, rows}) => {
  return (
      <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full overflow-y-scroll scroll divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {rows.map((e) => {
                    return (
                      <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {e}
                  </th>
                    )
                  })}
                </tr>
              </thead>
              
              <tbody className="bg-white overflow-y-scroll scroll scroll-smooth divide-y divide-gray-200">     
              {plotData.map((data) => (
              <tr>
                {Object.values(data).map((value) => {
                      <td key={value} className="px-6 py-4 whitespace-nowrap">
                        {/* <div className="flex items-center"> */}
                          {/* <div className="text-sm font-medium text-gray-900"> */}
                            {/* <div className="text-sm text-gray-500"> */}
                            {value}
                            {/* </div> */}

                          {/* </div> */}

                        {/* </div> */}
                      </td>
                    })}
                </tr>
                ))}
                </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table;

