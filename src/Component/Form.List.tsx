import { IEmployee } from "./Employee.type";

type Props = {
  List: IEmployee[];
};

export default function FormList(props: Props) {
  const { List } = props;

  return (
    <div className="p-12 flex flex-center">
      <table className="table-auto w-full border ">
        <thead>
          <tr>
            <th className="text-gray-700 border">Name</th>
            <th className="text-gray-700 border">Email</th>
            <th className="text-gray-700 border">action</th>
          </tr>
        </thead>
        <tbody>
          {List.map((employee) => {
            console.log(employee);
            return (
              <tr key={employee.id}>
                <td className="px-4 bg-gray-200 border">{`${employee.firstName} | ${employee.lastName}`}</td>
                <td className="px-4 bg-gray-200 border">{`${employee.email}`}</td>
                <td className="px-4 bg-gray-200 border">
                  <input
                    type="button"
                    value="View"
                    className="pr-2 border border-gray-500 px-2 m-1"
                  />
                  <input
                    type="button"
                    value="Edit"
                    className="pr-2 border border-gray-500 px-2 m-1"
                  />
                  <input
                    type="button"
                    value="Delete"
                    className="pr-2 border border-gray-500 px-2 m-1"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
