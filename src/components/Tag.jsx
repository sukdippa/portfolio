const Tag = ({ label }) => {
  return (
    <div className="rounded-full bg-[#bcc2db2e] text-[rgb(156,156,167)] px-2 py-1 justify-center items-center">
        <p className="leading-none text-xs">
            {label}
        </p>
    </div>
  );
}
export default Tag;