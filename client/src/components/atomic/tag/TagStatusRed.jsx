
function TagStatusRed({status}) {
  return (
    <p className="text-[var(--secondary-color)] px-2 text-center border border-[var(--secondary-color)] max-md:text-xs ">
    {status}
  </p>
  )
}

export default TagStatusRed