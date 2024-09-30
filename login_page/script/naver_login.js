document.addEventListener("DOMContentLoaded", function () {
  var naverLogin = new naver.LoginWithNaverId({
    clientId: "4whURpMPLbTyF7yr_f6T", // 네이버 개발자 콘솔에서 발급받은 Client ID
    callbackUrl: "http://localhost:3000", // 리다이렉트 URL
    isPopup: true, // 팝업 방식으로 로그인
    // loginButton 옵션은 사용하지 않음
  });

  naverLogin.init();

  // 커스텀 버튼 클릭 시 네이버 로그인 동작
  document
    .getElementById("customNaverLoginBtn")
    .addEventListener("click", function () {
      naverLogin.authorize(); // 로그인 창 띄우기
    });
});
