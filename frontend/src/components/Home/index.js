import { Link } from "react-router-dom";
// import sign from "../../images/unnamed.png";
import styled from "styled-components";
import { useSelector } from "react-redux";

export const StyledHome = styled.div`
  padding: 1.3rem;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 7rem;

  .heading {
    font-family: "Indie Flower";
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20%;
  }

  h3 {
    margin-bottom: 1rem;
    text-align: center;
  }

  @media screen and (max-width: 1093px) {
    width: 95%;
  }

  @media screen and (max-width: 1090px) {
    width: 99%;
  }

  @media screen and (max-width: 870px) {
    width: 90%;
  }

  @media screen and (max-width: 670px) {
    width: 99%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }

  @media screen and (max-width: 530px) {
    width: 100%;
  }
`;

// const sectionStyle = {
//   backgroundImage: `url(${sign})`,
//   backgroundPosition: "center",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
// };

const Home = () => {
  const loggedInUser = useSelector((state) => {
    return state.session.user;
  });

  return (
    // <div style={sectionStyle}>
      <StyledHome>
        <div>
          <div>
            <div className="container">
              <h1 className="heading">Sorry, we're closed</h1>
            </div>
          </div>
        </div>
      </StyledHome>
    // </div>
  );
};

export default Home;
