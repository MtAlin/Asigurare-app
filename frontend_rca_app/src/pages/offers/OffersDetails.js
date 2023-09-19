import React from "react";
import useStore from "../../store/StateZustand";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import LoadingIndicator from "../../components/loading/LoadingIndicator";
import Navbar from "../../components/navbar/Navbar";

function OffersDetails() {
  const {
    offerDetails,
    profileDetails,
    getofferDetails,
    currentUser,
    getCurrentUser,
    offerProfiles,
    isLoading,
  } = useStore();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await getofferDetails(id);
      await getCurrentUser();
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div>
          {" "}
          <Navbar currentUser={currentUser} offerProfiles={offerProfiles} />
          <div className="container py-5">
            <h2>
              Nume: {profileDetails.firstName + " " + profileDetails.lastName}
            </h2>
            <p>adresa de email: {profileDetails.email}</p>
            {offerDetails.map((item) => (
              <div key={item.id}>
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      {item.insuranceType && <th scope="col">Asigurare</th>}
                      {item.date && <th scope="col">Data</th>}
                      {item.chassis && <th scope="col">Serie Sasiu</th>}
                      {item.manufacture && <th scope="col">An fabricatie</th>}
                      {item.registration && (
                        <th scope="col">Numar inregistrare</th>
                      )}
                      {item.carType && <th scope="col">Model</th>}
                      {item.kilometers && <th scope="col">nr. kilometri</th>}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{item.insuranceType}</th>
                      {item.date && <td> {item.date}</td>}
                      {item.chassis && <td> {item.chassis}</td>}
                      {item.manufacture && <td> {item.manufacture}</td>}
                      {item.registration && <td> {item.registration}</td>}
                      {item.carType && <td> {item.carType}</td>}
                      {item.kilometers && <td> {item.kilometers}</td>}
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default OffersDetails;
