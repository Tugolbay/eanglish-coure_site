import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Teachers = () => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);

  const data = [
    {
      title1: "Анджелина Джоли",
      title2: t("teachers.experience5"),
      img: "https://showbiz.24tv.ua/resources/photos/news/202106/1649450.jpg?v=1661262304000",
    },
    {
      title1: "Джони Депп",
      title2: t("teachers.experience2"),
      img: "https://s0.rbk.ru/v6_top_pics/media/img/2/09/346843918588092.webp",
    },
    {
      title1: "Джеки Чан",
      title2: t("teachers.experience3"),
      img: "https://tengrinews.kz/userdata/news/2023/news_494550/resize/photo_425537.jpeg",
    },
    {
      title1: "Дуэйн Джонсон",
      title2: t("teachers.experience4"),
      img: "https://cdnn21.img.ria.ru/images/150086/02/1500860210_0:270:2392:1616_1920x0_80_0_0_a9e08aceab7a1e22fad48349e298aca5.jpg",
    },
    {
      title1: "Брэд Питт",
      title2: t("teachers.experience"),
      img: "https://s0.rbk.ru/v6_top_pics/media/img/9/10/756546763213109.jpg",
    },
  ];

  const data2 = [
    {
      title1: "Адель",
      title2: t("teachers.experience5"),
      img: "https://ichef.bbci.co.uk/images/ic/1024x576/p09ystjq.jpg",
    },
    {
      title1: "Абель Макконен",
      title2: t("teachers.experience5"),
      img: "https://www.billboard.com/wp-content/uploads/2023/03/the-weeknd-avatar-premiere-2022-billboard-1548.jpg",
    },
    {
      title1: "Риана",
      title2: t("teachers.experience3"),
      img: "https://rus.team/images/article/59273/2018-06-18-622_62921-1_390642.webp",
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container id="id1">
      <h1 data-aos="fade-right">{t("description2")}</h1>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Местные преподователи" {...a11yProps(0)} />
            <Tab label="Носители языка" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <ContainerChilde>
            {data.map((el) => (
              <Cart>
                <Row3>
                  <img src={el.img} alt="img" />
                </Row3>
                <h2>{el.title1}</h2>
                <p>{el.title2}</p>
              </Cart>
            ))}
          </ContainerChilde>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ContainerChilde>
            {data2.map((el) => (
              <Cart>
                <Row3>
                  <img src={el.img} alt="img" />
                </Row3>
                <h2>{el.title1}</h2>
                <p>{el.title2}</p>
              </Cart>
            ))}
          </ContainerChilde>
        </CustomTabPanel>
      </Box>
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

  .MuiTab-root {
    font-size: 25px;
    font-weight: 800;
    text-transform: none;

    @media (max-width: 685px) {
      font-size: 20px;
    }

    @media (max-width: 585px) {
      width: 35vw;
    }

    @media (max-width: 412px) {
      font-size: 15px;
    }
  }

  .MuiTab-root.Mui-selected {
    color: #f16600;
    font-size: 25px;
    font-weight: 800;
    text-transform: none;

    @media (max-width: 685px) {
      font-size: 20px;
    }

    @media (max-width: 585px) {
      width: 45vw;
    }

    @media (max-width: 412px) {
      font-size: 15px;
    }
  }

  .MuiTabs-indicator {
    background-color: #f16600;
  }
`;

const Cart = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22vw;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  button {
    border-radius: 10px;
    border: none;
    cursor: pointer;
    color: white;
    background-color: #f16600;
    padding: 0.5rem 2rem 0.5rem 2rem;
  }

  @media (max-width: 1130px) {
    width: 35vw;
  }

  @media (max-width: 960px) {
    width: 30vw;
  }

  @media (max-width: 719px) {
    width: 55vw;
  }
`;

const Row3 = styled("div")`
  img {
    width: 100%;
    border-radius: 15px;
  }
`;

const ContainerChilde = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;

  @media (max-width: 719px) {
    justify-content: center;
  }
`;
