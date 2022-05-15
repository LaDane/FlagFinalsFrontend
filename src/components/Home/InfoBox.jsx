import "./InfoBox.css";

function InfoBox({ title, info, svg }) {
  return (
    <div className="info">
      <h3>{title}</h3>
      <div className="info__bottom">
        <p>{info}</p>
        {svg != null ? (
          <img
            src={"https://countryflagsapi.com/svg/" + svg}
            height="60"
            width="90"
            alt="flag"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default InfoBox;
