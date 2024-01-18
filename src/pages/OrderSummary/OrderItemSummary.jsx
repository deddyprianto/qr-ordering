export function OrderItemSummary() {
  return (
    <div className="mt-[24px] justify-center items-stretch self-stretch border border-[color:var(--Brand-color-Primary,#00524C)] bg-white flex w-full flex-col mx-auto pb-4 rounded-lg border-solid">
      <div className="text-white text-sm font-medium leading-5 tracking-wide whitespace-nowrap justify-center bg-emerald-800 w-full pl-4 pr-16 py-1.5 items-start rounded-t-md">
        Order Summary
      </div>
      <div className="items-stretch flex w-full flex-col mt-4 px-4 rounded-lg">
        <div className="items-stretch bg-zinc-300 flex gap-1 p-2">
          <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
            Qty
          </div>
          <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide grow shrink basis-auto">
            Item
          </div>
          <div className="text-gray-700 text-right text-sm font-bold leading-5 tracking-wide whitespace-nowrap">
            Price
          </div>
        </div>
        {/* item no modifier */}
        <div className="grid grid-cols-[25px_1fr_57px] mt-1 border border-[color:var(--Brand-color-Tertiary,#FFF)] bg-stone-50 gap-1 p-2 border-solid">
          <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide whitespace-nowrap self-start">
            2X
          </div>
          <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide grow shrink basis-auto">
            Steamed Mini Bun w Chicken Char Siew(SK11)
          </div>
          <div className="text-gray-700 text-right text-sm font-bold leading-5 tracking-wide whitespace-nowrap self-start">
            $ 5.00
          </div>
        </div>
        {/* item with modifier */}
        <div className="items-stretch border border-[color:var(--Brand-color-Tertiary,#FFF)] bg-stone-50 flex w-full flex-col p-2 border-solid">
          <div className="grid grid-cols-[25px_1fr_57px] mt-1 gap-1">
            <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide whitespace-nowrap self-start">
              1X
            </div>
            <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide grow shrink basis-auto">
              MERRY SET D Nasi Lemak Set (10Pax)
            </div>
            <div className="text-gray-700 text-right text-sm font-bold leading-5 tracking-wide whitespace-nowrap self-start">
              $ 138.00
            </div>
          </div>
          <div className="grid grid-cols-[25px_1fr_36px] pl-[21px] mt-1">
            <div className="text-neutral-400 text-xs font-medium leading-4 tracking-wide whitespace-nowrap">
              (1X)
            </div>
            <div className="text-neutral-400 text-xs font-medium leading-4 tracking-wide">
              Fried Tempeh with Kicap Manis Fried Tempeh
            </div>
            <div className="text-neutral-400 text-right text-sm font-medium leading-5 tracking-wide self-stretch">
              FREE
            </div>
          </div>
        </div>
      </div>
      <div className="items-stretch flex justify-between gap-4 mt-4 px-4">
        <div className="justify-center text-gray-700 text-sm font-medium leading-5 tracking-wide grow whitespace-nowrap">
          Subtotal
        </div>
        <div className="text-gray-700 text-right text-base font-bold leading-6 whitespace-nowrap">
          $ 348.00
        </div>
      </div>
      <div className="items-stretch flex justify-between gap-4 mt-2 px-4">
        <div className="justify-center text-gray-700 text-sm font-medium leading-5 tracking-wide grow whitespace-nowrap">
          Service Charge
        </div>
        <div className="text-gray-700 text-right text-base font-bold leading-6 whitespace-nowrap">
          $ 34.80
        </div>
      </div>
      <div className="items-stretch flex justify-between gap-4 mt-2 px-4">
        <div className="justify-center text-gray-700 text-sm font-medium leading-5 tracking-wide grow whitespace-nowrap">
          GST 8%
        </div>
        <div className="text-gray-700 text-right text-base font-bold leading-6 whitespace-nowrap">
          $ 30.62
        </div>
      </div>
      <div className="bg-zinc-300 min-h-[1px] w-full mt-4" />
      <div className="justify-between flex w-full gap-5 mt-4 px-4 items-start">
        <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide">
          TOTAL PAYMENT
        </div>
        <div className="text-emerald-800 text-base font-bold leading-6 self-stretch">
          $ 413.42
        </div>
      </div>
    </div>
  );
}
