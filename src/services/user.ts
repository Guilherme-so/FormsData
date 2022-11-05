export const userId = async (set: any) => {
  const baseUrl: string = "https://authorization.api.apigethash.online/";

  const user = JSON.parse(localStorage.getItem("user") as string);

  if (user?.access_token) {
    return await fetch(`${baseUrl}users/getid`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + user.access_token,
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        if (res.status === 200) {
          console.log(res)
          return await res.json();
        } else if (res.status === 401) {
        }
      })
      .then(async(dataResp) =>{
        set(dataResp?.user?.id)
      })
      .catch((res) => console.log(res));
  }
};

export const getIdLogin = async () => {
  const baseUrl: string = "https://authorization.api.apigethash.online/";

  const user = JSON.parse(localStorage.getItem("user") as string);

  if (user?.access_token) {
    return await fetch(`${baseUrl}users/getid`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + user.access_token,
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        if (res.status === 200) {
          return await res.json();
        } else if (res.status === 401) {
        }
      })
      .then(async(dataResp) =>{
        return dataResp?.user?.id
      })
      .catch((res) => console.log(res));
  }
};
