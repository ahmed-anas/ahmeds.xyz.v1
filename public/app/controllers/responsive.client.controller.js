'use strict'

angular.module('app').controller('Responsive', ['$scope', function($scope){
    $scope.iframeDim = {
        width: '100%',
        height: '100%',
        scale: 1.0
    };
    
    
    $scope.iframeHeight = false;
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
    
    
    var iframe = $('#iframe-container iframe');
    var iframeHeightAdjuster = $('#iframe-height-adjuster'); 
    var interval = null;
    window.adjustIframeHeight = function()
    {
        iframe[0].contentWindow.document.body.style.overflow = 'hidden';
        
        interval === null || clearInterval(interval);
        
        
        var previousBodyHeight = -1;
        var previousScrollHeight = -1; 
        
        
        interval = setInterval(function() {
            var currentBodyHeight = $(iframe[0].contentWindow.document.body).height() + 1;
            
            iframe.height(currentBodyHeight);
            
            var currentScrollHeight = 1 + ($(iframe[0].contentWindow.document.body).prop('scrollHeight') * $scope.iframeDim.scale);
             
            iframeHeightAdjuster.height(currentScrollHeight);
            
            if(previousBodyHeight == currentBodyHeight && previousScrollHeight == currentScrollHeight)
            {
                clearInterval(interval);
                interval = null;
            }
            
            previousBodyHeight = currentBodyHeight; 
            previousScrollHeight = currentScrollHeight;
            
            console.log('interval called');
                
        }, 200);
        
    }
    
    //somtimes fails to initialize
    setInterval(window.adjustIframeHeight, 2500);
    
    
    $scope.currentSizeText = 'Move slider to adjust size';
    $scope.onIframeResize = function(){
        if($scope.iframeWidth !== false)
        {
            $scope.iframeDim.width = $scope.iframeWidth;
            $scope.iframeDim.scale = containerSize.width / $scope.iframeDim.width;
            
            if($scope.iframeWidth < 768)
                $scope.currentSizeText = 'Phones / Extra Small Devices';
            else if($scope.iframeWidth < 992)
                $scope.currentSizeText = 'Tables / Small Devices';
            else if($scope.iframeWidth < 1200)
                $scope.currentSizeText = 'Laptops / Desktops / Medium Devices';
            else if($scope.iframeWidth >= 1200) 
                $scope.currentSizeText = 'Large Desktops / Large Devices';
            else
                $scope.currentSizeText = 'Move slider to adjust size';
        }   
        $scope.iframeStyle.transform = 'scale(' + $scope.iframeDim.scale + ',' + $scope.iframeDim.scale + ')';
        window.adjustIframeHeight();
    }
    
    $('#iframe-container iframe').load(window.adjustIframeHeight);
    
    $scope.setWebsite = function(website)
    {
        if(website == 'wwc')
            iframe.attr('src', 'http://worldwidecargoservices.co.uk');
        else if (website == 'admin')
            iframe.attr('src','http://blackrockdigital.github.io/startbootstrap-sb-admin-2/pages/index.html');
        else
            iframe.attr('src',location.origin);
            
    }
    $scope.setWebsite();

}]);