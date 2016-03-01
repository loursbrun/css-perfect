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




    // Grid
        $scope.squareID =[
            "block_0_500","block_0_400","block_0_300","block_0_200","block_0_100","block_0_0","block_0_-100","block_0_-200","block_0_-300","block_0_-400","block_0_-500",
            "block_100_500","block_100_400","block_100_300","block_100_200","block_100_100","block_100_0","block_100_-100","block_100_-200","block_100_-300","block_100_-400","block_100_-500",
            "block_200_500","block_200_400","block_200_300","block_200_200","block_200_100","block_200_0","block_200_-100","block_200_-200","block_200_-300","block_200_-400","block_200_-500",
            "block_300_500","block_300_400","block_300_300","block_300_200","block_300_100","block_300_0","block_300_-100","block_300_-200","block_300_-300","block_300_-400","block_300_-500",
            "block_400_500","block_400_400","block_400_300","block_400_200","block_400_100","block_400_0","block_400_-100","block_400_-200","block_400_-300","block_400_-400","block_400_-500",
            "block_500_500","block_500_400","block_500_300","block_500_200","block_500_100","block_500_0","block_500_-100","block_500_-200","block_500_-300","block_500_-400","block_500_-500",
            "block_600_500","block_600_400","block_600_300","block_600_200","block_600_100","block_600_0","block_600_-100","block_600_-200","block_600_-300","block_600_-400","block_600_-500",
            "block_700_500","block_700_400","block_700_300","block_700_200","block_700_100","block_700_0","block_700_-100","block_700_-200","block_700_-300","block_700_-400","block_700_-500",
            "block_-100_500","block_-100_400","block_-100_300","block_-100_200","block_-100_100","block_-100_0","block_-100_-100","block_-100_-200","block_-100_-300","block_-100_-400","block_-100_-500",
            "block_-200_500","block_-200_400","block_-200_300","block_-200_200","block_-200_100","block_-200_0","block_-200_-100","block_-200_-200","block_-200_-300","block_-200_-400","block_-200_-500",
            "block_-300_500","block_-300_400","block_-300_300","block_-300_200","block_-300_100","block_-300_0","block_-300_-100","block_-300_-200","block_-300_-300","block_-300_-400","block_-300_-500",
            "block_-400_500","block_-400_400","block_-400_300","block_-400_200","block_-400_100","block_-400_0","block_-400_-100","block_-400_-200","block_-400_-300","block_-400_-400","block_-400_-500",
            "block_-500_500","block_-500_400","block_-500_300","block_-500_200","block_-500_100","block_-500_0","block_-500_-100","block_-500_-200","block_-500_-300","block_-500_-400","block_-500_-500",
            "block_-600_500","block_-600_400","block_-600_300","block_-600_200","block_-600_100","block_-600_0","block_-600_-100","block_-600_-200","block_-600_-300","block_-600_-400","block_-600_-500",
            "block_-700_500","block_-700_400","block_-700_300","block_-700_200","block_-700_100","block_-700_0","block_-700_-100","block_-700_-200","block_-700_-300","block_-700_-400","block_-700_-500"


        ];
        $scope.squareX = [
            "0","0","0","0","0","0","0","0","0","0","0",
            "100","100","100","100","100","100","100","100","100","100","100",
            "200","200","200","200","200","200","200","200","200","200","200",
            "300","300","300","300","300","300","300","300","300","300","300",
            "400","400","400","400","400","400","400","400","400","400","400",
            "500","500","500","500","500","500","500","500","500","500","500",
            "600","600","600","600","600","600","600","600","600","600","600",
            "700","700","700","700","700","700","700","700","700","700","700",
            "-100","-100","-100","-100","-100","-100","-100","-100","-100","-100","-100",
            "-200","-200","-200","-200","-200","-200","-200","-200","-200","-200","-200",
            "-300","-300","-300","-300","-300","-300","-300","-300","-300","-300","-300",
            "-400","-400","-400","-400","-400","-400","-400","-400","-400","-400","-400",
            "-500","-500","-500","-500","-500","-500","-500","-500","-500","-500","-500",
            "-600","-600","-600","-600","-600","-600","-600","-600","-600","-600","-600",
            "-700","-700","-700","-700","-700","-700","-700","-700","-700","-700","-700"
        ];
        $scope.squareY =[
            "500","400","300","200","100","0","-100","-200","-300","-400","-500",
            "500","400","300","200","100","0","-100","-200","-300","-400","-500",
            "500","400","300","200","100","0","-100","-200","-300","-400","-500",
            "500","400","300","200","100","0","-100","-200","-300","-400","-500",
            "500","400","300","200","100","0","-100","-200","-300","-400","-500",
            "500","400","300","200","100","0","-100","-200","-300","-400","-500",
            "500","400","300","200","100","0","-100","-200","-300","-400","-500",
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
            "-150px","-150px","-150px","-150px","-150px","-150px","-150px","-150px","-150px","-150px","-150px",
            "-250px","-250px","-250px","-250px","-250px","-250px","-250px","-250px","-250px","-250px","-250px",
            "-350px","-350px","-350px","-350px","-350px","-350px","-350px","-350px","-350px","-350px","-350px",
            "-450px","-450px","-450px","-450px","-450px","-450px","-450px","-450px","-450px","-450px","-450px",
            "-550px","-550px","-550px","-550px","-550px","-550px","-550px","-550px","-550px","-550px","-550px",
            "-650px","-650px","-650px","-650px","-650px","-650px","-650px","-650px","-650px","-650px","-650px",
            "-750px","-750px","-750px","-750px","-750px","-750px","-750px","-750px","-750px","-750px","-750px"
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
            "#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc","grey","#ccc"
        ];
        //-- End Grid


        $scope.addElementsToGrid = function() {


            // Width of screen
            $scope.windowWidth = window.innerWidth;
            $scope.windowHeight = window.innerHeight;
            console.log("window Width",  $scope.windowWidth);
            console.log("window Height",  $scope.windowHeight);



            // Cercle Rouge
            var width_container = 100 ;
            var height_container = 100 ;
            var square_position_x = 200 ;
            var square_position_y = 0 ;


            //Add element to grid
            var childdiv = document.getElementById("container-div-cercle-rouge");


            var nameDiv = String("block_" + square_position_x + "_" + square_position_y);
            console.log(nameDiv);


            document.getElementById(nameDiv).appendChild(childdiv);
            // Change width and height
            TweenMax.to(childdiv, 0, {css: { width: width_container, height : height_container}});


            // Breakpoint width & height
            if($scope.windowWidth < Math.abs(square_position_x) * 2 + width_container){
                var monElement = document.getElementsByClassName("mon-cercle-rouge");
                if(square_position_x > 0){
                    TweenMax.to(monElement, 0, {css: { backgroundColor: "#eeeeee" , right: 0   }});
                } else {
                    TweenMax.to(monElement, 0, {css: { backgroundColor: "#eeeeee" , left: 0   }});
                }
            }
            if($scope.windowHeight < Math.abs(square_position_y) * 2 + height_container){
                if(square_position_y < 0){
                    TweenMax.to(monElement, 0, {css: { backgroundColor: "#eeeeee" , top: 0   }});
                } else {
                    TweenMax.to(monElement, 0, {css: { backgroundColor: "#eeeeee" , bottom: 0   }});
                }
            }



        }


    })
