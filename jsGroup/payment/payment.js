// 숫자를 세 자리마다 콤마로 구분하는 함수
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 총 결제금액을 계산하는 함수
function calculateTotalPrice() {
  let total = 0;
  const checkboxes = document.querySelectorAll(".lectureCheckbox");

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const price = parseInt(checkbox.getAttribute("data-price"), 10);
      total += price;
    }
  });

  // 총 금액을 세 자리마다 콤마로 구분해서 표시
  document.getElementById("totalPayValue").innerText = formatNumber(total);
}

// 'selectAll' 체크박스를 눌렀을 때 모든 'lectureCheckbox'의 상태를 변경하는 함수
document.getElementById("selectAll").addEventListener("change", function () {
  const isChecked = this.checked; // 'selectAll' 체크박스의 상태 (체크 or 체크 해제)
  const checkboxes = document.querySelectorAll(".lectureCheckbox");

  checkboxes.forEach((checkbox) => {
    checkbox.checked = isChecked; // 모든 'lectureCheckbox'의 상태를 'selectAll'의 상태로 변경
  });

  // 체크박스 상태가 변경되었으니 총 결제금액도 재계산
  calculateTotalPrice();
});

// 개별 체크박스 상태가 변경될 때마다 총 금액을 업데이트
document.querySelectorAll(".lectureCheckbox").forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    // 'lectureCheckbox' 중 하나라도 체크가 해제되면 'selectAll' 체크박스도 해제
    if (!this.checked) {
      document.getElementById("selectAll").checked = false;
    }

    // 만약 모든 'lectureCheckbox'가 체크되었을 때, 'selectAll'도 체크
    const allChecked = [...document.querySelectorAll(".lectureCheckbox")].every(
      (checkbox) => checkbox.checked
    );
    document.getElementById("selectAll").checked = allChecked;

    // 총 금액 업데이트
    calculateTotalPrice();
  });
});

// 삭제 버튼 클릭 시 해당 행을 삭제하는 기능
document.querySelectorAll(".deleteBtn").forEach((deleteButton) => {
  deleteButton.addEventListener("click", function () {
    // 삭제할 행을 찾아서 제거
    const row = this.closest("tr");
    row.remove();

    // 행이 삭제된 후 총 결제금액을 다시 계산
    calculateTotalPrice();
  });
});

// 선택 삭제 기능 구현
function deleteSelected() {
  const checkboxes = document.querySelectorAll(".lectureCheckbox");

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const row = checkbox.closest("tr");
      row.remove(); // 선택된 항목 삭제
    }
  });

  // 삭제된 후 총 금액 다시 계산
  calculateTotalPrice();
}

// 페이지 로드 시 초기 총 금액 계산
window.onload = calculateTotalPrice;

//lecture/common/lectureList.do
