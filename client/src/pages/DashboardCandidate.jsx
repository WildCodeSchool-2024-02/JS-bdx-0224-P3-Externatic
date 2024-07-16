/* eslint-disable import/no-unresolved */
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FileUpload from "../components/atomic/FileUpload";
import Tag from "../components/atomic/tag/Tag";
import Button from "../components/atomic/buttons/Button";
import CardOfferForCandidate from "../components/atomic/card/CardOfferForCandidate";

import "../../index.css";

function DashboardCandidate() {
  const data = useLoaderData();
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/favorites`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        setFavorites(result);
      } catch (err) {
        throw new Error("Error fetching favorites", err);
      }
    };

    fetchFavorites();
  }, [data.id]);

  return (
    <main>
      <article className="p-5 md:pl-40 md:pr-40 flex flex-col">
        <header className="mt-10 text-md flex flex-col-reverse items-center gap-5 md:flex-row md:gap-16 md:justify-between ">
          <ul className="flex flex-col gap-2">
            <li>
              <h1 className=" text-[var(--primary-color)] mb-5">
                {data.firstname} {data.lastname}
              </h1>
            </li>
            <li>Mail: {data.email || "Non renseigné"}</li>
            <li>Tel: {data.phone || "Non renseigné"}</li>
            <li>Localisation: {data.name || "Non renseigné"}</li>
          </ul>
          <img
            src={data.picture || "https://picsum.photos/200"}
            alt=""
            className="md:w-2/12 w-1/2 rounded-full"
          />
        </header>
        <FileUpload />
        <h2 className="text-[var(--primary-color)] pb-3">Mes compétences</h2>
        <ul className="flex flex-wrap gap-5">
          {data.technos && data.technos.length > 0 ? (
            data.technos.map((techno) => (
              <li className="list-none" key={techno.id}>
                <Tag text={techno.name} apply="tag" />
              </li>
            ))
          ) : (
            <li className="list-none">Pas de compétences sélectionnées</li>
          )}
        </ul>
        <h2 className="text-[var(--primary-color)] pb-3 pt-10">Mes favoris</h2>
        <ul className="flex flex-wrap gap-5">
          {favorites.length === 1 ? (
            <li key={favorites[0].id}>
              <CardOfferForCandidate offer={favorites[0]} />
            </li>
          ) : (
            <Swiper
              slidesPerView="1"
              spaceBetween={10}
              keyboard={{
                enabled: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                }
              }}
              pagination={{
                clickable: true,
              }}
              navigation
              modules={[Keyboard, Pagination, Navigation]}
              className="mySwiper"
            >
              {favorites.length > 0 ? (
                favorites.map((offer) => (
                  <SwiperSlide key={offer.id}>
                    <li key={offer.id}>
                      <CardOfferForCandidate offer={offer} />
                    </li>
                  </SwiperSlide>
                ))
              ) : (
                <li className="list-none">Pas de favoris sélectionnés</li>
              )}
            </Swiper>
          )}
        </ul>
      </article>
      <footer className="flex flex-col items-center gap-5 p-5">
        <Button type="button" apply="big" name="Déconnexion" />
        <Button type="button" apply="bigDelete" name="Supprimer mon compte" />
      </footer>
    </main>
  );
}

export default DashboardCandidate;
