/**
 * Created by jcdn on 2017/10/3.
 */

//点击保存新增用户
$(".save").click(function(){
    console.log(window.top.selfArr)

    let add_name=$(".add_username").val();
    let add_pwd=$(".add_userpwd").val();
    if(add_name!="" && add_pwd!=""){
        let this_id;
        if(window.top.userArr.length>0){
            this_id=parseInt(window.top.userArr[window.top.userArr.length-1].id)+1
        }
        else {
            console.log("in")
            this_id=1
        }
        console.log(this_id)
        window.top.userArr.push({id:this_id,userName:add_name,password:add_pwd});
        window.location.href="user.html";
    }else {
        $(".message").text("信息未填写完整！");
    }

});

$(".cancel").click(function(){
    $("input").val("");
    window.location.href="user.html";
});

