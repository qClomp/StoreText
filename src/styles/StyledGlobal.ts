
import styled from "styled-components"

const dark1 = "rgb(20, 20, 20)"
const white= "#EEEEEE"

export const SPageMain = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 2vh;
    color: rgb(255, 244, 220);
    `

export const CRUDArea = styled.div`
    display: flex;
    flex-direction: column;
    `

export const VerticalBox = styled.div`
    background-color: ${dark1};
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5vh;
    padding: 5px;
    border-radius: 0.2em;
    `

export const SSiteName = styled.span`
    font-size: 2em;
    text-align: center;
    margin: 0.5em;
    padding: 0.2em;
    background-color: ${dark1};
    border-radius: 0.2em;
    cursor: pointer;
    user-select: none;
`

export const SInfoBar = styled.div`
    font-size: 1.5em;
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 10%;
    `

export const STextBar = styled.div`
    height: 90%;
    font-size: 1.5em;
    `
    
export const STextBox = styled.div`
    background-color: ${dark1};
    width: 50%;
    height: 95vh;
    margin-left: 2vw;
    outline: 1px solid gray;
    padding-right: 2em;
    padding-left: 1em;
    `

interface TextAreaProps {
    fontsize: string
}

export const STextArea = styled.textarea<TextAreaProps>`
    background-color: ${white};
    width: 100%;
    height: 90%;
    border: 2px solid white;
    border-radius: 2px;
    cursor: text;
    border: 1px solid gray;
    /* font-size: 0.8em; */
    font-size: ${ props => props.fontsize || "0.8em"};
    padding: 5px;
    :focus {
        outline: 1px solid gray;
    }
    `

export const SFileInput = styled.input`
    background-color: ${white} ;
    border: 1px solid gray;
    width: 60%;
    height: 70%;
    padding-left: 5px;
    font-size: 1em;
    :focus {
        outline: 1px solid gray;
    }
    `

interface StatusProps {
    statuscolor: Boolean
}

export const SStatus = styled.div<StatusProps>`
    background-color: ${ props => props.statuscolor ? "green" : "red"};
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vh;
    padding: 1em;
    border-radius: 1em;
    `

export const SButton = styled.button`
    /* background-color: black */
    `

// **************
// ***PageText***
// **************

export const SPageText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #333333;
    `

export const STextBox2 = styled.div`
    background-color: ${dark1};
    width: 50%;
    min-width: 500px;
    height: 95vh;
    outline: 1px solid gray;
    margin-top: 1vh;
    padding-left: 2vw;
    padding-right: 2vw;
    padding-bottom: 2vh;
    `

export const SInfoBar2 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5em;
    `

export const SFileTitle = styled.span`
    color: rgb(255, 244, 220);
    font-size: 2.5em;
    `