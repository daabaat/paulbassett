// 카카오 API 초기화 - 발급받은 JavaScript 키를 입력
Kakao.init("1a5fc3838bb260acc30ec8f99d82185c"); // 카카오 개발자 콘솔에서 발급받은 JavaScript 키를 넣어야 합니다.
console.log(Kakao.isInitialized()); // 초기화 확인 (true면 성공)

// 카카오 로그인 함수
function kakaoLogin() {
  Kakao.Auth.login({
    success: function (authObj) {
      console.log(authObj);
      // 로그인 성공 후 사용자 정보 가져오기
      Kakao.API.request({
        url: "/v2/user/me",
        success: function (res) {
          console.log(res);
          const profile = res.kakao_account.profile;
          alert("카카오톡 로그인 성공\n" + "닉네임: " + profile.nickname);
          // 이후 추가 동작 구현 가능
        },
        fail: function (error) {
          console.log(error);
          alert("사용자 정보를 가져오는데 실패했습니다.");
        },
      });
    },
    fail: function (err) {
      console.log(err);
      alert("로그인에 실패했습니다.");
    },
  });
}
