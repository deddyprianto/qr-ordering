import PropTypes from "prop-types"

export const RenderTagInsight = ({ insights }) => {
  return insights?.map((insight) => {
    return (
      <div
        key={insight.insightName + "" + insight.insightTagIcon}
        className="items-center flex aspect-[2.8076923076923075] flex-col justify-center p-1 rounded-full"
        style={{ backgroundColor: insight.insightTagColor }}
      >
        <img
          alt={insight.insightName}
          loading="lazy"
          src={insight.insightTagIcon}
          className="aspect-square object-contain object-center w-[18px] overflow-hidden"
        />
      </div>
    );
  });
}

RenderTagInsight.propTypes = {
  insights: PropTypes.array
}