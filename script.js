const key = "AIzaSyDC7ObOJhCGZojTvWkSvQxPr3fDt_7heUU";
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;

let btn = document.querySelector("#btn");
let prompt = document.querySelector("#prompt");
let text_box = document.querySelector("#answer")
let userMessage;


const generateAPIResponse = async () => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [{
                    role: "user",
                    parts: [{ text: userMessage }]
                }]
            })
        });
        

        const data = await response.json();
        
        let answer = data.candidates[0].content.parts[0].text;
        return answer;

    } catch (error) {
        console.error("Error:", error);
    }
};

btn.onclick = async(event) => {
    event.preventDefault();
    userMessage = prompt.value;
    let answer = await generateAPIResponse();
    text_box.innerText = answer;
    
}






