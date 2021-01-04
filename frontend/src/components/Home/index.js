import sign from '../../images/sign.jpg'
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {useSelector} from 'react-redux';


export const StyledHome = styled.div`
  padding: 1.3rem;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 7rem;


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

const Home = () => {

    const loggedInUser = useSelector(state => {
        return state.session.user;
    });
    
    return ( 
      <div>
        <StyledHome >
        <div >
            <div>
                <div>
                    <h1></h1>
                </div>
            </div>
        </div>
        </StyledHome>
        </div>
    );
};

export default Home;