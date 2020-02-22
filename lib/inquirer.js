const inquirer = require("inquirer");

module.exports = {
  askGithubCredentials: () => {
    const questions = [
      {
        name: "username",
        type: "input",
        message: "Ingrese su nombre de usuario o correo electrónico de GitHub:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Por favor ingrese su nombre de usuario o dirección de correo electrónico.";
          }
        }
      },
      {
        name: "password",
        type: "password",
        message: "Ingresa tu contraseña:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Por favor, introduzca su contraseña.";
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  }
};
