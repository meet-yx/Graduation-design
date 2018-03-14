/**
 * Created by jcdn on 2017/10/3.
 */

//点击保存新增用户
$(".save").click(function(){
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

function getInfo(){
    //根据id获取表单信息
    var myname = $('#stuname').val();
    var myclass = $('#stuclass').val();
    var mysex = $('#stusex').val();
    var mytel = $('#stutel').val();
    var myqq = $('#stuqq').val();
    var mybiyetime = $('#stubiyetime').val();
    var myxueli = $('#stuxueli').val();
    var mybiyexx = $('#stubiyexx').val();
    var mydabger = $('#studanger').val();
    var mydabgertel = $('#studangertel').val();
    var myemail = $('#studemail').val();
    var mycardid = $('#cardid').val();
    var mybeizhu = $('stubeizhu').val();
    if(myname === '' || myclass === '' || mysex ==='' || mytel === '' || myqq === '' ||
        mybiyetime === '' || myxueli === '' || mybiyexx === '' || mydabger ==='' ||
        mydabgertel ==='' || myemail ==='' || mycardid === '' ){
        judge = false ;
        $(".message").text("信息未填写完整！");
    }else{
        newStu.stuName = myname;
        newStu.stuSex = mysex;
        newStu.classNo = myclass;
        newStu.stuTel = mytel;
        newStu.stuQq = myqq;
        newStu.stuEmail = myemail;
        newStu.stuGraduateTime = mybiyetime;
        newStu.stuDegree = myxueli;
        newStu.stuGraUniversity = mybiyexx;
        newStu.stuDangerContact = mydabger;
        newStu.stuContactTel = mydabgertel;
        newStu.stuID = mycardid;
        newStu.stuMark = mybeizhu;
        studentArg.push(newStu);
        judge = true;
        // console.log(newStu);
    }
    return judge ;
}