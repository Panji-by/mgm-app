import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button, Modal, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import ReadMoreReact from "read-more-react";
import ModalCartOk, { ModalTwo } from "../layout/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const DetailPage = () => {
  const [json, setJson] = useState([]);
  const [err, setErr] = useState(null);
  const { id } = useParams();
  const [modalCart, setModalCart] = useState(false);
  const toggleModalCart = () => setModalCart(!modalCart);
  const toggleModalBook = () => setModalCart(!modalCart);

  console.log(id);
  useEffect(() => {
    axios
      .get(
        `https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/${id}`
      )
      .then((res) => {
        setJson(res.data.value);
      })
      .catch((error) => {
        setErr(error);
      });
  }, []);
  console.log(json);

  return (
    <div className="shadow">
      <div className="row">
        <div className="col col-lg-2">
          <img src={json.image} className="little-image" />
        </div>
        <div className="col col-lg-8">
          <div>
            <h2>{json.name}</h2>
            <p>
              {json.grapeVarieties} {json.vintageYear}
            </p>
            <br />
          </div>
          <div className="flex-container">
            <div>
              <h5>S$ {json.price}</h5>
            </div>
            <div className="row testing" style={{ marginLeft: "20%" }}>
              {json.qty < 5 ? (
                <div className="col">
                  <button className="wine-left">
                    {json.qty}
                    <br />
                    Left
                  </button>
                </div>
              ) : null}
            </div>
          </div>
          <button
            href="#"
            style={{ marginBottom: "6%" }}
            className="btn-gold"
            onClick={toggleModalCart}
          >
            ADD TO CART
          </button>
          <button
            href="#"
            style={{
              color: "goldenrod",
              border: "none",
              padding: "none",
              backgroundColor: "white",
            }}
            className="button-bookmark fa-2x"
            onClick={toggleModalBook}
          >
            <FontAwesomeIcon icon={faBookmark} />
          </button>
          <Modal
            isOpen={modalCart}
            toggle={toggleModalCart}
            className="centered-modal"
          >
            <ModalCartOk itemLabel={json.name} />
          </Modal>
          <Modal
            isOpen={modalCart}
            toggle={toggleModalBook}
            className="centered-modal"
          >
            <ModalTwo itemLabel2={json.name} />
          </Modal>

          <hr />
          <div className="flex-container ">
            <div className="diva">
              <p>Region </p>
              <h5>{json.region}</h5>
            </div>
            <div className="diva">
              <p>Producer </p>
              <h5>{json.producer}</h5>
            </div>
            <div className="diva">
              <p>Bottle </p>
              <h5>{json.bottleSize}</h5>
            </div>
            <div className="diva">
              <p>Alcohol </p>
              <h5>{json.alcohol}</h5>
            </div>
          </div>
          <hr />
          <div>
            <p style={{ color: "goldenrod" }}>Description</p>
            <h6>{json.description}</h6>
          </div>
          <p style={{ color: "goldenrod" }}>Testing Notes</p>
          <h6>{json.tastingNotes}</h6>
          {/* <ReadMoreReact
            text={json.tastingNotes}
            min={400}
            ideal={450}
            max={500}
            readMoreText="read more..."
          /> */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
