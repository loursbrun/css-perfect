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



        $scope.squareID =[
            "block_0_500","block_0_400","block_0_300","block_0_200","block_0_100","block_0_0","block_0_-100","block_0_-200","block_0_-300","block_0_-400","block_0_-500",
            "block_100_500","block_100_400","block_100_300","block_100_200","block_100_100","block_100_0","block_100_-100","block_100_-200","block_100_-300","block_100_-400","block_100_-500",
            "block_200_500","block_200_400","block_200_300","block_200_200","block_200_100","block_200_0","block_200_-100","block_200_-200","block_200_-300","block_200_-400","block_200_-500",
            "block_300_500","block_300_400","block_300_300","block_300_200","block_300_100","block_300_0","block_300_-100","block_300_-200","block_300_-300","block_300_-400","block_300_-500",
            "block_400_500","block_400_400","block_400_300","block_400_200","block_400_100","block_400_0","block_400_-100","block_400_-200","block_400_-300","block_400_-400","block_400_-500",
            "block_500_500","block_500_400","block_500_300","block_500_200","block_500_100","block_500_0","block_500_-100","block_500_-200","block_500_-300","block_500_-400","block_500_-500",
            "block_600_500","block_600_400","block_600_300","block_600_200","block_600_100","block_600_0","block_600_-100","block_600_-200","block_600_-300","block_600_-400","block_600_-500",
            "block_700_500","block_700_400","block_700_300","block_700_200","block_700_100","block_700_0","block_700_-100","block_700_-200","block_700_-300","block_700_-400","block_700_-500"
        ];
        $scope.squareX = [
            "0","0","0","0","0","0","0","0","0","0","0",
            "100","100","100","100","100","100","100","100","100","100","100",
            "200","200","200","200","200","200","200","200","200","200","200",
            "300","300","300","300","300","300","300","300","300","300","300",
            "400","400","400","400","400","400","400","400","400","400","400",
            "500","500","500","500","500","500","500","500","500","500","500",
            "600","600","600","600","600","600","600","600","600","600","600",
            "700","700","700","700","700","700","700","700","700","700","700"
        ];
        $scope.squareY =[
            "500","400","300","200","100","0","-100","-200","-300","-400","-500",
            "500","400","300","200","100","0","-100","-200","-300","-400","-500",
            "500","400","300","200","100","0","-100","-200","-300","-400","-500",
            "500","400","300","200","100","0","-100","-200","-300","-400","-500",
            "500","400","300","200","100","0","-100","-200","-300","-400","-500",
            "500","400","300","200","100","0","-100","-200","-300","-400","-500",
            "500","400","300","200","100","0","-100","-200","-300","-400","-500",
            "500","400","300","200","100","0","-100","-200","-300","-400","-500"
        ];
        $scope.squareMarginTop =[
            "450px","350px","250px","150px","50px","-50px","-150px","-250px","-350px","-450px","-550px",
            "450px","350px","250px","150px","50px","-50px","-150px","-250px","-350px","-450px","-550px",
            "450px","350px","250px","150px","50px","-50px","-150px","-250px","-350px","-450px","-550px",
            "450px","350px","250px","150px","50px","-50px","-150px","-250px","-350px","-450px","-550px",
            "450px","350px","250px","150px","50px","-50px","-150px","-250px","-350px","-450px","-550px",
            "450px","350px","250px","150px","50px","-50px","-150px","-250px","-350px","-450px","-550px",
            "450px","350px","250px","150px","50px","-50px","-150px","-250px","-350px","-450px","-550px",
            "450px","350px","250px","150px","50px","-50px","-150px","-250px","-350px","-450px","-550px",
            "450px","350px","250px","150px","50px","-50px","-150px","-250px","-350px","-450px","-550px"
        ];
        $scope.squareMarginLeft = [
            "-50px","-50px","-50px","-50px","-50px","-50px","-50px","-50px","-50px","-50px","-50px",
            "50px","50px","50px","50px","50px","50px","50px","50px","50px","50px","50px",
            "150px","150px","150px","150px","150px","150px","150px","150px","150px","150px","150px",
            "250px","250px","250px","250px","250px","250px","250px","250px","250px","250px","250px",
            "350px","350px","350px","350px","350px","350px","350px","350px","350px","350px","350px",
            "450px","450px","450px","450px","450px","450px","450px","450px","450px","450px","450px",
            "550px","550px","550px","550px","550px","550px","550px","550px","550px","550px","550px",
            "650px","650px","650px","650px","650px","650px","650px","650px","650px","650px","650px",
            "750px","750px","750px","750px","750px","750px","750px","750px","750px","750px","750px"
        ];
        $scope.squareBGColor = [
            "grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey",
            "#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc",
            "grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey",
            "#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc",
            "grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey",
            "#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc",
            "grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey",
            "#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc",
            "grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey",
            "#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc",
            "grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey",
            "#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc",
            "grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey",
        ];


        /*

         $scope.squareID =[
         "block_0_500","block_0_400","block_0_300","block_0_200","block_0_100","block_0_0","block_0_-100","block_0_-200","block_0_-300","block_0_-400","block_0_-500",
         "block_100_500","block_100_400","block_100_300","block_100_200","block_100_100","block_100_0","block_100_-100","block_100_-200","block_100_-300","block_100_-400","block_100_-500"
         ];
         $scope.squareX = [
         "0","0","0","0","0","0","0","0","0","0","0",
         "100","100","100","100","100","100","100","100","100","100","100"
         ];
         $scope.squareY =[
         "500","400","300","200","100","0","-100","-200","-300","-400","-500",
         "500","400","300","200","100","0","-100","-200","-300","-400","-500"
         ];
         $scope.squareMarginTop =[
         "450px","350px","250px","150px","50px","-50px","-150px","-250px","-350px","-450px","-550px",
         "450px","350px","250px","150px","50px","-50px","-150px","-250px","-350px","-450px","-550px"
         ];
         $scope.squareMarginLeft = [
         "-50px","-50px","-50px","-50px","-50px","-50px","-50px","-50px","-50px","-50px","-50px",
         "50px","50px","50px","50px","50px","50px","50px","50px","50px","50px","50px"
         ];
         $scope.squareBGColor = [
         "grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey",
         "#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc"
         ];

        */


        $scope.addElementsToGrid = function() {
            var childdiv = document.getElementById("container-div-cercle-rouge");
            document.getElementById("block_400_-200").appendChild(childdiv);
            console.log("Add elements to grid !!!");
        }


    })
