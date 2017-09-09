
    console.log("efw");
    var prices={expresso:15,frappe:20,cappacino:25};
    var coffee={expresso:0,frappe:0,cappacino:0,Special_Request:""};
    var customer={name:"",order:coffee,bill:0};
    $("#ExpressQty").html("Qty: "+coffee.expresso+"<br> Price: Rs"+prices.expresso+"/Cup");
    $("#CappaQty").html("Qty: "+coffee.cappacino+"<br> Price: Rs"+prices.cappacino+"/Cup");
    $("#FrappeQty").html("Qty: "+coffee.frappe+"<br> Price: Rs"+prices.frappe+"/Cup");
    $("#bill").html("Rs "+customer.bill);

    $("#collapse-0").click(function(){
        if($("#collapse-0").text()==="Add Your Order"){
            $("#collapse-0").text("Coffee");
        }else{
            $("#collapse-0").text("Add Your Order");
        }
    });
    function add(val){
        switch(val){
            case 1: coffee.expresso++;
                    customer.bill=customer.bill+prices.expresso;
                    $("#ExpressQty").html("Qty: "+coffee.expresso+"<br> Price: Rs"+prices.expresso+"/Cup");;break;
            case 2:coffee.frappe++;
                   customer.bill=customer.bill+prices.frappe;
                   $("#FrappeQty").html("Qty: "+coffee.frappe+"<br> Price: Rs"+prices.frappe+"/Cup");;break
            case 3:coffee.cappacino++;
                   customer.bill=customer.bill+prices.cappacino; 
                   $("#CappaQty").html("Qty: "+coffee.cappacino+"<br> Price: Rs"+prices.cappacino+"/Cup"); break
        }
        $("#bill").html("Rs"+customer.bill);

    }
    function remove(val){
        switch(val){
            case 1: (coffee.expresso>0)?coffee.expresso--:coffee.expresso=0;
                    customer.bill=customer.bill-prices.expresso;
                    $("#ExpressQty").text("Qty: "+coffee.expresso);break;
            case 2:(coffee.frappe>0)?coffee.frappe--:coffee.frappe=0;
                    customer.bill=customer.bill-prices.frappe;
                    $("#FrappeQty").text("Qty: "+coffee.frappe); break
            case 3:(coffee.cappacino)?coffee.cappacino--:coffee.cappacino;
                    customer.bill=customer.bill-prices.cappacino;
                    $("#CappaQty").text("Qty: "+coffee.cappacino);break
        }
        $("#bill").html("Rs"+customer.bill);
    }
    function clicking(){
        coffee.Special_Request=$("#special").val();
        $("#specialsum").text((coffee.Special_Request.length>0)?("Special :"+coffee.Special_Request):"");
        $("#ExpressQtysum").text("Qty: "+coffee.expresso);
        $("#CappaQtysum").text("Qty: "+coffee.cappacino);
        $("#FrappeQtysum").text("Qty: "+coffee.frappe);
        console.log("e")
        $("#order-form").toggleClass("hidden");
        $("#sum").toggleClass("hidden");
        customer.name=$("#name").val();
      //  customer.email=$("#email").val();
    }
    $("#order").click(clicking());
    $("#editing").click(clicking());
    $("#final").click(function(){

    });
    $("#final").click(function writeUserData() {
        if($("name").val()===""||customer.bill===0)
        console.log(customer);
        const dbObj = firebase.database().ref()
            
        firebase.database().ref().once('value').then(function(snapshot) {
            
        let l=(snapshot.val()!==null)?(Object.keys(snapshot.val()).length):0; 
        firebase.database().ref(l).set({
                customer: customer
            });
        })
        alert("Your Total bill is :"+customer.bill);
        //reseting after updating
         window.location = "index.html";
    })