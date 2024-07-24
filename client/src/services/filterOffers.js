export default function filterOffers(offers, formData) {
  return offers.filter(
    (offer) =>
      offer.city.toLowerCase().includes(formData.city.toLocaleLowerCase()) &&
      offer.type.toLowerCase().includes(formData.type.toLocaleLowerCase()) &&
      offer.technos.some((techno) =>
        techno.name.toLowerCase().includes(formData.technos.toLocaleLowerCase())
      )
  );
}
