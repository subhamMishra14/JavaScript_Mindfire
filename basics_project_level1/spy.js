var name=prompt("Enter name")
var age=prompt("Enter Age")
var height=prompt("Enter height")
var pet_name=prompt("Enter Pet Name")

var split_name=name.split(' ');
var fname=split_name[0];
var lname=split_name[1];
var r_pet_name=pet_name.split('').reverse().join('');

var flag=false;

if (fname[0]===lname[0])
{
    flag=true;
}
else if (age > 20 && age <30)
{
  flag=true;
}
else if (height >=170)
{

}
else if (r_pet_name[0]==='y')
{
  flag=true;
}
else
{
  flag=false;
}

if (flag===true)
{
    console.log("spy present")
}
