const TableCols = ({data}) => {
    return (
        <tbody className="bg-white overflow-y-scroll scroll scroll-smooth divide-y divide-gray-200">     
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div> 
                        {Object.keys(data).forEach((key) => {
                                <div className="text-sm text-gray-500">
                                    {data[key]}
                                </div>
                                })}
                        </div>  
                    </div>
            </td>
        </tr>
        </tbody>
    )
  }
  
  export default TableCols;
