import "../styles/components/informationcontainer.sass";

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
  const handlePhoneClick = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=5522997860606&text&type=phone_number&app_absent=0",
      "_blank"
    );
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:hiagoliv3ira@gmail.com";
  };

  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/ok61zQmxLWXsREAA9", "_blank");
  };

  return (
    <section id="information">
      <div className="info-card" onClick={handlePhoneClick}>
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(22) 99786-0606</p>
        </div>
      </div>
      <div className="info-card" onClick={handleEmailClick}>
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>hiagoliv3ira@gmail.com</p>
        </div>
      </div>
      <div className="info-card" onClick={handleLocationClick}>
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Campos dos Goytacazes / RJ</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
