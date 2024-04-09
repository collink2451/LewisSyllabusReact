export const addWindowClass = (classList: string) => {
  const window = document?.getElementById("root");
  if (window) {
    window.classList.add(classList);
  }
};

export const removeWindowClass = (classList: string) => {
  const window = document?.getElementById("root");
  if (window) {
    window.classList.remove(classList);
  }
};
