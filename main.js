var imagem=["Tatiane.jpg","Leticia.jpg","Miguel.jpg","Matheus.jpg","Bruno.jpg","Bruna.jpg","Rafael.jpg","Gabriel.jpg","Jocemar.jpg","Veridiana.jpg","Nerli.jpg","Cleber.jpg","Mauri.jpg","Suzi.jpg","Antenor.jpg","Tania.jpg","Juliana.jpg","Marcelo.jpg","Eduardo.jpg","Erica.jpg","Luis.jpg","Paulo.jpg","Ana.jpg"]
var nome=["Tatiane","Leticia","Miguel","Matheus","Bruno","Bruna","Rafael","Gabriel","Jocemar","Veridiana","Nerli","Cleber","Mauri","Suzi","Antenor","Tania","Juliana","Marcelo","Eduardo","Erica","Luis","Paulo","Ana"]
var aniversario=["2 de agosto","2 de agosto","20 de junho","21 de setembro","10 de agosto","16 de novembro","13 de outubro","19 janeiro","19 de maio","7 de junho","21 de maio,","1 de setembro","24 de março","8 de outubro","15 de agosto","17 de outubro","28 de maio","8 de agosto","11 de março","23 de junho","7 de junho","26 de janeiro","21 de outubro"]
var i=0;
function update()
{
    i++;
    var numbersOfFamilyMenberInArray = 22
    if(i>numbersOfFamilyMenberInArray){
        i=0
    }
    var updateImage=imagem[i];
    var updateNames=nome[i];
    var updateAniversario=aniversario[i];
    document.getElementById("familyMemberImage").src=updateImage;
    document.getElementById("familyMemberName").innerHTML=updateNames;
    document.getElementById("familyMemberNiver").innerHTML=updateAniversario;
    if(i==2){
        document.getElementById("familyMemberType").innerHTML="Primo";
    }
    if(i==5){
        document.getElementById("familyMemberType").innerHTML="Prima";
    }
    if(i==6){
        document.getElementById("familyMemberType").innerHTML="Irmão";
    }
    if(i==7){
        document.getElementById("familyMemberType").innerHTML="Eu";
    }
    if(i==8){
        document.getElementById("familyMemberType").innerHTML="Pai";
    }
    if(i==9){
        document.getElementById("familyMemberType").innerHTML="Mãe";
    }
    if(i==10){
        document.getElementById("familyMemberType").innerHTML="Tia";
    }
    if(i==13){
        document.getElementById("familyMemberType").innerHTML="Tia";
    }
    if(i==15){
        document.getElementById("familyMemberType").innerHTML="Tia";
    }
    if(i==11){
        document.getElementById("familyMemberType").innerHTML="Tio";
    }
    if(i==12){
        document.getElementById("familyMemberType").innerHTML="Tio";
    }
    if(i==14){
        document.getElementById("familyMemberType").innerHTML="Tio";
    }
    if(i==18){
        document.getElementById("familyMemberType").innerHTML="Tio";
    }
    if(i==16){
        document.getElementById("familyMemberType").innerHTML="Dinda";
    }
    if(i==17){
        document.getElementById("familyMemberType").innerHTML="Dindo";
    }
    if(i==19){
        document.getElementById("familyMemberType").innerHTML="Vó";
    }
    if(i==20){
        document.getElementById("familyMemberType").innerHTML="Vô";
    }
    if(i==22){
        document.getElementById("familyMemberType").innerHTML="Vó";
    }
    if(i==0){
        document.getElementById("familyMemberType").innerHTML="Prima";
    }
}