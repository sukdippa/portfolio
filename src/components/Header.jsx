const Header = ({ title, description }) => {
    return (
      <div className={`max-w-[30rem] h-[20rem] flex flex-col justify-center items-center text-center mx-auto pb-4`}>
        <h1>{title}</h1>
          <p>
            {description}
          </p>
      </div>
  );
};
export default Header;