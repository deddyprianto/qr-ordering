const PaymentSummarySkeleton = () => {
  return (
    <div className="bg-white p-1 animate-pulse">
      {/* Row 1 */}
      <div className="flex justify-between mb-4">
        <div className="w-2/5 h-4 bg-gray-300 rounded"></div>
        <div className="w-[10%] h-4 bg-gray-300 rounded"></div>
      </div>
      {/* Row 2 */}
      <div className="flex justify-between mb-4">
        <div className="w-3/5 h-4 bg-gray-300 rounded"></div>
        <div className="w-[10%] h-4 bg-gray-300 rounded"></div>
      </div>
      {/* Row 3 */}
      <div className="flex justify-between mb-4">
        <div className="w-[70%] h-4 bg-gray-300 rounded"></div>
        <div className="w-[10%] h-4 bg-gray-300 rounded"></div>
      </div>
      {/* Row 4 */}
      <div className="flex justify-between mb-4">
        <div className="w-3/5 h-4 bg-gray-300 rounded"></div>
        <div className="w-[10%] h-4 bg-gray-300 rounded"></div>
      </div>
      {/* Row 5 */}
      <div className="flex justify-between mb-4">
        <div className="w-2/5 h-4 bg-gray-300 rounded"></div>
        <div className="w-[10%] h-4 bg-gray-300 rounded"></div>
      </div>
      {/* Row 6 */}
      <div className="flex justify-between">
        <div className="w-[70%] h-4 bg-gray-300 rounded"></div>
        <div className="w-[10%] h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default PaymentSummarySkeleton;
