import styled from "styled-components";

export const Header = styled.div`
	height: 80px;
	padding: 0.9rem;
	background-color: #a1acc1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 20px;
	font-family: "Inter", sans-serif;
	font-weight: 300;
`;

export const NavBar = styled.div`
	width: max-content;
	flex-basis: 35%;
	display: flex;
	justify-content: space-around;
	font-size: medium;
	& > div {
		cursor: pointer;
		font-weight: 500;
    padding:1rem 1rem;
	}
  @media(max-width:425px){
    flex-basis:50%;
  }
`;
