const loading = () => {

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 animate-pulse">

      <div className="h-6 w-40 bg-gray-300 rounded mb-6"></div>

      <div className="grid md:grid-cols-2 gap-8 bg-base-100 shadow-2xl rounded-3xl overflow-hidden">

        {/* Image Skeleton */}
        <div className="h-[400px] bg-gray-300"></div>

        {/* Content Skeleton */}
        <div className="p-6 space-y-5">

          <div className="h-10 bg-gray-300 rounded w-3/4"></div>

          <div className="flex gap-4">
            <div className="h-5 w-24 bg-gray-300 rounded"></div>
            <div className="h-5 w-24 bg-gray-300 rounded"></div>
            <div className="h-5 w-24 bg-gray-300 rounded"></div>
          </div>

          <div className="space-y-3">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>

          <div className="space-y-3">
            <div className="h-6 w-40 bg-gray-300 rounded"></div>

            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default loading;