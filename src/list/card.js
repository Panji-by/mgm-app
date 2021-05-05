import React, { useState, useEffect } from "react";
import axios from "axios";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const CardList = (props) => {
  const [json, setJson] = useState([]);
  const [err, setErr] = useState(null);
  const [page, setPage] = useState(1);
  const [favorites, setFavorite] = useState("");
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/${page}/photos`)
      .then((res) => {
        let card2 = json;
        console.log("INI CARD", card2);
        setJson([...card2, ...res.data]);
      })
      .catch((error) => {
        setErr(error);
      });
  }, [page]);
  const addPage = () => {
    setPage(page + 1);
  };
  console.log(json);

  useEffect(async () => {
    let savedFavorite = await localStorage.getItem("favourite");
    if (savedFavorite) {
      setFavorite(savedFavorite);
    }
  }, []);

  return (
    <div>
      <form>
        <input
          type="text"
          id="search"
          name="search"
          style={{
            paddingRight: "10px",
            marginTop: "12px",
            marginLeft: "15px",
            marginRight: "15px",
          }}
        />
        <button className="btn btn-primary">Search</button>
      </form>

      <div className="row" style={{ margin: "15px" }}>
        {json.map((data, idx) => {
          return (
            <Card className="col col-lg-2">
              <CardImg
                top
                width="100%"
                src={data.thumbnailUrl}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">{data.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  {data.url}
                </CardSubtitle>
              </CardBody>
              <button href="#" className="button-bookmark fa-2x">
                <FontAwesomeIcon icon={faBookmark} />
              </button>
            </Card>
          );
        })}
        <Button onClick={addPage}>Load More</Button>
      </div>
    </div>
  );
};

export default CardList;
