import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderDIsh(dish) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderComments(comments) {
    if (comments == null) {
      return <div></div>;
    }
    const cmt = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author}, &nbsp;
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(comment.date))}
          </p>
        </li>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <h4> Comments </h4>
        <ul className="list-unstyled">{cmt}</ul>
      </div>
    );
  }

  render() {
    const dish = this.props.cardid;
    if (dish == null) {
      return <div></div>;
    }
    const dishData = this.renderDIsh(dish);
    const dishComment = this.renderComments(dish.comments);
    return (
      <div className="row">
        {dishData}
        {dishComment}
      </div>
    );
  }
}

export default DishDetail;
