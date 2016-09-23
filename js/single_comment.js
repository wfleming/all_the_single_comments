const BTN_SEL = "button.btn.review-simple-reply-button"
    , ENTER = 13
    , TEXTAREA_CLASS = "comment-form-textarea";

function submitSingleComment(input) {
  const form = input.parentElement.parentElement.parentElement.parentElement
      , btn = form.querySelector(BTN_SEL);
  btn.click();
}

function keysPressed(ev) {
  if (navigator.userAgent.indexOf("(Macintosh;") >= 0) {
    return ev.metaKey && ev.shiftKey && ev.keyCode === ENTER;
  } else {
    return ev.ctrlKey && ev.shiftKey && ev.keyCode === ENTER;
  }
}

window.addEventListener("keydown", function(ev) {
  if (keysPressed(ev) && ev.target.classList.contains(TEXTAREA_CLASS)) {
    submitSingleComment(ev.target);
  }
});


