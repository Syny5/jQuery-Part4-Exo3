$(function(){
  // Nous utiliserons les Regex (regular expression / expressions régulières), une forme syntaxique donnant des instructions sur ce que l'on veut que notre texte comporte.
  var letters = /^[A-Za-zéÉàÀîÎçÇëËïêÊèÈ]+([-]?[A-Za-zéÉàÀîÎçÇëËïêÊèÈ])*$/;
  // Ici, j'indique que ma variable letters ne comportera que des lettres majuscules/minucules allant de a à z ainsi que le tiret du 6 (cf la fin).
  // Il faut toujours donner ses instructions entre les slashs "/". Le "^" indique que nous voulons ces caractères dès le début du string. Le "$" indique que nous voulons ces caractères jusqu'à la fin du string
  // Si ^ était seul, il n'aurait concerné que la première lettre. Si $ était seul, il n'aurait concerné que la dernière lettre.
  // C'est le + qui permet de dire que l'on peut placer autant de caractères que l'on veut.
  // Edit : Nous faisons en sorte que le prénom ne finisse pas par un tiret.
  var mail = /^[a-zA-Z][a-zA-Z0-9]+([_.-]?[a-zA-Z0-9]+)@[a-zA-Z]+.[a-zA-Z]{2,5}$/;
  // Ici, j'indique que je veux que mon premier caractère soit une lettre. Puis je veux au moins un autre caractère dans ce qui est indiqué. Puis forcément un arobase.
  // Puis une autre chaine de caractère limitée à ce qui est indiqué. Puis un point. Puis entre 2 et 5 caractères pour le nom de domaine.
  // On empêche l'utilisateur de finir par un caractère spécial avant le @.
  var phone = /^0[67][0-9]{8}$/;
  // Ici, je veux que le numéro commence par 0 et qu'il s'enchaine avec un 6 ou un 7. ensuite, nous voulons précisément 8 autres chiffres.
  $('#submit').on('click',function(){
  // ou " $('form').submit(function(){...});"
    var nameConfirmed = letters.exec($('#name').val());
    // Je formule une variable de sorte à ce qu'elle prenne la valeur du champs et que s'exécutent en celle-ci mes instructions Regex.
    var firstNameConfirmed = letters.exec($('#firstName').val());
    var mailConfirmed = mail.exec($('#mail').val());
    var phoneConfirmed = phone.exec($('#phoneNumber').val());
    if (!nameConfirmed){
    // Ici, avec le "!", je lui dis que si mes instructions regex ne sont pas respectées, alors j'applique mon alert.
    // "!" signifie "différent de".
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
