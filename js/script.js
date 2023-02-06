window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
  menuItem = document.querySelectorAll('.menu_item'),
  hamburger = document.querySelector('.hamburger'),
  basics = document.querySelector('#basics'),
  standart = document.querySelector('#standart'),
  procare = document.querySelector('#procare'),
  formBasics = document.querySelector ('#form_basics'),
  formStandart = document.querySelector ('#form_standart'),
  formProcare = document.querySelector ('#form_procare'),
  formBtn = document.querySelectorAll ('.form__btn'),
  basicCol = document.querySelector ('#col_basic'),
  standartCol = document.querySelector ('#col_standart'),
  procareCol = document.querySelector ('#col_procare'),
  gardens = document.querySelector ('#gardens'),
  lawn = document.querySelector ('#lawn'),
  planting = document.querySelector ('#planting'),
  gardenBlur = document.querySelectorAll ('.gardenBlur'),
  lawnBlur = document.querySelectorAll ('.lawnBlur'),
  plantingBlur = document.querySelectorAll ('.plantingBlur'),
  firstCity = document.querySelector('#Canandaigua'),
  secondCity = document.querySelector('#NewYorkCity'),
  thirdCity = document.querySelector('#Yonkers'),
  fourthCity = document.querySelector('#Sherrill'),
  contactForm = document.querySelector('.contact__form'),
  nameCity = document.querySelector('.name'), 
  nameForm = document.querySelector('.contact__item'),
  phoneCity = document.querySelector('.phone'),
  adressCity = document.querySelector('.adress'),
  citesForm = document.querySelector('.contact__citesforms');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      });
  });

function openForm (btn, form, closeBtn, closeButton, col, notCol1, notCol2) {
    btn.addEventListener('click', () => {
        //form.slideToggle();
        form.hidden = !form.hidden;
        closeBtn.hidden = 'none';
        closeButton.hidden = 'none';
        col.classList.toggle('prices__items__dropbtn_active');
        notCol1.classList.remove('prices__items__dropbtn_active');
        notCol2.classList.remove('prices__items__dropbtn_active');
    });
}
openForm (basics, formBasics,formStandart,formProcare, basicCol, standartCol, procareCol);
openForm (standart, formStandart,formBasics,formProcare,standartCol, basicCol, procareCol);
openForm (procare, formProcare, formBasics, formStandart,procareCol, basicCol, standartCol);

