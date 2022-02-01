import ResponsivePicture from "../../shared/components/ResponsivePicture";
import SocialMediaList from "../../shared/components/SocialMediaList";

import s from "./OurTeam.module.css";

const OurTeam = () => {
  return (
    <ul>
      <li>
        <ResponsivePicture
          mobile1x="/images/mobile/our-team/mobile-img1.jpg "
          mobile2x="/images/mobile/our-team/mobile2x/mobile2x-img1.jpg"
          tablet1x="/images/tablet/our-team/tablet-img1.jpg "
          tablet2x="/images/tablet/our-team/tablet2x/tablet2x-img1.jpg"
          desktop1x="/images/desktop/our-team/desktop-img1.jpg "
          desktop2x="/images/desktop/our-team/desktop2x/desktop2x-img1.jpg"
          alt="Игорь Демьяненко"
        />
        <h3>Игорь Демьяненко</h3>
        <p>Product Designer</p>
        <SocialMediaList />
      </li>
      <li>
        <ResponsivePicture
          mobile1x="/images/mobile/our-team/mobile-img2.jpg "
          mobile2x="/images/mobile/our-team/mobile2x/mobile2x-img2.jpg"
          tablet1x="/images/tablet/our-team/tablet-img2.jpg "
          tablet2x="/images/tablet/our-team/tablet2x/tablet2x-img2.jpg"
          desktop1x="/images/desktop/our-team/desktop-img2.jpg "
          desktop2x="/images/desktop/our-team/desktop2x/desktop2x-img2.jpg"
          alt="Ольга Репина"
        />
        <h3>Ольга Репина</h3>
        <p>Frontend Developerr</p>
        <SocialMediaList />
      </li>
      <li>
        <ResponsivePicture
          mobile1x="/images/mobile/our-team/mobile-img3.jpg "
          mobile2x="/images/mobile/our-team/mobile2x/mobile2x-img3.jpg"
          tablet1x="/images/tablet/our-team/tablet-img3.jpg "
          tablet2x="/images/tablet/our-team/tablet2x/tablet2x-img3.jpg"
          desktop1x="/images/desktop/our-team/desktop-img3.jpg "
          desktop2x="/images/desktop/our-team/desktop2x/desktop2x-img3.jpg"
          alt="Николай Тарасов"
        />
        <h3>Николай Тарасов</h3>
        <p>Marketing</p>
        <SocialMediaList />
      </li>
      <li>
        <ResponsivePicture
          mobile1x="/images/mobile/our-team/mobile-img4.jpg "
          mobile2x="/images/mobile/our-team/mobile2x/mobile2x-img4.jpg"
          tablet1x="/images/tablet/our-team/tablet-img4.jpg "
          tablet2x="/images/tablet/our-team/tablet2x/tablet2x-img4.jpg"
          desktop1x="/images/desktop/our-team/desktop-img4.jpg "
          desktop2x="/images/desktop/our-team/desktop2x/desktop2x-img4.jpg"
          alt="Михаил Ермаков"
        />
        <h3>Михаил Ермаков</h3>
        <p>UI Designer</p>
        <SocialMediaList />
      </li>
    </ul>
  );
};

export default OurTeam;
