import ClipLoader from 'react-spinners/ClipLoader';

const Loading = ({ isLoading }) => {
  return (
    <div className='flex justify-center items-center'>
      <ClipLoader color='#123abc' loading={isLoading} size={80} />
    </div>
  );
};
export default Loading;
