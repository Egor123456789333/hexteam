import {
  observable,
  computed,
  action,
  autorun,
  when,
  reaction,
  runInAction,
} from "mobx";
import { observer } from "mobx-react";
import { makeAutoObservable } from "mobx";

interface IUser {
  login?: string;
  id?: number;
}

interface IUserStore {
  _isAuth: boolean;
  _user: IUser;
}

export default class UserStore implements IUserStore {
  _isAuth = false;
  _user = {};
  constructor() {
    makeAutoObservable(this);
  }
  setIsAuth(bool: boolean) {
    this._isAuth = bool;
  }
  setUser(user: IUser) {
    this._user = user;
  }

  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
}
