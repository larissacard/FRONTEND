document.write("</br> Escolha seu pedido </br>");
document.write("</br> 0 - Sorvete / 1 - Suco </br>");
document.write("</br> 2 - Coca Cola / 3 - Água com Gás </br></br>");

function pedir(){
    x = prompt("O que deseja pedir?");
    
    switch(x){
    
        case "0": 
            alert("VocÊ pediu sorvete!");
            break
        case "1": 
            alert("Você pediu suco");
            break
        case "2": 
            alert("Você pediu coca cola");
            break
        case "3": 
            alert("Você pediu ásgua com gás");
            break   
        default:
            alert("Ops, não temos essa opção")
            break;
    }
    
}