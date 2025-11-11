function fn_ValForm() {
            var sMsg = "";

            var regex = /^[a-z0-9][a-z0-9_.-]*[a-z0-9]@[a-z0-9][a-z0-9.-]*[a-z0-9]\.[a-z0-9]{2,4}$/i;
;

            if(document.getElementById("name").value == ""){
                sMsg += "\n* Anda belum mengisikan nama";
            }

         
            if(document.getElementById("email").value == ""){
                sMsg += "\n* Anda belum mengisikan email";
            }else if(!regex.test(document.getElementById("email").value)){
                sMsg += "\n* Format Email Belum Valid";
            }

            if(document.getElementById("message").value == ""){
                sMsg += "\n* Anda belum mengisikan pesan";
            }

            if(sMsg != ""){
                alert("Peringatan:\n" + sMsg);
                return false;
            }else{
                return true;
            }
}