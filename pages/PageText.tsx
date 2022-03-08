
import { useLayoutEffect, useState } from "react"
import { useParams } from "react-router-dom"

// Pages
import PageNotFound from "./PageNotFound"

// Styles
import { 
    SPageText, 
    STextBox,
    STextArea,
    STextBox2,
    SInfoBar2,
    SInfoBar,
} from "../styles/StyledGlobal"

interface IText {
    url: string,
    filename: string,
    textdata: string,
}

export default function PageText() {

    const [ pagestatus, setPageStatus] = useState(0);
    const [ storetext, setStoretext ] = useState<IText>({
        url: "",
        filename: "",
        textdata: ""
    })

    const routeparam = useParams()

    useLayoutEffect(() => {
        let fetchurl = ("https://localhost:7034/Stext/" + routeparam.texturl)

        fetch(fetchurl)
            .then(response => {
                if(!response.ok) {
                    setPageStatus(2)
                    return
                }
                return response.json()
            })
            .then(data => {
                setStoretext({
                    url: data.url,
                    filename: data.filename,
                    textdata: data.textdata
                })
                setPageStatus(1)
            })
            .catch(error => {
                setPageStatus(2)
            })
        
    }, [])

    const ParseText = () => {
        let returnText
        returnText = storetext.textdata
        return returnText.toString()
    }

    if(pagestatus === 0) {
        return <h1>Loading...</h1>
    }

    if (pagestatus === 2) {
        return <PageNotFound/>
    }

    return(
        <SPageText>
            <STextBox2>
                    <h2>File Title: { storetext.filename } </h2>                    
                <STextArea
                fontsize={"1em"}
                value={  ParseText() }
                onChange={() => {}}
                />
            </STextBox2>
        </SPageText>
    )
}