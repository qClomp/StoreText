
import { useEffect, useState } from "react"

// /utilities
import GenerateURL from "../src/utilities/GenerateURL.js"

// Styled Components
import { 
    SPageMain,
    VerticalBox,
    STextBox,
    STextArea,
    CRUDArea,
    SInfoBar,
    SStatus,
    SFileInput,
    SSiteName,
    SButton,
    STextBar
 } from "../styles/StyledGlobal.js"

interface IText {
    url: string,
    filename: string,
    textdata: string
}

export default function PageMain() {

    const [ filename, setFilename ] = useState("")
    const [ storetext, setStoretext ] = useState("")
    const [ status, setStatus] = useState(Boolean)
    const [ generatedurl, setGeneratedurl ] = useState("")

    const checkValid = () => {
        if(filename === "")
            return false
        if(storetext === "")
            return false

        return true
    }

    const Inputfilename = (inEvent:any) => { setFilename(inEvent.target.value) }
    const Inputstoretext = (inEvent:any) => { setStoretext(inEvent.target.value) }

    const StoreText = async () => {
        if(checkValid() === false)
            return

        let storedtext = {
            url: GenerateURL(5),
            filename: filename,
            textdata: storetext
        }

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
            setGeneratedurl(data.url.toString())
            console.log(data)
        })
        .catch(error => {})
    }

    useEffect(() => {
        if(filename !== "" && storetext !== "") { setStatus(true) } 
        else { setStatus(false) }
    },[filename, storetext])

    return(
        <SPageMain>
            <CRUDArea>
                <SSiteName onClick={() => {}}>Store Text</SSiteName>

                <VerticalBox>
                    <label>Status</label>
                    <SStatus statuscolor={status}>
                        { filename === "" && <span>Insert a File Name!</span> }
                        { storetext === "" && <span>Insert a Text to Store!</span> } 
                    </SStatus>

                    <SButton
                    onClick={() => { StoreText() }}>
                        Save & Create URL
                    </SButton>
                </VerticalBox>

                { generatedurl !== "" && <VerticalBox>
                    <h2 style={{color:"green"}}>Created URL!</h2>
                    { generatedurl !== "" && 
                    <a>{ `http://localhost:3000/${generatedurl}` }
                    </a> }
                </VerticalBox> }
            </CRUDArea>

            <STextBox>
                
                <SInfoBar>
                    <label>File Title</label>
                    <SFileInput
                        placeholder="Insert a File Title"
                        value={filename}
                        name="filename"
                        onChange={(e) => Inputfilename(e)}
                        />
                </SInfoBar>
                
                <STextBar>
                    <label>Text Data</label>
                    <STextArea
                    fontsize={""}
                    placeholder="Text In Here"
                    value={storetext}
                    name="textdata"
                    onChange={ (e) => Inputstoretext(e)}
                    />
                </STextBar>
            </STextBox>

        </SPageMain>
    )
}