import React from 'react';
import {
    BoxContainerSection,
    MainSection,
    NftImageContainerDiv,
    NftImage,
    NftViewSpan,
    TitleAndParagraphDiv,
    TitleBoxH1,
    ParagraphBoxH2,
    EthAndDaysDiv,
    EthPriceDiv,
    EthPriceH2,
    DaysLeftDiv,
    DaysLeftText,
    SeparatorDiv,
    CreationDiv,
    ImageCreatorImg,
    CreatorTextH4,
    CreatorTextSpan,
    CreatorTextLinkA
} from './style.jsx';

import imageNft from '../../Images/image-equilibrium.jpg';
import imageAvatar from '../../Images/image-avatar.jpeg';

export function NftCard() {
    return (
        <>
            <MainSection>
                <BoxContainerSection>
                    <NftImageContainerDiv>
                        <NftImage src={imageNft} alt="imageNFT" />
                        <NftViewSpan>
                            <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h48v48H0z"/><path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z" fill="#FFF" fill-rule="nonzero"/></g></svg>
                        </NftViewSpan>
                    </NftImageContainerDiv>
                    
                    <TitleAndParagraphDiv>
                        
                        <TitleBoxH1>Equilibrium #3429</TitleBoxH1>
                        <ParagraphBoxH2>Our Equilibrium collection promotes balance and calm.</ParagraphBoxH2>
                        
                        <EthAndDaysDiv>
                            <EthPriceDiv>
                                <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8" /></svg>
                                <EthPriceH2>0.041 ETH</EthPriceH2>
                            </EthPriceDiv>
                            <DaysLeftDiv>
                                <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9" /></svg>
                                <DaysLeftText>
                                    3 days left
                                </DaysLeftText>
                            </DaysLeftDiv>
                        </EthAndDaysDiv>

                        <SeparatorDiv></SeparatorDiv>

                        <CreationDiv>
                            <ImageCreatorImg src={imageAvatar} alt="imageAvatar" />
                            <CreatorTextH4>Creation of <CreatorTextSpan><CreatorTextLinkA href="https://github.com/LipeMachado" target="_blank"> Felipe Machado</CreatorTextLinkA></CreatorTextSpan></CreatorTextH4>
                        </CreationDiv>
                    
                    </TitleAndParagraphDiv>
                </BoxContainerSection>
            </MainSection>
        </>
    );
}