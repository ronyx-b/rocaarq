window.onload = function () {
  function toggleOrderNum() {
    // eslint-disable-next-line eqeqeq
    if (document.querySelector('#about-problem').checked == true) {
      document.querySelector('#order-num-wrapper').style.display = 'flex';
    } else {
      document.querySelector('#order-num-wrapper').style.display = 'none';
    }
  };

  document.querySelector('#about-problem').addEventListener('change', toggleOrderNum);
  document.querySelector('#about-question').addEventListener('change', toggleOrderNum);
  document.querySelector('#about-comment').addEventListener('change', toggleOrderNum);
  document.querySelector('#contact-form').addEventListener('change', toggleOrderNum);
};
