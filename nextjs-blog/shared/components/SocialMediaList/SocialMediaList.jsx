import GetIcon from "../GetIcon";

const SocialMediaList = () => {
  return (
    <ul>
      <li>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GetIcon
            className="social-icon"
            width="20px"
            height="20px"
            name="instagram"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GetIcon
            className="social-icon"
            width="20px"
            height="20px"
            name="twitter"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GetIcon
            className="social-icon"
            width="20px"
            height="20px"
            name="facebook"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GetIcon
            className="social-icon"
            width="20px"
            height="20px"
            name="linkedin"
          />
        </a>
      </li>
    </ul>
  );
};
export default SocialMediaList;
