import React, {useState, MouseEvent} from "react";
import { ProfileCardI } from "../utilities/interfaces";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const ProfileCard: React.FC<ProfileCardI> = ({ img_src, name, users, setUsers, setSelectedGuest }) => {
  const [deleteShow, setDeleteShow] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");

  const openModel = (e:MouseEvent<HTMLParagraphElement>):void=> {
    e.stopPropagation()
    setSelected(name)
    setDeleteShow(true)
  }

  return (
    <>
      <div className="profile-card" onClick={()=>setSelectedGuest(users.filter((user)=>user.name === name)[0])}>
        <img src={img_src} />
        <h3>{name}</h3>
        <p onClick={(e)=>openModel(e)}>DELETE</p>
      </div>
      <ConfirmDeleteModal
        show={deleteShow}
        onHide={() => setDeleteShow(false)}
        users={users}
        setUsers={setUsers}
        name={selected}
      />
    </>
  );
};

export default ProfileCard;
