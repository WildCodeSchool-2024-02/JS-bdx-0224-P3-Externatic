function TagStatusGreen({status}) {
  return (
    <p className="text-[var(--validation-color-ok)] px-2 border border-[var(--green-color)] text-center max-md:text-xs">
     {status}
    </p>
  );
}

export default TagStatusGreen;
