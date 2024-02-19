import PropTypes from "prop-types"

export const RenderTag = ({ insights }) => {
  return( 
    <div className="flex flex-wrap items-stretch gap-2.5 mt-[10px]">
      {insights?.map((insight)=>{
        return (
          <div key={insight.insightName+''+insight.insightTagIcon}
            className="flex items-center justify-between gap-1 px-2 py-1 rounded-[100px]"
              style={{backgroundColor: insight.insightTagColor}}
            >
               <img
                alt={insight.insightName}
                loading="lazy"
                src={insight.insightTagIcon}
                className="aspect-square"
              />
              <div className="text-white text-xs font-medium leading-4 tracking-wide" 
              >
                {insight.insightName}
              </div>
          </div>
        )
      })}
    </div>
  );
}

RenderTag.propTypes = {
  insights: PropTypes.array
}
