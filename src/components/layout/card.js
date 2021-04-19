import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import ModalCartOk from "./modal";
import { Container, Button, Modal, Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { getProductList } from "../../store/action/getProductList";
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";
import { useHistory } from 'react-router-dom'

const Card = () => {
  
  const [json, setJson] = useState([]);
  const [err, setErr] = useState(null);
  const history = useHistory();
  const [scroll, setScroll] = useState(0);
  const [tinggiId, setTinggiId] = useState(0);
  const [load, setLoad] = useState(false);
  
  const [page, setPage] = useState(1);
  useEffect(() => {
    setLoad(true)
    axios
      .get(
        `https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/list?page=${page}`
      )
      .then((res) => {
        let card2 = json
        console.log("INI CARD",card2);
        setJson([...card2,...res.data.value.products]);
        setLoad(false);
      })
      .catch((error) => {
        setErr(error);
        setLoad(false);
      });
  }, [page]);
  console.log("ini page",page);

  useEffect(() => {
   let doc = document.getElementById("infinite-scroll").offsetTop
   setTinggiId(doc)
  },[json]);
  console.log("tinggi id", tinggiId)

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.pageYOffset);
    }
  },[]);
  useEffect(()=> {
    if(scroll!== 0) {
      if(scroll > (tinggiId-700)){
        console.log("succes")
        setPage(page+1);
      } 
    }
    
  },[scroll]);
  console.log("INI SCROLL",scroll);
  console.log("ini JSON",json);

  const sendParam = (id) => {
    history.push(`/detail/${id}`)
console.log(id);
  }

  const hadleLoad = () => {
    setPage(page + 1);
  };

  // Modal
  const [modalCart, setModalCart] = useState(false);
  const toggleModalCart = () => setModalCart(!modalCart);
  const toggleModalBook = () => setModalCart(!modalCart);


  return (
    <>
      <div className="row grid-container">
      {/* <div style={{height:"700px";overflow:"auto";}} ref={(ref) => this.scrollParentRef = ref}>
        <InfiniteScroll
    pageStart={1}
    loadMore={hadleLoad}
    hasMore={true || false}
    loader={<div className="loader" key={0}>Loading ...</div>}
>  */}
        {json.map((data, idx) => {
          return (
            <div
              className="card col-lg-4 image-left"
              style={{ width: "18rem;" }}
              key={data.id}
            >
              <img className="awesome-wine-image" src={data.image}></img>
              <div className="card-body crad-left">
                <div>
                  <div onClick={()=> sendParam(data.id)}>
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">
                      {data.country} <br />
                      {data.grapeVarietes}
                    </p>
                    <div className="row">
                      <div className="col">
                        <h6>S$ {data.price}</h6>
                      </div>
                      {data.qty < 5 ? (
                        <div className="col">
                          <button className="wine-left">
                            {data.qty}
                            <br />
                            Left
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <hr></hr>
                  <button
                    href="#"
                    className="btn-gold"
                    onClick={toggleModalCart}
                  >
                    ADD TO CART
                  </button>
                  <button href="#" className="button-bookmark fa-2x" onClick={toggleModalBook}>
                    <FontAwesomeIcon icon={faBookmark} />
                  </button>
                  <Modal
                    isOpen={modalCart}
                    toggle={toggleModalCart}
                    className="centered-modal"
                    
                  >
                    <ModalCartOk itemLabel={data.name} itemBook="Cart"/>
                  </Modal>
                  <Modal
                    isOpen={modalCart}
                    toggle={toggleModalBook}
                    className="centered-modal"
                    
                  >
                    <ModalCartOk itemLabel={data.name} itemBook="Bookmark"/>
                  </Modal>
                </div>
              </div>
            </div>
          );
        })}
        {/* </InfiniteScroll>
        </div> */}
      </div>
      <button id="infinite-scroll" onClick={hadleLoad}>Load More</button>
    </>
  );
};

export default Card;
