'use strict'

angular.module('app').controller('Responsive', ['$scope', function($scope){
    $scope.iframeDim = {
        width: '100%',
        height: '100%',
        scale: 1.0
    };
    
    
    $scope.iframeWidth = false;
    $scope.iframeStyle = {};
    
    /*
    width of container = cWidth;
    iframe width = iWidth;
    
    to make iWidth = cWidth,
    iWidth * sW = cWidth;
    sW = cWidth / iWidth;
    */
    
    var containerSize = {
        width: $('#iframe-container').width(),
        height: $('#iframe-container').height()
    };
    $scope.currentWebsite = '';
    
    var iframe = $('#iframe-container iframe');
    var iframeHeightAdjuster = $('#iframe-height-adjuster'); 
    var interval = null;
    window.adjustIframeHeight = function()
    {
        $(iframe[0].contentWindow.document.body).css('overflow', 'hidden');
        
        interval === null || clearInterval(interval);
        
        
        var previousBodyHeight = -1;
        var previousScrollHeight = -1; 
        
        
        interval = setInterval(function() {
            
            if($scope.currentWebsite == 'admin')
            {
                $(iframe[0].contentWindow.document.body).find('#page-wrapper').css('min-height','0px');
            }
            $(iframe[0].contentWindow.document.body).css('height','auto');
            
            var currentBodyHeight = $(iframe[0].contentWindow.document.body).height();
            
            iframe.height(currentBodyHeight);
            
            var currentScrollHeight = ($(iframe[0].contentWindow.document.body).prop('scrollHeight') * $scope.iframeDim.scale);
             
            iframeHeightAdjuster.height(currentScrollHeight);
            
            if(previousBodyHeight == currentBodyHeight && previousScrollHeight == currentScrollHeight)
            {
                clearInterval(interval);
                interval = null;
            }
            
            previousBodyHeight = currentBodyHeight; 
            previousScrollHeight = currentScrollHeight;
                
        }, 200);
        
    }
    
    $scope.currentSizeTextStyle = {color: 'red'};
    
    
    $scope.currentSizeText = 'Move slider to adjust size';
    $scope.onIframeResize = function(){
        if($scope.iframeWidth !== false)
        {
            $scope.iframeDim.width = $scope.iframeWidth;
            $scope.iframeDim.scale = containerSize.width / $scope.iframeDim.width;
            
            if($scope.iframeWidth < 768)
            {
                $scope.currentSizeTextStyle.color = "#EF26FB";
                $scope.currentSizeText = 'Phones / Extra Small Devices';
            }
            else if($scope.iframeWidth < 992)
            {
                $scope.currentSizeTextStyle.color = "#7B8227";
                $scope.currentSizeText = 'Tablets / Small Devices';
            }
            else if($scope.iframeWidth < 1200)
            {
                $scope.currentSizeTextStyle.color = "#52BF46";
                $scope.currentSizeText = 'Laptops / Desktops / Medium Devices';
            }
            else if($scope.iframeWidth >= 1200) 
            {
                $scope.currentSizeTextStyle.color = "#0035FF";
                $scope.currentSizeText = 'Large Desktops / Large Devices';
            }
            else
            {
                $scope.currentSizeTextStyle.color = "red";
                $scope.currentSizeText = 'Move slider to adjust size';
            }
        }   
        $scope.iframeStyle.transform = 'scale(' + $scope.iframeDim.scale + ',' + $scope.iframeDim.scale + ')';
        window.adjustIframeHeight();
    }
    
    $('#iframe-container iframe').load(window.adjustIframeHeight);
    
    $scope.setWebsite = function(website)
    {
        $scope.currentWebsite = website;
        if(website == 'wwc')
        {
            iframe.attr('src', 'http://localhost:3000/app/websitefetch?website=wwc');
        }
        else if (website == 'admin')
        {
            iframe.attr('src','/websites/sbadmin2');
        }
        else
        {
            $scope.currentWebsite = "origin";
            iframe.attr('src',location.origin);
        }    
    }
    $scope.setWebsite();
    window.iframeLoaded = function(){
        $scope.onIframeResize();
        //somtimes fails to initialize
        window.adjustIframeHeight();
        setTimeout(window.adjustIframeHeight, 2500);
        
    }
    
    $scope.isIframe = function(){
        window.self !== window.top;
    }
    

}]);