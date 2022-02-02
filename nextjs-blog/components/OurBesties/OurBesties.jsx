import GetIcon from "../../shared/components/GetIcon";

const OurBesties = () => {
  return (
    <ul>
      <li>
        <div>
          <GetIcon
            width={"70px"}
            height={"70px"}
            name={"attention-to-details"}
            className={"svg-picture"}
          />
        </div>
        <h3>Внимание к деталям</h3>
        <p>
          Идейные соображения, а также начало повседневной работы по
          формированию позиции.
        </p>
      </li>

      <li>
        <div>
          <GetIcon
            width={"70px"}
            height={"70px"}
            name={"punctuality"}
            className={"svg-picture"}
          />
        </div>
        <h3>Пунктуальность</h3>
        <p>
          Задача организации, в особенности же рамки и место обучения кадров
          влечет за собой.
        </p>
      </li>

      <li>
        <div>
          <GetIcon
            width={"70px"}
            height={"70px"}
            name={"planing"}
            className={"svg-picture"}
          />
        </div>
        <h3>Планирование</h3>
        <p>
          Равным образом консультация с широким активом в значительной степени
          обуславливает.
        </p>
      </li>

      <li>
        <div>
          <GetIcon
            width={"70px"}
            height={"70px"}
            name={"modern-technologies"}
            className={"svg-picture"}
          />
        </div>
        <h3>Современные технологии</h3>

        <p>
          Значимость этих проблем настолько очевидна, что реализация плановых
          заданий.
        </p>
      </li>
    </ul>
  );
};

export default OurBesties;
