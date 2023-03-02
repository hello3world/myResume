const close_btn = document.querySelector('.contacts__close-btn');
const contacts = document.querySelector('.contacts');
const openBtn = document.querySelector('.header__btn')

openBtn.addEventListener('click', () => {
  contacts.classList.add('visible')
}
);

close_btn.addEventListener('click', () => {
  contacts.classList.remove('visible')
}
);



contacts.addEventListener('mouseover', () => {
  close_btn.classList.add('close_btn--opacity');

})
contacts.addEventListener('mouseout', () => {
  close_btn.classList.remove('close_btn--opacity');
})