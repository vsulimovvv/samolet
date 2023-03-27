window.addEventListener('DOMContentLoaded', () => {
  // * ===== Mask input
  $('input[type="tel"]').mask('+7 (999) 999-99-99');
  //   // * ===== Nice Select
  //   // $('select').niceSelect();

  // * ===== Scroll anchor
  (function scrollAnchor() {
    $('.link-anchor').on('click', function () {
      let href = $(this).attr('href');

      $('html, body').animate(
        {
          scrollTop: $(href).offset().top - 90,
        },
        {
          duration: 1000,
          easing: 'linear',
        }
      );

      return false;
    });
  })();

  // * ===== MultiStep Form
  // (function multiStep() {
  //   const prevBtns = document.querySelectorAll('.btn-prev');
  //   const nextBtns = document.querySelectorAll('.btn-next');
  //   const formSteps = document.querySelectorAll('.form-request__step');
  //   const countEl = document.querySelector('.count-steps');
  //   const stepsCount = document.querySelector('.steps-length');
  //   const submitBtn = document.querySelector('.submit-btn');
  //   const formEnd = document.querySelector('.form-request__end');
  //   const formInner = document.querySelector('.form-request__inner');
  //   const fill = document.querySelector('.form-request__fill');
  //   const form = document.querySelector('.form-request');

  //   if (form) {
  //     stepsCount.textContent = formSteps.length;

  //     submitBtn.addEventListener('click', (e) => {
  //       e.preventDefault();
  //       formEnd.style.display = 'block';
  //       formInner.style.display = 'none';
  //     });

  //     let formStepsNum = 0;

  //     updateProgress();
  //     nextBtns.forEach((btn) => {
  //       btn.addEventListener('click', () => {
  //         formStepsNum++;
  //         updateFormSteps();
  //         updateProgress();
  //       });
  //     });

  //     prevBtns.forEach((btn) => {
  //       btn.addEventListener('click', () => {
  //         formStepsNum--;
  //         updateFormSteps();
  //         updateProgress();
  //       });
  //     });

  //     function updateFormSteps() {
  //       formSteps.forEach((formStep) => {
  //         formStep.classList.contains('active') &&
  //           formStep.classList.remove('active');
  //       });
  //       formSteps[formStepsNum].classList.add('active');
  //       updateProgress();
  //     }

  //     function updateProgress() {
  //       fill.style.width = `${(100 / formSteps.length) * (formStepsNum + 1)}%`;
  //       countEl.textContent = formSteps.length - 1 - formStepsNum;
  //     }
  //   }
  // })();

  (function multiStep() {
    const prevBtns = document.querySelectorAll('.btn-prev');
    const nextBtns = document.querySelectorAll('.btn-next');
    const formSteps = document.querySelectorAll('.form-request__step');
    const countEl = document.querySelector('.count-steps');
    const stepsCount = document.querySelector('.steps-length');
    const submitBtn = document.querySelector('.submit-btn');
    const formEnd = document.querySelector('.form-request__end');
    const formInner = document.querySelector('.form-request__inner');
    const fill = document.querySelector('.form-request__fill');
    const form = document.querySelector('.form-request');
    const formInputs = document.querySelectorAll('.form-request__input');

    console.log(formInputs.length);
    if (form) {
      stepsCount.textContent = formSteps.length;

      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        formEnd.style.display = 'block';
        formInner.style.display = 'none';
      });

      let formStepsNum = 0;

      updateProgress();
      nextBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          if (
            formInputs[formStepsNum] &&
            formInputs[formStepsNum].value.length
          ) {
            formStepsNum++;
            updateFormSteps();
            updateProgress();
          } else if (formStepsNum >= formInputs.length) {
            formStepsNum++;
            updateFormSteps();
            updateProgress();
          } else {
            alert('Заполните поле');
            return false;
          }
        });
      });

      prevBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          formStepsNum--;
          updateFormSteps();
          updateProgress();
        });
      });

      function updateFormSteps() {
        formSteps.forEach((formStep) => {
          formStep.classList.contains('active') &&
            formStep.classList.remove('active');
        });
        formSteps[formStepsNum].classList.add('active');
        updateProgress();
      }

      function updateProgress() {
        fill.style.width = `${(100 / formSteps.length) * (formStepsNum + 1)}%`;
        countEl.textContent = formSteps.length - 1 - formStepsNum;
      }
    }
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.reviews__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 'auto',
      spaceBetween: 50,
      loop: true,
      // autoHeight: true,
      breakpoints: {
        315: {
          spaceBetween: 30,
        },

        768: {
          spaceBetween: 40,
        },
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.videos__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 3,
      initialSlide: 2,
      centeredSlides: true,
      spaceBetween: 100,
      // loop: true,
      breakpoints: {
        315: {
          spaceBetween: 30,
          slidesPerView: 2.1,
        },

        768: {
          spaceBetween: 50,
          slidesPerView: 2.2,
        },

        991: {
          spaceBetween: 70,
          slidesPerView: 2.5,
        },

        1230: {
          spaceBetween: 100,
          slidesPerView: 3,
        },
      },
    });
  })();

  // * ===== Fixed Header
  (function fixedHeader() {
    function scrollHeader() {
      const nav = document.querySelector('header');
      if (this.scrollY >= 20) {
        nav.classList.add('scroll-header');
      } else {
        nav.classList.remove('scroll-header');
      }
    }
    window.addEventListener('scroll', scrollHeader);
    // ! Change
    function changeBg() {
      const header = document.querySelector('header');
      if (window.pageYOffset >= 20) {
        header.classList.add('scroll-header');
      }
    }
    changeBg();
  })();

  // * ===== Accordion
  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
      if (el) {
        el.addEventListener('click', (e) => {
          const target = e.target.closest(accordion);
          const content = target.querySelector(accordionContent);
          target.classList.toggle('active');
          if (target.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
          } else {
            content.style.maxHeight = null;
          }
        });
      }
    });
  };
  toggleAccordion('.accordion-control-btn', '.accordion-content', '.accordion');

  //* Close menu after click on Links
  (function closeMenuAfterClickOnLinks() {
    const menuLinks = document.querySelectorAll('.mobile-menu__link');
    const body = document.querySelector('body');

    function linkAction() {
      document.querySelector('.mobile-menu').classList.remove('active');
      document.querySelector('.header__toggle').classList.remove('active');
      document.querySelector('.overlay').classList.remove('active');
      body.classList.remove('no-scroll');
    }
    menuLinks.forEach((ml) => ml.addEventListener('click', linkAction));
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.btn-order', '.popup--order', '.popup__close');
    bindModal('.btn-review-vk', '.popup--review-vk', '.popup__close');
    bindModal('.btn-review-yandex', '.popup--review-yandex', '.popup__close');
    bindModal(
      '.btn-review-reputation',
      '.popup--review-reputation',
      '.popup__close'
    );
    bindModal(
      '.btn-review-arbitration',
      '.popup--review-arbitration',
      '.popup__close'
    );
    bindModal('.btn-review-vk-mes', '.popup--review-vk-mes', '.popup__close');
    bindModal(
      '.btn-review-whatsapp-mes',
      '.popup--review-whatsapp-mes',
      '.popup__close'
    );
    bindModal('.btn-review-tg-mes', '.popup--review-tg-mes', '.popup__close');
  })();

  //   // * ===== Toggle Tabs
  //   function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
  //     const header = document.querySelectorAll(headerSelector);
  //     const tab = document.querySelectorAll(tabSelector);
  //     const content = document.querySelectorAll(contentSelector);
  //     header.forEach((el) => {
  //       if (el) {
  //         hideTabContent();
  //         showTabContent();
  //         function hideTabContent() {
  //           content.forEach((item) => {
  //             item.classList.remove('active');
  //           });
  //           tab.forEach((item) => {
  //             item.classList.remove(activeClass);
  //           });
  //         }
  //         function showTabContent(i = 0) {
  //           content[i].classList.add('active');
  //           tab[i].classList.add(activeClass);
  //         }
  //         header.forEach((item) => {
  //           if (item) {
  //             item.addEventListener('click', (e) => {
  //               const target = e.target;
  //               if (target.classList.contains(tabSelector.replace(/\./, ''))) {
  //                 tab.forEach((item, i) => {
  //                   if (target == item || target.parentNode == item) {
  //                     hideTabContent();
  //                     showTabContent(i);
  //                   }
  //                 });
  //               }
  //             });
  //           }
  //         });
  //       }
  //     });
  //   }
  //   someTabs('.contacts', '.contacts-top__item', '.contacts__content', 'active');
  //   function toggleTabs(
  //     headerSelector,
  //     tabSelector,
  //     contentSelector,
  //     activeClass
  //   ) {
  //     const header = document.querySelectorAll(headerSelector);
  //     const tab = document.querySelectorAll(tabSelector);
  //     const content = document.querySelectorAll(contentSelector);
  //     header.forEach((el) => {
  //       if (el) {
  //         hideTabContent();
  //         showTabContent();
  //         function hideTabContent() {
  //           content.forEach((item) => {
  //             item.classList.remove('active');
  //           });
  //           tab.forEach((item) => {
  //             item.classList.remove(activeClass);
  //           });
  //         }
  //         function showTabContent(i = 4) {
  //           content[i].classList.add('active');
  //           tab[i].classList.add(activeClass);
  //         }
  //         header.forEach((item) => {
  //           if (item) {
  //             item.addEventListener('click', (e) => {
  //               const target = e.target;
  //               if (target.classList.contains(tabSelector.replace(/\./, ''))) {
  //                 tab.forEach((item, i) => {
  //                   if (target == item || target.parentNode == item) {
  //                     hideTabContent();
  //                     showTabContent(i);
  //                   }
  //                 });
  //               }
  //             });
  //           }
  //         });
  //       }
  //     });
  //   }
  //   toggleTabs(
  //     '.price-list',
  //     '.price-list-top__btn',
  //     '.price-list__content',
  //     'active'
  //   );
});
