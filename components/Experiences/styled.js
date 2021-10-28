import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  margin: 100px;
  flex-direction: row;
  justify-content: space-between;

  @media(max-width: 1150px) {
    & {
      margin: 50px 0 100px;
      flex-direction: column;
    }
  }
`

export const RightSideStyle = styled.div`
  gap: 50px;
  display: flex;
  flex-wrap: wrap;
  max-width: 850px;
  justify-content: flex-end;
  grid-template-columns: 300px, 300px;

  @media(max-width: 1150px) {
    & {
      width: 100vw;
      margin: 120px auto 0;
      justify-content: center;
    }
  }
`

export const LeftSideStyle = styled.div`
  display: flex;
  flex-basis: 30%;
  margin-top: 10%;
  justify-content: center;

  & h1 {
    color: #7562e0;
    font-size: 130px;
  }

  & h2 {
    color: #453E62;
    font-size: 25px;
    text-align: right;
  }

  @media(max-width: 1150px) {
    & {
      width: 100vw;
      display: flex;
      justify-content: center;
    }

    & div {
      margin-left: 26px;
      align-items: flex-end;
    }

    & h1 {
      font-size: 100px;
    }

    & h2 {
      color: #453E62;
      font-size: 25px;
      text-align: right;
    }
  }

  @media(max-width: 750px) {
    & h1 {
      font-size: 74px;
    }

    & h2 {
      font-size: 18px;
    }
  }
`

export const TextContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media(max-width: 1150px) {
    & {
      width: 100vw;
      flex-direction: row;
      justify-content: center;
    }
  }

  @media(max-width: 750px) {
    & {
      display: flex;
      flex-direction: column;
      align-items: center !important;
    }
  }
`

export const CardImgContainer = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  padding: 20px;
  border-radius: 24px;
  align-items: center;
  flex-direction: column;
  background-color: #d4cfee;
  justify-content: space-around;

  @media(max-width: 1450px) {
    & {
      width: 300px;
      height: 300px;
    }

    & img {
      width: 200px !important;
    }
  }

  & img {
      width: 350px;
  }
`
export const CardImgDescription = styled.h1`
  color: #453E62;
  font-size: 24px;
  text-align: center;
`
