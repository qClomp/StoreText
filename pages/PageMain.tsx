
import { useState } from "react"

// /utilities
import GenerateURL from "../src/utilities/GenerateURL.js"

// Styled Components
import { 
    SPageMain,
    CRUDBox,
    STextBox,
    STextArea,
    CRUDArea
 } from "../styles/StyledGlobal.js"

interface IText {
    url: string,
    filename: string,
    textdata: string
}

export default function PageMain() {

    const [ storetext, setStoretext ] = useState<IText>({
        url: "",
        filename: "",
        textdata: ""
    })
    const [ generatedurl, setGeneratedurl ] = useState("")

    const checkValid = () => {
        if(storetext.filename === "")
            return false
        if(storetext.textdata === "")
            return false

        return true
    }

    const handleInput = (inEvent:any) => {
        setStoretext({
            ...storetext,
            [inEvent.target.name]: inEvent.target.value
        })
    }

    const StoreText = async () => {
        if(checkValid() === false)
            return

        let storedtext = {
            url: GenerateURL(5),
            filename: storetext.filename,
            textdata: storetext.textdata
        }

        console.log(JSON.stringify(storedtext))

        await fetch('https://localhost:7034/SText',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(storedtext)
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log("Created!: ")
            console.log(data.url)
            setGeneratedurl(data.url.toString())
        })
        .catch(error => console.log(error))
    }

    return(
        <SPageMain>
            <CRUDArea>

                <CRUDBox>
                    <label>File Name</label>
                    <input
                    placeholder="Insert a filename"
                    value={storetext.filename}
                    name="filename"
                    onChange={(e) => handleInput(e)}
                    />
                    <button
                    onClick={() => { StoreText() }}
                    >Save & Create URL</button>
                </CRUDBox>

                <CRUDBox>
                    <h2>Import Text</h2>
                    { generatedurl !== "" && <a>{ `http://localhost:3000/${generatedurl}` }</a> }
                    { generatedurl }
                </CRUDBox>
            </CRUDArea>

            <STextBox>
                <STextArea
                placeholder="Text In Here"
                value={storetext.textdata}
                name="textdata"
                onChange={ (e) => handleInput(e)}
                />
            </STextBox>

        </SPageMain>
    )
}