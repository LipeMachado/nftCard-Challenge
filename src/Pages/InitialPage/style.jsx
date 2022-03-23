import styled from 'styled-components';

export const MainSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const BoxContainerSection = styled.div`
    width: 280px;
    height: 500px;
    background-color: hsl(216, 50%, 16%);
    border-radius: 15px;
    text-align: center;
`;

export const NftImageContainerDiv = styled.div`
    position: relative;
`;

export const NftImage = styled.img`
    width: 250px;
    border-radius: 8px;
    margin-top: 20px;
`;

export const NftViewSpan = styled.span`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 20px;
    bottom: 5px;
    left: 15px;
    right: 15px;
    border-radius: 8px;
    opacity: 0;
    background-color: hsla(178, 100%, 50%, 0.5);
    transition: 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`;

export const TitleAndParagraphDiv = styled.div`
    color: white;
    margin-top: 15px;
    margin-left: 17px;
    text-align: left;
    max-width: 250px;
`;

export const TitleBoxH1 = styled.h1`
    font-size: 20px;
    font-weight: 600;
`;

export const ParagraphBoxH2 = styled.p`
    font-size: 14.5px;
    max-width: 250px;
    margin-top: 15px;
    font-weight: 300;
    color: hsl(215, 51%, 70%);
`;

export const EthAndDaysDiv = styled.div`
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
`;

export const EthPriceDiv = styled.div`
    display: flex;
`;

export const EthPriceH2 = styled.h2`
    font-size: 14px;
    margin-left: 7px;
    color: hsl(178, 100%, 50%);
    font-weight: 300;
`;

export const DaysLeftDiv = styled.div`
    display: flex;
`;

export const DaysLeftText = styled.h3`
    font-size: 14px;
    color: hsl(215, 51%, 70%);
    font-weight: 300;
    padding-left: 5px;
`;

export const SeparatorDiv = styled.div`
    height: 2px;
    background-color: hsl(215, 32%, 27%);
    margin-top: 25px;
    border-radius: 5px;
`;

export const CreationDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
`;

export const ImageCreatorImg = styled.img`
    width: 30px;
    border: 1px solid white;
    border-radius: 50px;
`;

export const CreatorTextH4 = styled.h4`
    font-size: 14px;
    font-weight: 300;
    color: hsl(215, 51%, 70%);
    margin-left: 10px;
`;

export const CreatorTextSpan = styled.span`
    margin-left: 2px;
`;

export const CreatorTextLinkA = styled.a`
    color: white;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
        color: hsl(215, 51%, 70%);
    }

`;