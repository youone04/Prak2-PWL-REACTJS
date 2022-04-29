import { Card, Button, Col, Row } from "react-bootstrap";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    border: "none",
    textAlign: "center",
  },
  cardBody: {
    borderRadius: "0 0 50% 50%",
    fontWeight: "bold",
  },
  cardImage: {
    width: "10%",
    borderRadius: "10%",
  },
  col: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 30,
    color: "#247881",
  },
  row: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 30,
  },
  btnCv:{
    width: 120, 
    marginRight: 10
  },
  btnGithub: {
    width: 120
  }
});

const Cards = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Card.Body className={classes.cardBody}>
        <Card.Img
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          variant="top"
          className={classes.cardImage}
          src="https://aphki.or.id//post/avatar.png"
        />
        <Card.Title
          style={{ color: "#247881" }}
          data-aos="flip-left"
          data-aos-delay="100"
          data-aos-anchor=".example-selector"
        >
          Yudi Gunawan
        </Card.Title>
        <Col
          className={classes.col}
          lg={6}
          data-aos="flip-left"
          data-aos-delay="100"
          data-aos-anchor=".example-selector"
        >
          Saya Sangat termotivasi untuk terus belajar dan mengasah kemampuan
          dalam dunia pemrograman agar dapat tumbuh secara profesional. Saya
          yakin dengan kemampuan saya dapat menghasilkan ide yang menarik dalam
          membuat sebuah aplikasi
        </Col>

        <Row className={classes.row}>
          <Button
            onClick={() =>
              window.open(
                "https://youone04.github.io/",
                "_blank" // <- This is what makes it open in a new window.
              )
            }
            data-aos="fade-right"
            data-aos-anchor-placement="right-center"
            variant="outline-primary"
            className={classes.btnCv}
          >
            CV
          </Button>{" "}
          <Button
            onClick={() =>
              window.open(
                "https://github.com/youone04",
                "_blank" // <- This is what makes it open in a new window.
              )
            }
            data-aos="fade-left"
            data-aos-anchor-placement="left-center"
            variant="outline-secondary"
            className={classes.btnGithub}
          >
            Github
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default Cards;
