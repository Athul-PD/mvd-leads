export const getCaptcha = () => {
    const CAPTCHA_CODES = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        let randomTexts = "";

    for(let i =0; i<7; i++){
        randomTexts += CAPTCHA_CODES[Math.floor(Math.random() * CAPTCHA_CODES.length)]
    }

    return randomTexts;
}

export const setTimer = (time,setT,onTimeOver) => {
    const intervalid = setInterval(() => {
        setT(prev => {
            if(prev <= 0){
                clearInterval(intervalid)
                if(onTimeOver) onTimeOver();
                return 0;
            }
            return prev - 1
        })
    }, 1000);

    return () => clearInterval(intervalid);
}
