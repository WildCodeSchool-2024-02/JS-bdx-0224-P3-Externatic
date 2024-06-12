function TagStatusOrange({ status }) {
  return (
    <p className="text-[var(--validation-color-in-progress)] px-2 text-center border border-[var(--validation-color-in-progress)] max-md:text-xs ">
      {status}
    </p>
  );
}

export default TagStatusOrange;
