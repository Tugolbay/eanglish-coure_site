import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { Modal1 } from "../modal/Modal1";
import { Modal2 } from "../modal/Modal2";
import { Modal3 } from "../modal/Modal3";
import { Modal4 } from "../modal/Modal4";
import { Modal5 } from "../modal/Modal5";
import { Modal6 } from "../modal/Modal6";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Main = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(
    window.innerWidth < 860 ? 2 : 3
  );

  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(
        window.innerWidth < 550 ? 1 : window.innerWidth < 850 ? 2 : 3
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = [
    {
      id: 1,
      title1: "A1",
      title2: "1 месяц",
      title3: t("learning.title"),
    },
    {
      id: 2,
      title1: "A2",
      title2: "1 месяц",
      title3: t("learning.title2"),
    },
    {
      id: 3,
      title1: "B1",
      title2: "1.5 месяца",
      title3: t("learning.title3"),
    },
    {
      id: 4,
      title1: "B2",
      title2: "1.5 месяца",
      title3: t("learning.title4"),
    },

    {
      id: 5,
      title1: "C1",
      title2: "2 месяца",
      title3: t("learning.title5"),
    },
    {
      id: 6,
      title1: "C2",
      title2: "2 месяца",
      title3: t("learning.title6"),
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    autoplay: false,
  };

  return (
    <Container id="id6">
      <motion.h1
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {t("description1")}
      </motion.h1>

      <div className="slide-container">
        <Slide {...settings}>
          {data.map((el) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Cart>
                <Row>
                  <h2>{el.title1}</h2>
                  <div>{el.title2}</div>
                </Row>

                <Row2>
                  <p>{el.title3}</p>
                </Row2>

                <div>
                  <button
                    onClick={() => {
                      setSelectedId(el.id);
                      setOpen(true);
                    }}
                  >
                    {t("learning.button")}
                  </button>
                </div>
              </Cart>
            </div>
          ))}
        </Slide>
      </div>

      {open && selectedId === 1 && <Modal1 setOpen={setOpen} />}
      {open && selectedId === 2 && <Modal2 setOpen={setOpen} />}
      {open && selectedId === 4 && <Modal3 setOpen={setOpen} />}
      {open && selectedId === 3 && <Modal4 setOpen={setOpen} />}
      {open && selectedId === 5 && <Modal5 setOpen={setOpen} />}
      {open && selectedId === 6 && <Modal6 setOpen={setOpen} />}
    </Container>
  );
};

const Container = styled("div")`
  margin-top: 10rem;
  padding: 0 3rem 0 3rem;

  h1 {
    font-size: 60px;
    padding-bottom: 1rem;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 45px;
    }
  }

  @media (max-width: 542px) {
    h1 {
      font-size: 40px;
    }
  }

  @media (max-width: 430px) {
    h1 {
      font-size: 35px;
    }
  }
`;

const Cart = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20vw;
  height: 50vh;
  border-radius: 20px;
  padding: 1.5rem;
  border: 2px solid #f16600;

  button {
    border-radius: 10px;
    border: none;
    cursor: pointer;
    color: white;
    border: solid #f16600;
    background-color: #f16600;
    padding: 0.5rem 2rem 0.5rem 2rem;

    &:hover {
      color: #f16600;
      background-color: #fff;
    }
  }

  @media (max-width: 860px) {
    width: 23vw;
    height: 50vh;
  }

  @media (max-width: 730px) {
    width: 33vw;
  }

  @media (max-width: 630px) {
    width: 25vw;
  }

  @media (max-width: 606px) {
    width: 30vw;
  }

  @media (max-width: 561px) {
    height: 40vh;
  }

  @media (max-width: 420px) {
    width: 40vw;
    height: 40vh;
  }
`;

const Row = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 40px;
    margin: 0;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 3rem;
    border-radius: 30px;
    color: white;
    background-color: #f16600;
  }

  @media (max-width: 860px) {
    h2 {
      font-size: 25px;
    }

    div {
      width: 4rem;
      height: 2rem;
      font-size: 10px;
    }
  }

  @media (max-width: 580px) {
    h2 {
      font-size: 30px;
    }
  }
`;

const Row2 = styled("div")`
  display: flex;
  justify-content: center;

  p {
    font-size: 20px;
    height: 10rem;
  }

  @media (max-width: 1300px) {
    p {
      font-size: 15px;
    }
  }

  @media (max-width: 561px) {
    p {
      font-size: 12px;
    }
  }

  @media (max-width: 550px) {
    p {
      font-size: 12px;
    }
  }

  @media (max-width: 420px) {
    p {
      font-size: 13px;
    }
  }

  @media (max-width: 359px) {
    p {
      font-size: 11px;
    }
  }
`;
