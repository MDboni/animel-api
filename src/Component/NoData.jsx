import ErrorImg from '../assets/img/error.webp'

const NoData = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 p-4">
      {/* Left section (image + text) */}
      <div className="w-full lg:w-9/12 text-center">
        <img src={ErrorImg} alt="No Data" className="mx-auto max-h-64 w-auto" />
        <h2 className="text-xl font-semibold text-gray-700 mt-4">No Information Available</h2>
        <p className="pt-4 text-gray-600 text-sm sm:text-base px-4 sm:px-10 md:px-20 lg:px-32 xl:px-48">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
          its layout. The point of using Lorem Ipsum is that it has a.
        </p>
      </div>

      {/* Right section (empty sidebar) */}
      <div className="hidden lg:block w-full lg:w-3/12">
        <div className="h-full border border-red-200 p-4 rounded shadow-sm">
          {/* Sidebar placeholder */}
        </div>
      </div>
    </div>
  )
}

export default NoData
