import PropTypes from "prop-types";

const ResponsivePicture = (props) => {
  const { mobile1x, mobile2x, tablet1x, tablet2x, desktop1x, desktop2x, alt } =
    props;
  return (
    <>
      <picture>
        <source
          srcset={`${desktop1x} 1x, ${desktop2x} 2x`}
          media="(min-width: 1200px)"
        />

        <source
          srcset={`${tablet1x} 1x, ${tablet2x} 2x`}
          media="(min-width: 768px)"
        />
        <img
          srcset={`${mobile1x} 1x, ${mobile2x} 2x`}
          src={mobile1x}
          alt={alt}
        />
      </picture>
    </>
  );
};
export default ResponsivePicture;

ResponsivePicture.propTypes = {
  props: PropTypes.objectOf(PropTypes.string),
};
