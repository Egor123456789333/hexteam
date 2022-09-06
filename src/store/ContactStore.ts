import { makeAutoObservable } from "mobx";

interface IContact {
  userId: number;
  id: number;
  name: string;
  number: string;
}

interface IContactStore {
  _contacts: IContact[];
}

export default class ContactStore implements IContactStore {
  _contacts = [];
  constructor() {
    makeAutoObservable(this);
  }

  // setContacts(contacts: IContact[]) {
  //   this._contacts = contacts;
  // }

  // get contacts() {
  //   return this._contacts;
  // }
}
