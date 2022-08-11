import button from "./button.js";
const withInstall = (comp) => {
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
};
const Button = withInstall(button);
export {
  Button as default
};
