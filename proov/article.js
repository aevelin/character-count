var fs = require('fs');
var chars = fs.readFileSync('article.txt', 'utf-8');

var str = chars.toLowerCase().replace(/\W/g,"");
var output = str.split("");

var letters_count = {};
var maxChar = "";

for(var i = 0; i < chars.length; i++)
{
  if(!letters_count[chars[i]]){
  letters_count[chars[i]] = 0;
}
  letters_count[chars[i]]++;
}
  for(var i in letters_count)
{
  if(maxChar == "" || letters_count[i] > letters_count[maxChar]){
  maxChar = i;

  console.log(i + ' = ' + letters_count[maxChar]);
  }
}
