    /*Calling The Function to get the input and show the result */
    function CalculateCost() {
        var litre_price = document.getElementById('Fuel_Price').value; /*Creating a var and accessing the elemnt by the ID and storing it */ 
        var litres_purchased = document.getElementById('Litre').value; /*Creating a var and accessing the elemnt by the ID and storing it */
        var result = (litres_purchased * litre_price) /*The formula to find the total amount is stored in the variable so that it can be called later to display */

        document.getElementById('t_quantity').innerHTML = result; /*The Total amount is taken from var result and is added to t_quantity. When the button is clicked, the result is shown in the t_quantity*/
    }
    
