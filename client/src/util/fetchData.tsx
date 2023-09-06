import axios from "axios";

export async function fetchData({ email, password }) {
  try {
    const data = {
      email: email,
      password: password,
    };
    const res = await axios.post(
      "https://7fdc-218-155-160-190.ngrok-free.app/members/login",
      data,
    );
    console.log(res);
    const userData = {
      nickName: res.data.nickName,
      profileImage: res.data.profileImage,
      accessToken: res.headers.authorization,
      refreshToken: res.headers.refresh,
    };
    return userData;
  } catch (error) {
    console.log("로그인 정보가 잘못되었습니다.");
  }
}
