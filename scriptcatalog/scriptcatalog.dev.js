(function (I18n, $) {
    $.loadScript = function (url, callback) {
        $.ajax({
            url: url,
            dataType: 'script',
            success: callback,
            async: true
        });
    }

    $.loadScript('/sites/collapseDeployments.js');
})(I18n, jQuery);
