import $ from "jquery";

export const scrollTo = (id) => {
  if (id) {
    disableUnderlineWhileScrolling();
    $("html, body").animate(
      {
        scrollTop: $(id).offset().top,
      },
      700
    );
  }
};

let underlineDisabled = false;
const disableUnderlineWhileScrolling = () => {
  underlineDisabled = true;
  setTimeout(() => {
    underlineDisabled = false;
  }, 700);
};

export const isUnderlineDisabled = () => underlineDisabled;
