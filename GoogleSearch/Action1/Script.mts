Browser("Google").Page("Google").Sync
Browser("Google").Navigate "https://www.google.com.ar/?gws_rd=ssl" @@ hightlight id_;_135168_;_script infofile_;_ZIP::ssf1.xml_;_


flag = 0

While flag = 0
	
	


letras = "abcdfghklqwertyuiozxcvbnm"
For i = 1 To 3 Step 1
	palabra = palabra & mid(letras, randomNumber(1, len(letras)),1)
Next


Browser("Google").Page("Google").WebEdit("Buscar").Set "casa "& palabra @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Google").Page("Google").WebButton("Buscar con Google").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait 1


text = Browser("Google").Page("casa asd - Buscar con").WebElement("result-stats").GetROProperty ("innertext")
vect = split(text, "resultados")
numero = Trim(Replace(Replace (vect(0), "Cerca de ", ""), ",", "")) 

For i= 1 To len(numero) Step 1
	suma = suma + cint(right(left(numero,i),1))
Next
If suma mod 2 = 0 Then
	flag = 1

End If
Wend

ExitAction

