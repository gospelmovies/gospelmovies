import styled from "styled-components";
import Suggested from "./suggested/Suggested";

const Wrapper = styled.div`
  margin-top: -100px;
  @media (max-width: 918px) {
    margin-top: 0;
  }
`;

function MovieListing() {
    return (
        <Wrapper>
            <Suggested />
            <Suggested />
        </Wrapper>
    )
}

export default MovieListing
