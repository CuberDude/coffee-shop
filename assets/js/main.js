
    console.log("efw");
    var coffee={expresso:0,frappe:0,cappacino:0,Special_Request:""};
    var customer={name:"",order:coffee};
    $("#ExpressQty").text("Qty: "+coffee.expresso);
    $("#CappaQty").text("Qty: "+coffee.cappacino);
    $("#FrappeQty").text("Qty: "+coffee.frappe);
    $("#collapse-0").click(function(){
        if($("#collapse-0").text()==="Add Your Order"){
            $("#collapse-0").text("Coffee");
        }else{
            $("#collapse-0").text("Add Your Order");
        }
    })
    function add(val){
        switch(val){
            case 1: coffee.expresso++;
                    $("#ExpressQty").text("Qty: "+coffee.expresso);break;
            case 2:coffee.frappe++;
                    $("#FrappeQty").text("Qty: "+coffee.frappe); break
            case 3:coffee.cappacino++;
                    $("#CappaQty").text("Qty: "+coffee.cappacino);break

        }
    }
    function remove(val){
        switch(val){
            case 1: (coffee.expresso>0)?coffee.expresso--:coffee.expresso=0;
                    $("#ExpressQty").text("Qty: "+coffee.expresso);break;
            case 2:(coffee.frappe>0)?coffee.frappe--:coffee.frappe=0;
                    $("#FrappeQty").text("Qty: "+coffee.frappe); break
                    case 3:(coffee.cappacino)?coffee.cappacino--:coffee.cappacino;
                    $("#CappaQty").text("Qty: "+coffee.cappacino);break

        }
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
        coffee={expresso:0,frappe:0,cappacino:0,Special_Request:""};
        customer={name:"",order:coffee};
        $("name").val("")
        $("special").val("");
        clicking();
    });
    $("#final").click(function writeUserData() {
            const dbObj = firebase.database().ref()
            
        firebase.database().ref().once('value').then(function(snapshot) {
                console.log(snapshot.val()!==null);
            
        let l=(snapshot.val()!==null)?(Object.keys(snapshot.val()).length):0; 
        firebase.database().ref(l).set({
                customer: customer
            });
        })
    })