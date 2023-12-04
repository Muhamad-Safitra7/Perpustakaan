/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export default function CardEvent(props) {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt="" />
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">
          {props.title}
        </h6>
        <p className="card-text">
          {props.text}
        </p>
      </div>
      <div className="card-footer">
        <Link className="btn btn-primary w-100" to={`/event/${props.id}`}>
          Lihat Detail
        </Link>
      </div>
    </div>
  );
}
