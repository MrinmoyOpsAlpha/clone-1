import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOriginal } from "../features/movie/movieSlice";

const Originals = (props) =>{

    const movies= useSelector(selectOriginal);
    return (
        <Container>
        <h2>Originals</h2>
            <Content>
            {
                   movies && 
                   movies.map((movie,key) => (
                       <Wrap key={key}>
                            {movie.id}
                            <Link to={'/detail/' + movie.id}>
                                <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                       </Wrap>
                   ))
               }
            </Content>
        </Container>
    );
};

const Container = styled.div `
    padding:0 0 26px;
`;

const Content = styled.div `
    display:grid;
    grid-gap:25px;
    gap:25px;
    grid-template-columns: repeat(4,minmax(0,1fr));
    
    @media(max-width:768px){
        grid-template-columns:repeat(2,minmax(0,1fr));
    }
`;

const Wrap = styled.div `
    padding-top:56.25%;
    border-radius:10px;
    box-shadow:rgb(0 0 0/ 69%) 0px 26px 30px -10px,rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    cursor:pointer;
    overflow:hidden;
    position:relative;
    border:2px solid #FDEFEF;
    &:hover{
        border:2px solid #96BAFF;
    }

    img{
        inset:0px;
        display:block;
        width:100%;
        height:100%;
        object-fit:cover;
        position:absolute;
        opacity:1;
        transition:opacity 500ms ease-in-out 0s;
        transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        z-index:1;
        top:0px;

        &:hover{
            box-shadow:rgb(0 0 0/ 69%) 0px 26px 30px -10px,rgb(0 0 0/ 73%) 0px 16px 10px -10px;
            transform:scale(1.20);
        }
    }
`;

export default Originals;