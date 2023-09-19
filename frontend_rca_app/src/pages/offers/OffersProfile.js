import { useEffect } from "react";
import useStore from "../../store/StateZustand";
import ProfileCard from "../../components/profileCard/ProfileCard";
import Navbar from "../../components/navbar/Navbar";

function OffersProfile() {
  const { offerProfiles, getOfferProfiles, currentUser, getCurrentUser } =
    useStore();

  useEffect(() => {
    const fetchData = async () => {
      await getOfferProfiles();
      await getCurrentUser();
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar currentUser={currentUser} offerProfiles={offerProfiles} />
      <h1 className="py-3 text-center">Offers</h1>
      <div className="container">
        <div class="row">
          {offerProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OffersProfile;
