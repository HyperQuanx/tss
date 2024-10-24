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
    loginContainer.style.display = "block";
    loginContainer.innerHTML = `
        <div class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>로그인</h2>
                <form id="loginForm" method="post">
                    <input type="radio" name="userType" value="student" id="studentRadio" checked> 학생
                    <input type="radio" name="userType" value="teacher" id="teacherRadio"> 선생님 <br><br>

                    <label for="userId">아이디</label>
                    <input type="text" id="userId" name="userId" required><br>
                    <span id="userIdError" style="color: red; display: none;">아이디는 영문 + 숫자 조합 4자리 ~ 12자리여야 합니다.</span><br>

                    <label for="userPwd">비밀번호</label>
                    <input type="password" id="userPwd" name="userPwd" required><br>
                    <span id="userPwdError" style="color: red; display: none;">비밀번호는 영문 + 숫자 + 특수문자 조합 8자리 ~ 20자리여야 합니다.</span><br>

                    <input type="checkbox" id="uesrIdSave"> 아이디 저장<br><br>

                    <button type="submit">로그인</button>
                </form>
            </div>
        </div>
    `;

    const studentRadio = document.getElementById("studentRadio");
    const teacherRadio = document.getElementById("teacherRadio");
    const loginForm = document.getElementById("loginForm");

    loginForm.action = "/member/common/login.do";

    studentRadio.addEventListener("click", function () {
      loginForm.action = "/member/common/login.do";
    });

    teacherRadio.addEventListener("click", function () {
      loginForm.action = "/member/teacher/login.do";
    });

    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", closePopup);

    window.addEventListener("click", function (e) {
      if (e.target === loginContainer) {
        closePopup();
      }
    });

    loginForm.addEventListener("submit", function (event) {
      var userId = document.getElementById("userId").value;
      var userPwd = document.getElementById("userPwd").value;
      var userIdError = document.getElementById("userIdError");
      var userPwdError = document.getElementById("userPwdError");
  
      var isValid = true;
  
      var userIdPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{4,12}$/;
      if (!userIdPattern.test(userId)) {
        userIdError.style.display = "block";
        isValid = false;
      } else {
        userIdError.style.display = "none";
      }
  
      var userPwdPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
      if (!userPwdPattern.test(userPwd)) {
        userPwdError.style.display = "block";
        isValid = false;
      } else {
        userPwdError.style.display = "none";
      }
  
      if (!isValid) {
        event.preventDefault();
      }
  });
});

// 로그인 팝업 ---
