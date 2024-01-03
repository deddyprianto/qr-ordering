export const RenderTagInsight = () => {
  return (
    <div className="absolute bottom-1 left-1 right-0">
      <div className="relative items-stretch flex gap-1 mt-16">
        <div className="items-center bg-lime-700 flex aspect-[2.8076923076923075] flex-col justify-center p-1 rounded-full">
          <img
            alt="Chef's Recomendation"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0271d4175bcbe9354d8b97e5f1623617c1f73da2ef180946a2ebd96d7d026452?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&"
            className="aspect-square object-contain object-center w-[18px] overflow-hidden"
          />
        </div>
        <div className="items-center bg-amber-500 flex aspect-[2.8076923076923075] flex-col justify-center p-1 rounded-full">
          <img
            alt="Spicy"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/13238e88d8532457614e4633cd608dda5918afb999981681e3ba44b8fc4196fb?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&"
            className="aspect-square object-contain object-center w-[18px] overflow-hidden"
          />
        </div>
        <div className="items-center bg-amber-500 flex aspect-[2.8076923076923075] flex-col justify-center p-1 rounded-full">
          <img
            alt="Customer Favorite"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/13238e88d8532457614e4633cd608dda5918afb999981681e3ba44b8fc4196fb?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&"
            className="aspect-square object-contain object-center w-[18px] overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
}