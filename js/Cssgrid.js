/**
 * Created by fabienbrun on 29/02/16.
 */
/**
 * Created by fabienbrun on 29/02/16.
 */
angular.module("CSSGrid", [])

    .controller("CSSGridCtrl", function($scope) {

        $scope.nbMails = 15;
        console.log($scope.nbMails);


        // Array with name and data
        // Colonne 0
        $scope.squareID =["block_0_500","block_0_400","block_0_300","block_0_200","block_0_100","block_0_0","block_0_-100","block_0_-200","block_0_-300","block_0_-400","block_0_-500"];
        $scope.squareX = "0";
        $scope.squareY =["500","400","300","200","100","0","-100","-200","-300","-400","-500"];
        $scope.squareMarginTop =["450px","350px","250px","150px","50px","-50px","-150px","-250px","-350px","-450px","-550px"];
        $scope.squareMarginLeft = "-50px";
        $scope.squareBGColor = ["grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc",];




    })
