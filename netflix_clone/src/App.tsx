import { useEffect, useState } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { GuestUserI } from "./utilities/interfaces";

function App() {
  const [users, setUsers] = useState<Array<GuestUserI>>(
    useLoaderData() as Array<GuestUserI>
  );
  const [selectedGuest, setSelectedGuest] = useState<GuestUserI | null>(null);
  const [selectedTab, setSelectedTab] = useState<string>("movie");
  const navigate = useNavigate();

  const chooseAUser = () => {
    if (selectedGuest) {
      navigate("/browse");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    chooseAUser();
  }, [selectedGuest]);

  return (
    <>
      <>
        {selectedGuest && (
          <div id="top-spacer">
            <NavBar setSelectedTab={setSelectedTab} />
          </div>
        )}
      </>
      <Outlet
        context={{
          users,
          setUsers,
          selectedGuest,
          setSelectedGuest,
          selectedTab,
        }}
      />
    </>
  );
}

export default App;
