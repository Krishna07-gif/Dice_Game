import styled from "styled-components";
import { Button } from "./styled/button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices 1.png" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    display: flex;
    flex-direction: column; /* Stack items vertically */
    align-items: flex-end; /* Align items to the right */
    flex: 1; /* Allow .content to expand and fill available space */
    padding-right: 20px; /* Add some spacing to the right */

    h1 {
      font-size: 96px;
      white-space: nowrap;
      line-height: 5px;
    }

    .button-wrapper {
      margin-top: 20px; /* Add some spacing between the title and button */
    }
  }
`;


