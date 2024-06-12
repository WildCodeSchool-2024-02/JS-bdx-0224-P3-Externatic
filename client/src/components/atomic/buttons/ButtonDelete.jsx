function ButtonDelete({name, img, alt}) {
  return (
    <button
      className=" flex justify-around items-center w-36 h-11 bg-[var(--primary-color)] font-medium text-[var(--primary-background-color)] rounded-lg cursor-pointer max-md:w-24 max-md:h-8 max-md:font-normal max-md:text-sm"
      type="button"
    >
      {name}
      <img src={img} alt={alt} />
    </button>
  );
}

export default ButtonDelete;
