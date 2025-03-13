const BASE_URL = "https://starfish-app-xaufy.ondigitalocean.app";

export const postLogin = async (email, password) => {
    
    const myHeaders = new Headers();
    let returnBody = {};
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "user": {
        "email": email,
        "password": password
      }
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    };
    
    await fetch(`${BASE_URL}/login`, requestOptions)
      .then((response) => {
        setCookie('auth', response.headers.get('authorization'), 1);
        returnBody = ({ok: response.ok, status: response.status, token: response.headers.get('authorization')})
    })
      .catch((e) => {returnBody = ({status: false, error: e})});
      return returnBody
}

export const postSignup = async (email, password) => {
    
  const myHeaders = new Headers();
  let returnBody = {};
  myHeaders.append("Content-Type", "application/json");
  
  const raw = JSON.stringify({
    "user": {
      "email": email,
      "password": password
    }
  });
  
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw
  };
  
  await fetch(`${BASE_URL}/signup`, requestOptions)
    .then((response) => {
      setCookie('auth', response.headers.get('authorization'), 1);
      returnBody = ({ok: response.ok, status: response.status, token: response.headers.get('authorization')})
  })
    .catch((e) => {returnBody = ({status: false, error: e})});
    return returnBody
}

export const getActivities = async () => {
    
    const cookie = getCookie('auth');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': cookie
    };
    
      const options = {
        method: 'GET',
        headers: headers
      };
    
    const response = await fetch(`${BASE_URL}/tracker`, options);
    const data = await response.json();
    data.id.sort((a, b) => (a.start_time < b.start_time) ? 1 : -1)
    return data;
}

export const postActivities = async(startTime) => {
  const cookie = getCookie('auth');
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", cookie);
  
  const raw = JSON.stringify({
    "start_time": startTime
  });
  
  const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
  };
  
  try {
      const response = await fetch("https://starfish-app-xaufy.ondigitalocean.app/tracker", requestOptions);
      const result = await response.text();
  } catch (error) {
      console.error(error);
  };
}

export const patchActivities = async (start_time, end_time, description, id) => {
  const cookie = getCookie('auth');
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", cookie);
  


  const raw = JSON.stringify({
    "start_time": start_time,
    "end_time": end_time,
    "description": description
  });
  
  const requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw
  };
  
  await fetch(`${BASE_URL}/tracker/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
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