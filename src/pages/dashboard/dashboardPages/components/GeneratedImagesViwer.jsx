import ReactCompareImage from "react-compare-image";

const GeneratedImagesViwer = (props) => {
  return (
    <div className="DesignGridDiv">
      <div className="DesignGridLayout">
        {Object.values(props.generatedImages).map((e, key) => {
          return [
            <div className="grid_item1">
              <ReactCompareImage
                key={"desingn_generated_"}
                leftImageCss={{
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
                rightImageCss={{
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
                leftImage={props.file}
                rightImage={e}
              />
            </div>,
          ];
        })}
      </div>
    </div>
  );
};

export default GeneratedImagesViwer;
