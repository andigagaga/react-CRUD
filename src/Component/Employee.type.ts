export interface IEmployee{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export const dummyEmployeeList : IEmployee[] = [{
    id: new Date().toJSON().toString(),
    firstName: "andi1",
    lastName: "andi11",
    email: "andi1@gmail.com",
}]

export enum PageList {
    List,
    Add,
}