let flag1 = 0;
let flag2 = 0;
let flag3 = 0;
function onOff (onOff1, onOff2, onOff3) {
    onOff1.addEventListener('click', () => {
        onOff1.classList.toggle('service__button_active');
        flag1 += 1;
        if (flag1 % 2 != 0 && flag2 % 2 != 0 && flag3 % 2 != 0) {
            onOff1.classList.remove('service__button_active');
            onOff2.classList.remove('service__button_active');
            onOff3.classList.remove('service__button_active');
            flag1 = 0;
            flag2 = 0;
            flag3 = 0;
          }
          if (flag1 % 2 != 0 && flag2 % 2 == 0 && flag3 % 2 == 0) {
            gardenBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.add('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.add('blur');
            });
        } else if (flag1 % 2 == 0 && flag2 % 2 != 0 && flag3 % 2 == 0) {
            gardenBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.remove('blur');
            });
            gardenBlur.forEach (item => {
                item.classList.add('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.add('blur');
            });
        } else if (flag1 % 2 == 0 && flag2 % 2 == 0 && flag3 % 2 != 0) {
            gardenBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.remove('blur');
            });
            gardenBlur.forEach (item => {
                item.classList.add('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.add('blur');
            });
        } else if (flag1 % 2 != 0 && flag2 % 2 != 0 && flag3 % 2 == 0) {
            gardenBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.add('blur');
            });
        } else if (flag1 % 2 != 0 && flag2 % 2 == 0 && flag3 % 2 != 0) {
            gardenBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.add('blur');
            });
        } else if (flag1 % 2 == 0 && flag2 % 2 != 0 && flag3 % 2 != 0) {
            gardenBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.remove('blur');
            });
            gardenBlur.forEach (item => {
                item.classList.add('blur');
            });
        } else if (flag1 % 2 == 0 && flag2 % 2 == 0 && flag3 % 2 == 0) {
            gardenBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.remove('blur');
            });
        }
      });
      onOff2.addEventListener('click', () => {
        onOff2.classList.toggle('service__button_active');
        gardenBlur.forEach(item => {
            item.classList.toggle('blur');
        });
        plantingBlur.forEach(item => {
            item.classList.toggle('blur');
        });
        flag2 += 1;
        if (flag1 % 2 != 0 && flag2 % 2 != 0 && flag3 % 2 != 0) {
            onOff1.classList.remove('service__button_active');
            onOff2.classList.remove('service__button_active');
            onOff3.classList.remove('service__button_active');
            flag1 = 0;
            flag2 = 0;
            flag3 = 0;
          }
          if (flag1 % 2 != 0 && flag2 % 2 == 0 && flag3 % 2 == 0) {
            gardenBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.add('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.add('blur');
            });
        } else if (flag1 % 2 == 0 && flag2 % 2 != 0 && flag3 % 2 == 0) {
            gardenBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.remove('blur');
            });
            gardenBlur.forEach (item => {
                item.classList.add('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.add('blur');
            });
        } else if (flag1 % 2 == 0 && flag2 % 2 == 0 && flag3 % 2 != 0) {
            gardenBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.remove('blur');
            });
            gardenBlur.forEach (item => {
                item.classList.add('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.add('blur');
            });
        } else if (flag1 % 2 != 0 && flag2 % 2 != 0 && flag3 % 2 == 0) {
            gardenBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.add('blur');
            });
        } else if (flag1 % 2 != 0 && flag2 % 2 == 0 && flag3 % 2 != 0) {
            gardenBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.add('blur');
            });
        } else if (flag1 % 2 == 0 && flag2 % 2 != 0 && flag3 % 2 != 0) {
            gardenBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.remove('blur');
            });
            gardenBlur.forEach (item => {
                item.classList.add('blur');
            });
        } else if (flag1 % 2 == 0 && flag2 % 2 == 0 && flag3 % 2 == 0) {
            gardenBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.remove('blur');
            });
        }
      });
      onOff3.addEventListener('click', () => {
        onOff3.classList.toggle('service__button_active');
        flag3 += 1;
        if (flag1 % 2 != 0 && flag2 % 2 != 0 && flag3 % 2 != 0) {
            onOff1.classList.remove('service__button_active');
            onOff2.classList.remove('service__button_active');
            onOff3.classList.remove('service__button_active');
            flag1 = 0;
            flag2 = 0;
            flag3 = 0;
          }
          if (flag1 % 2 != 0 && flag2 % 2 == 0 && flag3 % 2 == 0) {
            gardenBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.add('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.add('blur');
            });
        } else if (flag1 % 2 == 0 && flag2 % 2 != 0 && flag3 % 2 == 0) {
            gardenBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.remove('blur');
            });
            gardenBlur.forEach (item => {
                item.classList.add('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.add('blur');
            });
        } else if (flag1 % 2 == 0 && flag2 % 2 == 0 && flag3 % 2 != 0) {
            gardenBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.remove('blur');
            });
            gardenBlur.forEach (item => {
                item.classList.add('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.add('blur');
            });
        } else if (flag1 % 2 != 0 && flag2 % 2 != 0 && flag3 % 2 == 0) {
            gardenBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.add('blur');
            });
        } else if (flag1 % 2 != 0 && flag2 % 2 == 0 && flag3 % 2 != 0) {
            gardenBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.add('blur');
            });
        } else if (flag1 % 2 == 0 && flag2 % 2 != 0 && flag3 % 2 != 0) {
            gardenBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.remove('blur');
            });
            gardenBlur.forEach (item => {
                item.classList.add('blur');
            });
        } else if (flag1 % 2 == 0 && flag2 % 2 == 0 && flag3 % 2 == 0) {
            gardenBlur.forEach (item => {
                item.classList.remove('blur');
            });
            lawnBlur.forEach (item => {
                item.classList.remove('blur');
            });
            plantingBlur.forEach (item => {
                item.classList.remove('blur');
            });
        }
      });
}
onOff (gardens, lawn, planting);

function contactsForm (firstCity, secondCity, thirdCity, fourthCity) {
    firstCity.addEventListener('click', () => {
        nameCity.textContent = 'Canandaigua, NY';
        contactForm.classList.add('contact__form_active');
        citesForm.classList.add('contact__citesforms_active');
        nameForm.textContent = 'Canandaigua, NY';
        phoneCity.textContent = '+1	585	393 0001';
        adressCity.textContent = '151 Charlotte Street';
        document.getElementById('call').href = 'tel:+15853930001';
    });

    secondCity.addEventListener('click', () => {
        nameCity.textContent = 'New York City';
        contactForm.classList.add('contact__form_active');
        citesForm.classList.add('contact__citesforms_active');
        nameForm.textContent = 'New York City';
        phoneCity.textContent = '+1	212	456 0002';
        adressCity.textContent = '9 East 91st Street';
        document.getElementById('call').href = 'tel:+12124560002';
    });

    thirdCity.addEventListener('click', () => {
        nameCity.textContent = 'Yonkers, NY';
        contactForm.classList.add('contact__form_active');
        citesForm.classList.add('contact__citesforms_active');
        nameForm.textContent = 'Yonkers, NY';
        phoneCity.textContent = '+1	914	678 0003';
        adressCity.textContent = '511 Warburton Ave';
        document.getElementById('call').href = 'tel:+19146780003';
    });

    fourthCity.addEventListener('click', () => {
        nameCity.textContent = 'Sherrill, NY';
        contactForm.classList.add('contact__form_active');
        citesForm.classList.add('contact__citesforms_active');
        nameForm.textContent = 'Sherrill, NY';
        phoneCity.textContent = '+1	315	908 0004';
        adressCity.textContent = '14 WEST Noyes BLVD';
        document.getElementById('call').href = 'tel:+13159080004';
    });

}
contactsForm (firstCity, secondCity, thirdCity,fourthCity);
}); 
