import { useState } from "react";
import { IEmployee } from "./Employee.type";
import { ChangeEvent } from 'react';

type Props = {
  onBackBtnClickHand: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
};

export default function AddForm(props: Props) {
  const [firstName, setFirsName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { onBackBtnClickHand, onSubmitClickHnd } = props;

  const onFirstNameChangeHnd = (e: ChangeEvent<HTMLInputElement>) => {
    setFirsName(e.target.value);
  };

  const onLastNameChangeHnd = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  

  const onEmailChangeHnd = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    onSubmitClickHnd(data);

    onBackBtnClickHand();
  };
  
  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <form className="bg-gray-400 p-12" onSubmit={onSubmitBtnClickHnd}>
          <h2 className="text-center mb-8 underline text-2xl">Add Employee</h2>
          <div className="mb-4">
            <label htmlFor="input-FirstName" className="mb-12">
              FirstName :
            </label>
            <input
              className="border border-gray-500 w-full"
              type="text"
              id="input-FirstName"
              value={firstName}
              onChange={onFirstNameChangeHnd}
            ></input>
          </div>
          <div className="mb-4">
            <label htmlFor="input-LastName" className="mb-12">
              LastName :
            </label>
            <input
              className="border border-gray-500 w-full"
              type="text"
              id="input-LastName"
              value={lastName}
              onChange={onLastNameChangeHnd}
            ></input>
          </div>
          <div className="mb-4">
            <label htmlFor="input-Email" className="mb-12">
              Email :
            </label>
            <input
              className="border border-gray-500 w-full"
              type="email"
              id="input-Email"
              value={email}
              onChange={onEmailChangeHnd}
            ></input>
          </div>
          <div>
            <input
              type="button"
              className="border border-gray-500 mr-32 text-white bg-black p-1"
              style={{ fontWeight: "bold" }}
              value="BACK"
              onClick={onBackBtnClickHand}
            />

            <input
              type="submit"
              className="border  border-gray-500 bg-green-600 p-1 text-white"
              style={{ fontWeight: "bold" }}
              value="Add Employee"
            />
          </div>
        </form>
      </div>
    </>
  );
}
