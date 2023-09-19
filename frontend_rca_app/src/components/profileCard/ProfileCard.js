import { Link } from "react-router-dom";
import UserPng from "../../utils/image/logo192.png";

function ProfileCard({ profile }) {
  let imgUrl = UserPng;
  return (
    <div class="col-sm-6 col-lg-4 col-xl-3">
      <div className="card p-3 text-center mb-3 mb-4">
        <img className="img-fluid w-25" src={imgUrl} alt="" />
        <h4>{profile.firstName + " " + profile.lastName}</h4>
        <p>{profile.email}</p>
        <Link to={`/offerDetails/${profile.id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
