export function OrderInformation() {
  return (
    <div className="w-full mt-[24px] justify-center items-stretch self-stretch border border-[color:var(--Brand-color-Primary,#00524C)] bg-white flex  flex-col pb-4 rounded-lg border-solid">
      <div className="text-white text-sm font-medium leading-5 tracking-wide whitespace-nowrap justify-center bg-emerald-800 w-full pl-4 pr-16 py-1.5 items-start rounded-t-md">
        Order Information
      </div>
      <div className="justify-between items-stretch flex gap-5 mt-2.5">
        <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
          <div className="text-gray-700 text-center text-xs font-medium leading-4 tracking-wide">
            Order ID
          </div>
          <div className="text-gray-700 text-right text-base font-bold leading-6 whitespace-nowrap">
            OR23120600790001
          </div>
        </div>
        <div className="justify-center items-stretch flex grow basis-[0%] flex-col border-l border-[#D6D6D6]">
          <div className="text-gray-700 text-center text-xs font-medium leading-4 tracking-wide">
            Queue Number
          </div>
          <div className="text-gray-700 text-right text-base font-bold leading-6 self-center whitespace-nowrap">
            A0001
          </div>
        </div>
      </div>
      <div className="bg-zinc-300 min-h-[1px] w-full mt-2.5" />
      <div className="justify-between items-stretch flex gap-2 mt-2.5 px-4">
        <div className="justify-center text-gray-700 text-sm font-bold leading-5 tracking-wide grow whitespace-nowrap">
          Name
        </div>
        <div className="text-gray-700 text-right text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
          GUEST
        </div>
      </div>
      <div className="justify-between items-stretch flex gap-2 mt-2.5 px-4">
        <div className="justify-center text-gray-700 text-sm font-bold leading-5 tracking-wide grow whitespace-nowrap">
          Table
        </div>
        <div className="text-gray-700 text-right text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
          999
        </div>
      </div>
      <div className="justify-between items-stretch flex gap-2 mt-2.5 px-4">
        <div className="justify-center text-gray-700 text-sm font-bold leading-5 tracking-wide grow whitespace-nowrap">
          Order ID
        </div>
        <div className="text-gray-700 text-right text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
          OR23120600790001
        </div>
      </div>
      <div className="justify-between items-stretch flex gap-2 mt-2.5 px-4">
        <div className="justify-center text-gray-700 text-sm font-bold leading-5 tracking-wide grow whitespace-nowrap">
          Order Type
        </div>
        <div className="text-gray-700 text-right text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
          Dine In
        </div>
      </div>
      <div className="justify-between items-stretch flex gap-2 mt-2.5 px-4">
        <div className="justify-center text-gray-700 text-sm font-bold leading-5 tracking-wide grow whitespace-nowrap">
          Order Time
        </div>
        <div className="text-gray-700 text-right text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
          07-12-2023 08:26
        </div>
      </div>
    </div>
  );
}
