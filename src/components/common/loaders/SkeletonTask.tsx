export const SkeletonTask = () => {
  return (
    <div className="w-full py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 2xl:gap-10">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="w-full h-fit bg-white shadow-md p-4 rounded-md animate-pulse"
        >
          <div className="flex flex-col gap-2">
            <div className="w-full flex justify-between">
              <div className="flex flex-1 gap-1 items-center text-sm font-medium">
                <span className="w-6 h-6 bg-gray-300 rounded-full"></span>
                <span className="w-24 h-4 bg-gray-300 rounded"></span>
              </div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
              <div className="w-48 h-4 bg-gray-300 rounded"></div>
            </div>
            <span className="w-32 h-4 bg-gray-300 rounded"></span>

            <div className="py-4 border-t border-gray-200">
              <span className="w-20 h-4 bg-gray-300 rounded"></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
