// Присваиваю элементы DOM константам
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");
const modalBg = document.querySelector(".modal-bg");
const formBtn = document.querySelector(".form__btn");
const modalTimer = document.querySelector(".modal__timer span");
const body = document.body;

// Добавляю кнопке событие для открытия модального окна
formBtn.addEventListener("click", e => {
      body.classList.add("modal-active");        // Добавляю классы для элементов, чтобы отобразить модальное окно
      modalBg.classList.add("active");
      modal.classList.add("active");

      // Таймер для модального окна
      let time = 5;
      const timer = setInterval(() => {
            time -= 1;
            modalTimer.innerHTML = time;  // Меняем значение таймера

            if (time == 0) {  // При достижении нуля, выходим из интервала и закрываем модальное окно
                  closeModalFunc();
                  clearInterval(timer);
            }
      }, 1000);
})

// Метод для закрытия модального окна
const closeModalFunc = () => {
      body.classList.remove("modal-active");
      modalBg.classList.remove("active");
      modal.classList.remove("active");
}

// Добавляю событие на крестик и задний фон модального окна для его закрытия
closeModal.addEventListener("click", closeModalFunc);
modalBg.addEventListener("click", closeModalFunc);