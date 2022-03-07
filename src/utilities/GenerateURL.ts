
const GenerateURL = (inLength:number) => {

    let urllength
    if(inLength < 3 || inLength === undefined || null)
        urllength = 8
    else 
        urllength = inLength

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let url = ""
    
    for(let index = 0; index < urllength; index++) {
        url += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    return url
}

export default GenerateURL;