const BASE_URL = "https://starfish-app-xaufy.ondigitalocean.app";

export const postSignup = async () => {
    
}

export const postLogin = async () => {
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "user": {
        "email": "test@test.com",
        "password": "password"
      }
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    };
    
    fetch("https://starfish-app-xaufy.ondigitalocean.app/login", requestOptions)
      .then((response) => {
        setCookie('auth', response.headers.get('authorization'), 1)
    })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
}

export const getActivities = async () => {
    
    const cookie = getCookie('auth');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': cookie
    };
    
      const options = {
        method: 'GET', // or POST, PUT, DELETE, etc.
        headers: headers
      };
    

    const response = await fetch(`${BASE_URL}/tracker`, options);
    const data = await response.json();
    return data;
   
}

    function setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    function eraseCookie(name) {   
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }