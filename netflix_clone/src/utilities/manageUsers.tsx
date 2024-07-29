import { authenticateMyAccount, createGuestSession } from "./api";
import { GuestUserI } from "./interfaces";

export const getCurrentGuestUsers = async (): Promise<Array<GuestUserI>> => {
  let users: Array<GuestUserI> = [];
  if (!localStorage.length) {
    let session_id = await createGuestSession();
    users.push({ name: "Main", session_id: session_id });
    localStorage.setItem("Main", session_id);
  } else {
    for (let key in localStorage) {
      let session_id: string | null = localStorage.getItem(key);
      if (session_id) {
        users.push({ name: key, session_id: session_id });
      }
    }
  }
  return users;
};

export const loadApplication = async():Promise<Array<GuestUserI>> => {
  let authStatus:boolean = await authenticateMyAccount()
  if (authStatus){
    let users = getCurrentGuestUsers()
    return users
  }
  else{
    alert("this application was unable to authenticate with TMDB")
    return []
  }
}

export const createNewGuestUser = async (name: string): Promise<GuestUserI> => {
  let session_id = await createGuestSession();
  let newGuestUser: GuestUserI = {
    name: name,
    session_id: session_id,
  };
  localStorage.setItem(name, session_id);
  return newGuestUser;
};
