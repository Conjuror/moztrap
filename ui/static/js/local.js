var TCM = TCM || {};

(function($) {

    TCM.addLoading = function(trigger, context) {
        $(context).find(trigger).click(function() {
            var $container = $(this).closest(context),
                addLoadingCSS = function() {
                    var vertHeight = (parseInt($container.css('height'), 10) - parseInt($container.css('line-height'), 10)) / 2 + 'px',
                        style = '<style type="text/css" class="loadingCSS">.loading::before { padding-top: ' + vertHeight + '; }</style>';
                    $('head').append(style);
                };
            $container.addClass('loading');
            addLoadingCSS();
        });
    };

    $(function() {
        $('input[placeholder], textarea[placeholder]').placeholder();
        $('input, textarea').blur(
            function() {
                $(this).addClass('hadfocus');
            }
        );
        $('#filter .toggle a').click(
            function() {
                $('#filter .visual').toggleClass('compact').toggleClass('expanded');
                return false;
            }
        );
        if ($('html').hasClass('no-details')) {
            $('details').html5accordion('summary');
        }
        $('.details:not(html)').html5accordion('.summary');
        $('#sandbox a.findertoggle').click(function() {
            $(this).add('#sandbox .finder').toggleClass('expanded').toggleClass('compact');
            return false;
        });
        $('#sandbox').html5finder( {
            loading: true,
            horizontalScroll: true,
            scrollContainer: '#findernav.expanded',
            section1class: 'products',
            section1item: 'input[name="product"]',
            section2class: 'cycles',
            section2item: 'input[name="cycle"]',
            section3class: 'runs',
            section3item: 'input[name="run"]',
            section4class: 'cases',
            section4item: 'input[name="case"]',
            section5class: 'results',
            section5item: 'input[name="result"]'
        });
        $('.subnav .findertoggle').click(function() {
            $(this).add('.subnav .finder').toggleClass('expanded').toggleClass('compact');
            return false;
        });
        $('.subnav').html5finder( {
            loading: true,
            horizontalScroll: true,
            scrollContainer: '.finder.expanded',
            section1class: 'products',
            section1item: 'input[name="product"]',
            section2class: 'cycles',
            section2item: 'input[name="cycle"]',
            section3class: 'runs',
            section3item: 'input[name="run"]',
            section4class: 'cases',
            section4item: 'input[name="case"]',
            section5class: 'results',
            section5item: 'input[name="result"]'
        });
    });

})(jQuery);