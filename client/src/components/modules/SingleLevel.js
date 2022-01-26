import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import StarRatings from "react-star-ratings";
import ReactTooltip from "react-tooltip";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./SingleLevel.css";

const SingleLevel = ({ level, setActiveLevel, image }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="CardImage" variant="top" src={image} />
        <center>
          <div data-tip="Difficulty">
            <ReactTooltip type="info" />
            <StarRatings
              rating={
                level.numRatings === 0
                  ? Math.round(level.difficulty)
                  : Math.round(level.difficulty) / level.numRatings
              }
              starRatedColor="red"
              numberOfStars={5}
              name="difficulty-rating"
              starDimension="20px"
              starSpacing="3px"
              svgIconPath="M41.2998276,8.9405003c5.1903992,0,8.6258965-0.9922004,10.5028992-3.0342002
    C53.4609261,4.1016002,53.4609261,1.9786,53.4599266,0.5h-1l-1,0.0743C51.4609261,1.7989,51.4609261,3.3223,50.3300247,4.5528002
    c-1.4559975,1.5839996-4.4940987,2.3876996-9.0301971,2.3876996c-4.1172028,0-7.1532898,1.1064-9.0235023,3.2900004
    c-2.4276981,2.8339996-1.9081993,6.3935995-1.8846989,6.5430002c0.0049114,0.0314999,0.0226002,0.0565987,0.0301991,0.0868988
    h-4.0018997c-0.5527,0-1,0.4473-1,1v5.9131012c-8.8017998,2.3915997-14.879899,10.3016987-14.879899,19.5067997
    C10.5400267,54.4296989,19.6103268,63.5,30.7597256,63.5s20.2207012-9.0703011,20.2207012-20.2196999
    c0-8.7256012-5.4501991-16.3203011-13.6406021-19.1259995v-6.2939014c0-0.5527-0.4472847-1-1-1h-3.9916992
    c0.0311012-0.1238995,0.0400009-0.2556,0.0200005-0.3895988c-0.0038986-0.0284004-0.3915882-2.8331003,1.4424133-4.9571009
    C35.2851257,9.8066998,37.8047256,8.9405003,41.2998276,8.9405003z M36.0498276,25.8388996
    c7.6133003,2.3076,12.9305992,9.4795017,12.9305992,17.4414005C48.9804268,53.3272018,40.8066254,61.5,30.7597256,61.5
    c-10.0467987,0-18.2196999-8.1727982-18.2196999-18.2196999c0-8.5360985,5.7997999-15.8358994,14.1045122-17.7529011
    c0.4540882-0.1044998,0.7753868-0.5087986,0.7753868-0.9745998v-5.6924h7.919899v6.0215015
    C35.3398247,25.3223,35.6279259,25.7110004,36.0498276,25.8388996zM27.413126,29.2910995c-0.1064987,0.0272999-10.6728992,2.8408012-10.6728992,13.3690987c0,0.5527,0.4472008,1,1,1
    c0.5527,0,1-0.4473,1-1c0-8.9569969,8.7938995-11.3349991,9.1688995-11.4315987
    c0.5333004-0.1387005,0.8554993-0.6826992,0.7187996-1.2167988C28.4902267,29.4766006,27.9463272,29.1534004,27.413126,29.2910995z"
              svgIconViewBox="0 0 64 64"
            />
          </div>
          <div data-tip="Funness">
            <ReactTooltip type="info" />
            <StarRatings
              rating={
                level.numRatings === 0
                  ? Math.round(level.funness)
                  : Math.round(level.funness) / level.numRatings
              }
              starRatedColor="green"
              numberOfStars={5}
              name="funness-rating"
              starDimension="20px"
              starSpacing="3px"
              svgIconPath="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.507 13.941c-1.512 1.195-3.174 1.931-5.506 1.931-2.334 0-3.996-.736-5.508-1.931l-.493.493c1.127 1.72 3.2 3.566 6.001 3.566 2.8 0 4.872-1.846 5.999-3.566l-.493-.493zm-9.007-5.941c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z"
              svgIconViewBox="0 0 24 24"
            />
          </div>
        </center>
        <Card.Body>
          <Card.Title>{level.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{level.creator}</Card.Subtitle>
          <Card.Text>{level.description}</Card.Text>
          <Link to="/play/">
            <Button
              onClick={() => setActiveLevel(level)}
              className="Repository-button"
              variant="primary"
            >
              Play
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleLevel;
