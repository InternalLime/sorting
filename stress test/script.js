function processes_stress_test()
{
  var amount_tests = 1000;
  var errors_in_the_test = 0;
  for (var i = 0; i < amount_tests; i++)
  {
    fields_creation(i);

    var array_preparation = generate(7);
    var array_preparation_standart = array_preparation.slice();
    var array_preparation_quick = array_preparation.slice();

    document.getElementById(i + "a").value = array_preparation;
    document.getElementById(i + "b").value = qsort_my(array_preparation_quick); 
    document.getElementById(i + "c").value = sort_standart(array_preparation_standart);  

    errors_in_the_test = errors_in_the_test + array_comparison (array_preparation_standart, array_preparation_quick); 
  }
    alert("ошибок: " + errors_in_the_test + " из "+ amount_tests);
}

function array_comparison(array_1, array_2)
{
 if  (array_1.join() !== array_2.join())
  {
    return 1;
  }
  return 0;
}

function generate(number)
{
  var array_preparation = [];
  for (var i = 0;  i <= number - 1; i++)
  {
    array_preparation[i] = Math.floor(Math.random() * (999 - 1 + 1)) + 1; 
  }
  return array_preparation;
}

function qsort_my(array)
{
  var a = 0;
  var b = (array.length) - 1; 
  qsortmy(array, a, b);
  return array; 
}

function qsortmy(array, a, b)
{ 
  if (b < a)
  return array;
  var first = a;
  var last = b;
  var support = array [Math.floor((last + first) / 2)];
  while  (first <= last)
  {
    while  (array[first] < support)
    {
      first = first + 1;
    }
    while  (array[last] > support)
    {
      last = last - 1 ;
    }
    if  (first <= last)
    {
      var c = array[first];
      array[first] = array[last];
      array[last] = c;
      first = first + 1;
      last = last - 1;  
    }  
  }     
  if (a < last) 
  {
    qsortmy(array, a, last);
  }
  if (b > first)
  {
    qsortmy(array, first, b);
  }
  return array;
} 

function sort_standart (array)
{
  var output_func = array.sort(function(a, b){return a - b;});
  return output_func; 
}

function fields_creation (i)
{
  var element = document.createElement('div');
  element.className = 'text';
  element.innerHTML = '<tr> <td> <input id= "a"  type="text"  style="font-size:28px" value="0" size=26;> </input> </td>  <td> <input type="text" id= "b" style="font-size:28px" value="0" size=26;> </input> </td>  <td>  <input type="text" id= "c" style="font-size:28px" value="0" size=26;> </input> </td>  </tr> ';
  document.getElementById('box').appendChild(element);
  document.getElementById('a').id = i + "a";
  document.getElementById('b').id = i + "b";
  document.getElementById('c').id = i + "c";
}