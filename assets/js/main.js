$(function(){
  // Nous utiliserons les Regex (regular expression / expressions régulières), une forme syntaxique donnant des instructions sur ce que l'on veut que notre texte comporte.
  var letters = /^[A-Za-z-]+$/;
  // Ici, j'indique que ma variable letters ne comportera que des lettres majuscules/minucules allant de a à z ainsi que le tiret du 6 (cf la fin).
  // Il faut toujours donner ses instructions entre les slashs "/". Le "^" indique que nous voulons ces caractères dès le début du string. Le "$" indique que nous voulons ces caractères jusqu'à la fin du string
  // Si ^ était seul, il n'aurait concerné que la première lettre. Si $ était seul, il n'aurait concerné que la dernière lettre.
  // C'est le + qui permet de dire que l'on peut placer autant de caractères que l'on veut.
  var mail = /.*@.*/;
  // Ici, j'indique que je veux forcément un arobase entouré de n'importe quels caractères à sa gauche et à sa droite.
  var phone = /^[0-9]{10}$/;
  // Ici, je ne veux QUE des chiffres. Et j'en veux précisement 10.
  $('#submit').on('click',function(){
  // ou " $('form').submit(function(){...});"
    var nameConfirmed = letters.exec($('#name').val());
  // Je formule une variable de sorte à ce qu'elle prenne la valeur du champs et que s'exécutent en celle-ci mes instructions Regex.
    var firstNameConfirmed = letters.exec($('#firstName').val());
    var mailConfirmed = mail.exec($('#mail').val());
    var phoneConfirmed = phone.exec($('#phoneNumber').val());
    if (!nameConfirmed){
    // Ici, avec le "!", je lui dis que si mes instructions regex ne sont pas respectées, alors j'applique mon alert.
      alert('Attention, votre nom ne doit contenir que des lettres sans accents et des tirets.');
      $('#name').css('border', 'solid red 3px');
    }
     else if (!firstNameConfirmed){
    // Les else if sont importants. Si je n'avais mis que des if. J'aurais eu deux alert en cas d'échec. Celui de l'erreur et celui du else.
      alert('Attention, votre prénom ne doit contenir que des lettres sans accents et des tirets.');
      $('#firstName').css('border', 'solid red 3px');
    }
    else if (!mailConfirmed){
      alert('Attention, votre adresse mail n\'est pas valide.');
      $('#mail').css('border', 'solid red 3px');
    }
    else if (!phoneConfirmed){
      alert('Attention, votre numéro de téléphone ne doit contenir que 10 chiffres.');
      $('#phoneNumber').css('border', 'solid red 3px');
    }
    else {
      alert('Vos informations ont bien été enregistrées. Merci.');
    }
  });
});
// En apprendre plus sur les expressions régulières : https://www.youtube.com/watch?v=dinW2QTSNl4
