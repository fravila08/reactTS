import React, { useState } from "react";
import { ContextI } from "../utilities/interfaces";
import {  useOutletContext } from "react-router-dom";
import NewUserModal from "../components/NewUserModal";
import smiley from "../assets/smiley.jpeg";
import r_smiley from "../assets/r_smiley.png";
import g_smiley from "../assets/green_smiley.png";
import o_smiley from "../assets/o_smiley.png";
import ProfileCard from "../components/ProfileCard";
import plus_sign from "../assets/plus_sign.png";

const ChooseUser: React.FC = () => {
  const { users, setUsers, setSelectedGuest } =
    useOutletContext() as ContextI;
  const [modalShow, setModalShow] = useState<boolean>(false);
  const images = [smiley, g_smiley, r_smiley, o_smiley];

  

  return (
    <>
      <div id="choose-user">
        <h1>Who's Watching?</h1>
        <div id="user-card-display">
          {users.map((user, idx) => (
            <ProfileCard
              name={user.name}
              img_src={images[idx]}
              key={idx}
              users={users}
              setUsers={setUsers}
              setSelectedGuest={setSelectedGuest}
            />
          ))}

          {users.length < 4 ? (
            <div
              className="profile-card"
              onClick={() => setModalShow(!modalShow)}
            >
              <img src={plus_sign} />
              <h3>Add Profile</h3>
              <p></p>
            </div>
          ) : null}
        </div>
      </div>
      <NewUserModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        users={users}
        setUsers={setUsers}
      />
    </>
  );
};

export default ChooseUser;
