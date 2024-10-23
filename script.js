let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector(".slides");
  const slideWidth = document.querySelector(".slider").offsetWidth;
  slides.style.transform = `translateX(${-slideWidth * index}px)`;
  currentIndex = index;
}

// --- 수능 날짜 계산 영역
const dDay = new Date("2024-11-14");

const today = new Date();

const timeDifference = dDay.getTime() - today.getTime();

const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

document.getElementById("dDayCount").textContent = `D-${daysRemaining}`;
// 수능 날짜 계산 영역 ---

// --- 로그인 팝업

document.addEventListener("DOMContentLoaded", function () {
  var loginPopupButton = document.querySelector(".loginPopupButton");
  var loginContainer = document.querySelector(".loginContainer");

  // 팝업을 닫는 함수
  function closePopup() {
    loginContainer.innerHTML = ""; // 로그인 팝업을 비움
    loginContainer.style.display = "none"; // 팝업 숨김
  }

  // 로그인 팝업을 띄우는 함수
  loginPopupButton.addEventListener("click", function () {
    loginContainer.style.display = "block"; // 팝업 보여줌
    loginContainer.innerHTML = `
          <div class="modal">
              <div class="modal-content">
                  <span class="close">&times;</span>
                  <h2>로그인</h2>
                  <form id="loginForm" method="post">
                      <!-- 라디오 버튼 -->
                      <input type="radio" name="userType" value="student" id="studentRadio" checked> 학생
                      <input type="radio" name="userType" value="parent" id="parentRadio"> 학부모 <br><br>

                      <!-- 아이디와 비밀번호 입력 -->
                      <label for="id">아이디</label>
                      <input type="text" id="id" name="id" required><br><br>

                      <label for="password">비밀번호</label>
                      <input type="password" id="password" name="password" required><br><br>

                      <!-- 아이디 저장 -->
                      <input type="checkbox" id="remember"> 아이디 저장<br><br>

                      <!-- 로그인 버튼 -->
                      <button type="submit">로그인</button>
                  </form>
              </div>
          </div>
      `;

    // 라디오 버튼 선택에 따른 폼의 action 변경
    var studentRadio = document.getElementById("studentRadio");
    var parentRadio = document.getElementById("parentRadio");
    var loginForm = document.getElementById("loginForm");

    // 기본 action 설정
    loginForm.action = "/member/common/login.do"; // 기본적으로 학생 로그인

    // 라디오 버튼 클릭 이벤트로 action 변경
    studentRadio.addEventListener("click", function () {
      loginForm.action = "/member/common/login.do";
    });

    parentRadio.addEventListener("click", function () {
      loginForm.action = "/parentLogin";
    });

    // 닫기 버튼에 이벤트 리스너 추가
    var closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", closePopup);

    // 모달 바깥을 클릭하면 팝업 닫기
    window.addEventListener("click", function (event) {
      if (event.target === loginContainer) {
        closePopup();
      }
    });
  });
});

// 로그인 팝업 ---
