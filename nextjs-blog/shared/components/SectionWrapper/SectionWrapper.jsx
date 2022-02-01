import PropTypes from "prop-types";

import s from "./SectionWrapper.module.css";

const SectionWrapper = ({ title, children }) => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        {title && <h2 className={s.title}>{title}</h2>}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;

SectionWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
