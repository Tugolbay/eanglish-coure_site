import React, { useEffect, useRef } from "react";
import "./Slider.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Office = () => {
  const { t } = useTranslation();
  const galleryContainerRef = useRef(null);
  const galleryControlsContainerRef = useRef(null);
  const galleryItemsRef = useRef([]);

  useEffect(() => {
    const galleryContainer = galleryContainerRef.current;
    const galleryControlsContainer = galleryControlsContainerRef.current;
    const galleryItems = galleryItemsRef.current;

    const galleryControls = ["previous", "next"];

    class Carousel {
      constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
      }

      updateGallery() {
        this.carouselArray.forEach((el) => {
          el.classList.remove("gallery-item-1");
          el.classList.remove("gallery-item-2");
          el.classList.remove("gallery-item-3");
          el.classList.remove("gallery-item-4");
          el.classList.remove("gallery-item-5");
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
          el.classList.add(`gallery-item-${i + 1}`);
        });
      }

      setCurrentState(direction) {
        if (direction.className === "gallery-controls-previous") {
          this.carouselArray.unshift(this.carouselArray.pop());
        } else {
          this.carouselArray.push(this.carouselArray.shift());
        }

        this.updateGallery();
      }

      setControls() {
        this.carouselControls.forEach((control) => {
          if (control === "previous" || control === "next") {
            galleryControlsContainer.appendChild(
              document.createElement("button")
            ).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText =
              control;
          }
        });
      }

      useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach((control) => {
          control.addEventListener("click", (e) => {
            e.preventDefault();
            this.setCurrentState(control);
          });
        });
      }
    }

    const exampleCarousel = new Carousel(
      galleryContainer,
      galleryItems,
      galleryControls
    );

    exampleCarousel.setControls();
    exampleCarousel.useControls();
  }, []);

  return (
    <Container id="id3">
      <motion.h1
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {t("description3")}
      </motion.h1>

      <div className="container">
        <div ref={galleryContainerRef} className="gallery">
          <div className="gallery-container">
            <img
              ref={(el) => (galleryItemsRef.current[0] = el)}
              className="gallery-item gallery-item-1"
              src="https://www.petoskeynews.com/gcdn/media/2021/04/28/Petoskey/34b859457fd3c62875a968e4a4643f45.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"
              alt="img"
              data-index="1"
            />
            <img
              ref={(el) => (galleryItemsRef.current[1] = el)}
              className="gallery-item gallery-item-2"
              src="https://pbs.twimg.com/media/E8GibIDXoAIoBe9.jpg:large"
              alt="img"
              data-index="2"
            />
            <img
              ref={(el) => (galleryItemsRef.current[2] = el)}
              className="gallery-item gallery-item-3"
              src="https://miro.medium.com/max/1400/1*PJloV7eqO-lAfkqV2Sw-ZQ.jpeg"
              alt="img"
              data-index="3"
            />
            <img
              ref={(el) => (galleryItemsRef.current[3] = el)}
              className="gallery-item gallery-item-4"
              src="https://i.pinimg.com/originals/82/3e/bc/823ebc150f541369ca6aff2101eb3edb.jpg"
              alt="img"
              data-index="4"
            />
            <img
              ref={(el) => (galleryItemsRef.current[4] = el)}
              className="gallery-item gallery-item-5"
              src="https://www.westfield.ma.edu/PersonalPages/draker/edcom/final/sp17/section1/westriver/class.jpg"
              alt="img"
              data-index="5"
            />
          </div>
          <div
            ref={galleryControlsContainerRef}
            className="gallery-controls"
          ></div>
        </div>
      </div>
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
