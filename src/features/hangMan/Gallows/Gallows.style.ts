import styled from 'styled-components'
import { mixins } from '../../../styles'

type Props = {
    $errors: number
}

export const GallowsStyled = styled.div<Props>`
    height: 300px;
    position: relative;
    width: 250px;

    .mainLine {
        ${mixins.drawParts}
        left: 0;
        height: 300px;
        width: 10px;
    }

    .topHorizontal {
        ${mixins.drawParts}
        height: 140px;
        left: 70px;
        top: -65px;
        transform: rotate(90deg);
        width: 10px;
    }

    .topVertical {
        ${mixins.drawParts}
        height: 40px;
        left: 137px;
        width: 10px;
    }

    .bottomHorizontal {
        ${mixins.drawParts}
        height: 60px;
        left: 0px;
        width: 10px;
        transform: rotate(90deg);
        top: 270px;
    }

    .supportLine {
        ${mixins.drawParts}
        height: 61px;
        transform: rotate(45deg);
        width: 10px;
        left: 22px;
    }

    .hangMan {
        left: 112px;
        position: relative;
        top: 40px;

        .head {
            ${mixins.drawParts}
            border-radius: 50%;
            display: ${(props) => (props.$errors >= 1 ? 'block' : 'none')};
            height: 60px;
            width: 60px;
        }

        .body {
            ${mixins.drawParts}
            display: ${(props) => (props.$errors >= 2 ? 'block' : 'none')};
            height: 100px;
            left: 27px;
            top: 50px;
            width: 5px;
        }

        .leftArm {
            ${mixins.drawParts}
            display: ${(props) => (props.$errors >= 3 ? 'block' : 'none')};
            height: 60px;
            left: 13px;
            transform: rotate(30deg);
            top: 80px;
            width: 5px;
        }

        .rightArm {
            ${mixins.drawParts}
            display: ${(props) => (props.$errors >= 4 ? 'block' : 'none')};
            height: 60px;
            left: 41px;
            transform: rotate(330deg);
            top: 80px;
            width: 5px;
        }

        .leftLeg {
            ${mixins.drawParts}
            display: ${(props) => (props.$errors >= 5 ? 'block' : 'none')};
            height: 60px;
            top: 140px;
            width: 5px;
            left: 13px;
            transform: rotate(30deg);
        }

        .rightLeg {
            ${mixins.drawParts}
            display: ${(props) => (props.$errors >= 6 ? 'block' : 'none')};
            height: 60px;
            top: 140px;
            width: 5px;
            left: 41px;
            transform: rotate(330deg);
        }
    }
`
