import { useState } from "react";
import "../App.css";
import { IEmployee, dummyEmployeeList } from "./Employee.type";
import FormList from "./Form.List";
import AddForm from "./AddForm";
import { PageList } from "./Employee.type";

export default function Home() {
  const [employeeList, setEmployeeList] = useState(
    dummyEmployeeList as IEmployee[]
  );
  const [shownPage, setShownPage] = useState(PageList.List);

  const addEmployeeHandler = () => {
    setShownPage(PageList.Add)
  }

  const showPage = () => {
    setShownPage(PageList.List)
  }

  const addEmployee = (data: IEmployee) => {
    setEmployeeList([...employeeList, data])
  }

  return (
    <div>
      <h1 className="text-white bg-indigo-800 text-center py-4 text-2xl font-semibold">
        REACT : CRUD SIMPLE APPLICATION
      </h1>
      <div className="my-12 mx-12">
        {shownPage === PageList.List && (
          <>
            <input
              type="button"
              value="Add Page"
              className="border border-gray-500 px-4 py-2 bg-black text-white"
              onClick={addEmployeeHandler}
            /> 
            <FormList List={employeeList} />
          </>
        )}
        {shownPage === PageList.Add && <AddForm onBackBtnClickHand={showPage} onSubmitClickHnd={addEmployee} />}
      </div>
    </div>
  );
}
