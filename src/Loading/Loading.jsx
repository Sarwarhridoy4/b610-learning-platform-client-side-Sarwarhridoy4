import "./Loading.css";

const Loading = () => {
  return (
    <div className='page-shell min-h-[60vh] grid place-items-center'>
      <div className='loader' aria-label='Loading'>
        <span>Loading</span>
      </div>
    </div>
  );
};

export default Loading;
