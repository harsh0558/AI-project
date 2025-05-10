const key = "AIzaSyDC7ObOJhCGZojTvWkSvQxPr3fDt_7heUU";
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;

let userMessage;
let btn = document.querySelector("#send_icon");
let prompt = document.querySelector("#prompt");
let trigger = 0;

const generateAPIResponse = async () => {
    try {

        let animation= document.querySelector("#spinner-outer-container");
        document.querySelector("#chat").appendChild(animation);
        animation.style.visibility = "visible";

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
    } finally {
        let spinner = document.querySelector("#spinner-outer-container");
        spinner.style.visibility = "hidden";
    }
};

const sendMessage = async() => {

    userMessage = prompt.value;

    if (trigger === 0) {
        let element = document.querySelector("#logo");
        element.remove(); 
        trigger = 1; 
    }

    let messageContainerUser = document.createElement("div");
    messageContainerUser.classList.add("user");
    const messageTextUser = document.createTextNode(userMessage);
    messageContainerUser.appendChild(messageTextUser);
    document.querySelector("#chat").appendChild(messageContainerUser);

    prompt.value = '';

    let answer = await generateAPIResponse();

    let messageContainerBot = document.createElement("div");
    messageContainerBot.classList.add("bot");

    let logoImg = document.createElement("img");
    logoImg.src = "logo.webp"; 
    logoImg.classList.add("bot-logo");

    const messageTextBot = document.createTextNode(answer);
    
    messageContainerBot.appendChild(logoImg);
    messageContainerBot.appendChild(messageTextBot);
    
    document.querySelector("#chat").appendChild(messageContainerBot);
}

btn.onclick = (event) => {
    event.preventDefault();
    sendMessage();
}

prompt.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});
