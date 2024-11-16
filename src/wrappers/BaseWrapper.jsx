const BaseWrapper = ({ children }) => {
  return (
    <>
      <div className="w-full overflow-x-hidden ">{children}</div>
    </>
  );
};

export default BaseWrapper;
