var app = angular.module("myapp",[]);
var TextArea_content;
var arrayText = [];
var arrayShow = [];
var count = 0;
app.controller("MyController",function($scope){
    $scope.getTextArea = function(){
        TextArea_content = $scope.textarea1;
        TextArea_content = TextArea_content.split("\n");
        for(var i = 0; i < TextArea_content.length; i++){
            arrayText[i] = TextArea_content[i].split("/[ ]+/");
        }
        for(var i = 0; i < arrayText.length; i++){
            if(arrayText[i][3] < 3145728 && (arrayText[i][2]/arrayText[i][1]) > 0.75){
                arrayShow[m] = arrayText[i];
                count ++;
            }
        }
        $scope.ShowContent = arrayShow;
        console.log(arrayShow);
    };

});
