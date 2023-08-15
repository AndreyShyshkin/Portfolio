function typeWriter(
  textElement,
  text,
  delay,
  isForward = true,
  repeatCount = Infinity,
  callback
) {
  let i = isForward ? 0 : text.length;

  function forward() {
    if (i < text.length) {
      textElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(forward, delay);
    } else {
      setTimeout(reverse, delay);
    }
  }

  function reverse() {
    if (i >= 0) {
      textElement.innerHTML = text.substring(0, i);
      i--;
      setTimeout(reverse, delay);
    } else {
      repeatCount--;
      if (repeatCount === 0) {
        if (callback) {
          callback(); // Call the callback function after finishing the animation
        }
        return;
      }
      setTimeout(forward, delay);
    }
  }

  forward();
}

const nameElement = document.getElementById("name");
const roleElement = document.getElementById("role");
const specialtyElement = document.getElementById("specialty");

function startAnimationCycle() {
  typeWriter(nameElement, "Shyshkin Andrey", 100, true, 1, () => {
    typeWriter(roleElement, "a Front-End developer", 100, true, 1, () => {
      typeWriter(
        specialtyElement,
        "a WordPress developer",
        100,
        true,
        1,
        startAnimationCycle
      );
    });
  });
}

startAnimationCycle();
