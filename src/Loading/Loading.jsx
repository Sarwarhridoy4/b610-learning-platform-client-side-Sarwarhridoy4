import "./Loading.css";

const Loading = () => {
  return (
    <div className='page-shell min-h-[60vh] px-4 py-10'>
      <div className='skeleton-wrapper' aria-label='Loading content'>
        <div className='skeleton skeleton-title'></div>
        <div className='skeleton skeleton-subtitle'></div>

        <div className='skeleton-grid'>
          <div className='skeleton-card'>
            <div className='skeleton skeleton-thumb'></div>
            <div className='skeleton skeleton-line'></div>
            <div className='skeleton skeleton-line short'></div>
          </div>
          <div className='skeleton-card'>
            <div className='skeleton skeleton-thumb'></div>
            <div className='skeleton skeleton-line'></div>
            <div className='skeleton skeleton-line short'></div>
          </div>
          <div className='skeleton-card'>
            <div className='skeleton skeleton-thumb'></div>
            <div className='skeleton skeleton-line'></div>
            <div className='skeleton skeleton-line short'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
