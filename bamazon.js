var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "marcela1",
    database: "bamazon_db"
  });

  connection.connect( function(err)
  {
      if (err) throw err;
      start ();
  });



  function start(){
connection.query("select * from products", function (err,res){

    if (err) throw err;;
    console.table(res);
    putID();
});

  };

function putID(){

    inquirer

    .promp ([{

name: "product-id",
type:"input",
message: "Give the ID of the product you would like to buy.",
validate: function(value) {
    if (isNaN(value) === false) {
      return true;
    }
    return false;
  }

    }
]).then (function(answer)
    {
connection.query(
    "UPDATE products SET ? WHERE ?",
[
{
    product_id: answer.product-id
}
],


)

    }
    
    )

    
}

/*
inquirer

.prompt ([
{
name: "product-id",
type:"input",
message: "Give the ID of the product you would like to buy."

}.then (function (answer){

    switch (answer.product-id) {
        
    
        case "1": order();
        break;
        case "2": order(); 
        break;
        case "3": order();
        break;
        case "4": order(); 
        break;
        case "5": order();
        break;
        case "6": order(); 
        break;
        case "7": order();
        break;
        case "8": order(); 
        break;
        case "9": order();
        break;
        case "10": order(); 
        break;
    }

})
]);

function order (){

inquirer
.prompt ( [ {

    name:"item",
    type: "input",
    message:"How many would you like to buy?",
    validate: function(value){
        if (isNaN(value)=== false){
            return true;
        }
        return true;
    }

}])

.then( function (answer) {
connection.query(
    "UPDATE products SET ? WHERE ?",
    [
{

    stock_quantity: answer.item
},
{
    item_id: item_id
}

    ]
)

}


)




  }
    
}*/