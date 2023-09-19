import React from "react";
import Navbar from "../../components/navbar/Navbar";
import CreateOffer from "../../components/createOffer/CreateOffer";
import useStore from "../../store/StateZustand";
import { useEffect } from "react";

function Profile() {
  const { currentUser, getCurrentUser, getOfferProfiles, offerProfiles } =
    useStore();

  useEffect(() => {
    const fetchData = async () => {
      await getCurrentUser();
      await getOfferProfiles();
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar currentUser={currentUser} offerProfiles={offerProfiles} />
      <CreateOffer />
    </div>
  );
}

export default Profile;
