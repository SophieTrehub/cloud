function changeImage()
{
element=document.getElementById('myimage')
if (element.src.match("bulbon"))
  {
  element.src="Resources\image1.png";
  }
else
  {
  element.src="Resources\image2.png";
  }
}