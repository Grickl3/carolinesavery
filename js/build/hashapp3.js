$(document).ready(function () {
    var pageSize = '';
    function scrollPageTo(identifier, topPadding) {
        if (topPadding == undefined) {
            topPadding = 0;
        }
        var moveTo = $(identifier).offset().top - topPadding;
        $('html, body').stop().animate({
            scrollTop: moveTo
        }, 500);
    };

    var ContentWindow = React.createClass({
        displayName: 'ContentWindow',


        getInitialState: function () {
            return { selectedItem: '' };
        },
        render: function () {

            return React.createElement(
                'div',
                { id: 'inner-container', className: 'row' },
                React.createElement(
                    'div',
                    { id: 'inner-header', className: 'col-xs-12' },
                    React.createElement(Heading, { section: this.props.section })
                ),
                React.createElement(
                    'div',
                    { id: 'inner-list', className: 'col-xs-12 col-sm-3' },
                    React.createElement(ItemList, { section: this.props.section, selectedItem: this.state.selectedItem })
                ),
                React.createElement(
                    'div',
                    { id: 'inner-contents', className: 'col-xs-12 col-sm-9' }
                    
                )
            );
        }
    });
    var Heading = React.createClass({
        displayName: 'Heading',

        render: function () {

            return React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'div',
                    { className: 'col-xs-12' },
                    React.createElement(
                        'h2',
                        { className: 'section-title' },
                        this.props.section.stuff.sectionTitle
                    ),
                    React.createElement('a', {href: "./index.html#/"},
                    React.createElement(
                            'button',
                            { className: 'closeButton' },
                            
                            React.createElement('span', { className: 'glyphicon glyphicon-remove' })
                        )
                            )
                )
                
                
                
            );
        }

    });
    var ItemList = React.createClass({
        displayName: 'ItemList',

        onSelected: function (item) {
            //hash change to item link which will be in actuality interpreted a level up to change state
            console.log('yo' + item);
        },
        render: function () {
            var onSelected = this.onSelected;
            var currentSection = this.props.section.name;
            var style = { display: 'none' };
            var linkList = this.props.section.stuff.links.map(function (entry) {
                if (entry.external === true) {
                    return React.createElement(
                        'li',
                        { className: 'link-item', key: entry.linkTitle },
                        React.createElement(
                            'a',
                            { className: 'inner-link', id: entry.ref, target: '_blank', href: entry.contents },
                            entry.linkTitle,
                            '  ',
                            React.createElement('span', { className: 'glyphicon glyphicon-new-window' })
                        )
                    );
                } else {
                    return React.createElement(
                        'li',
                        { className: 'link-item', id: entry.ref, key: entry.linkTitle },
                        React.createElement(
                            'a',
                            { className: 'inner-link', id: ""+entry.ref+"", href: "#/" + currentSection + "/" + entry.ref },
                            entry.linkTitle
                        )
                    );
                };
            });
            return React.createElement(
                'div',
                { className: 'item-list-container' },
                React.createElement(
                    'div',
                    { className: 'item-list' },
                    linkList
                )
            );
        }

    });


/*
    function handleNewHash() {

        var location = window.location.hash.replace(/^#\/?|\/$/g, '').split('/');

        var sectionLoc = location[0];
        var itemLoc = location[1];
        var sectionSelector = $('#' + sectionLoc + '-link');
        var containerSelector = $('#' + sectionLoc + '-container');

        function itemSetup(item) {

        }
        function sectionSetup(section, isChild) {
                $(sectionSelector).addClass('selected');
                

                if ($(containerSelector).is(':visible') && itemLoc ) {
                    itemSetup(itemLoc);
                }
                if (!isChild) {

                }
            }
            

        switch (sectionLoc) {

            case '':
                $('.outer-link').unbind('click');
                $('.content-container').hide(300);
                $('.outer-link').removeClass('selected');
                break;
            case 'music':
                $('.outer-link').unbind('click');
                $('.outer-link').removeClass('selected');
                $('#music-link').addClass('selected');
                if ($('#music-container').is(':visible')) {
                    if (itemLoc) {} else {
                        $(sectionSelector).bind('click', function (e) {
                            e.preventDefault();e.stopPropagation;window.location.href = "#/";
                        });
                    };
                } else {
                    $('.content-container').hide();
                    $('#music-container').show(400);
                    $(sectionSelector).bind('click', function (e) {
                        e.preventDefault();e.stopPropagation;window.location.href = "#/";
                    });
                }
                scrollPageTo('#music-container', 50);
                break;

            case 'writing':
                $('.outer-link').unbind('click');
                $('.outer-link').removeClass('selected');
                $('#writing-link').addClass('selected');
                if ($('#writing-container').is(':visible')) {
                    if (itemLoc) {} else {
                        $(sectionSelector).bind('click', function (e) {
                            e.preventDefault();e.stopPropagation;window.location.href = "#/";
                        });
                    };
                } else {
                    $('.content-container').hide();

                    $('#writing-container').show(400);
                    $(sectionSelector).bind('click', function (e) {
                        e.preventDefault();e.stopPropagation;window.location.href = "#/";
                    });
                }
                scrollPageTo('#writing-container', 50);
                break;

            case 'film':
                $('.outer-link').unbind('click');
                $('.outer-link').removeClass('selected');
                $('#film-link').addClass('selected');
                if ($('#film-container').is(':visible')) {
                    if (itemLoc) {} else {
                        $(sectionSelector).bind('click', function (e) {
                            e.preventDefault();e.stopPropagation;window.location.href = "#/";
                        });
                    };
                } else {
                    $('.content-container').hide();

                    $('#film-container').show(400);
                    $(sectionSelector).bind('click', function (e) {
                        e.preventDefault();e.stopPropagation;window.location.href = "#/";
                    });
                }
                scrollPageTo('#film-container', 50);
                break;

            case 'coop':
                $('.outer-link').unbind('click');
                $('.outer-link').removeClass('selected');
                $('#coop-link').addClass('selected');
                if ($('#coop-container').is(':visible')) {
                    if (itemLoc) {} else {
                        $(sectionSelector).bind('click', function (e) {
                            e.preventDefault();e.stopPropagation;window.location.href = "#/";
                        });
                    };
                } else {
                    $('.content-container').hide();
                    $('#coop-container').show(400);
                    $(sectionSelector).bind('click', function (e) {
                        e.preventDefault();e.stopPropagation;window.location.href = "#/";
                    });
                }
                scrollPageTo('#coop-container', 50);
                break;

            case 'self':
                $('.outer-link').unbind('click');
                $('.outer-link').removeClass('selected');
                $('#self-link').addClass('selected');
                if ($('#self-container').is(':visible')) {
                    if (itemLoc) {} else {
                        $(sectionSelector).bind('click', function (e) {
                            e.preventDefault();e.stopPropagation;window.location.href = "#/";
                        });
                    };
                } else {
                    $('.content-container').hide();
                    $('#self-container').show(400);
                    $(sectionSelector).bind('click', function (e) {
                        e.preventDefault();e.stopPropagation;window.location.href = "#/";
                    });
                }
                scrollPageTo('#self-container', 50);
                break;
            case 'contact':
                $('.outer-link').unbind('click');
                $('.content-container').hide();
                $('.outer-link').removeClass('selected');
                $('#contact-container').load('./contact.php');
                $('#contact-container').show(400);
                scrollPageTo('#contact-container', 50);
                break;
            default:
                console.log('hit default');

        }

        if (!itemLoc) {

            $('#view-contents').hide(400);
            $('.inner-link').unbind('click');
            $('.inner-link').removeClass('selected');
        } else {

            var selector = $('#' + itemLoc + '');
            $('.inner-link').unbind('click');
            //$('#view-contents').hide(700);
            $('#view-contents').load('./pages/' + sectionLoc + '/' + itemLoc + '.html');
            $('#view-contents').appendTo(selector);
            
            
            //$('#view-contents').show(400);
            $('.inner-link').removeClass('selected');
            $('#' + itemLoc + ' > a').addClass('selected');

            $('#' + itemLoc + ' > a').bind('click', function (e) {
                e.preventDefault();e.stopPropagation;window.location.href = "#/" + sectionLoc + "";
            });
            $('#view-contents').show(300);

            //target the actual li with the link
            //hide other open items (by replacing everything of the class with its link li)
            //replace the selector link with content that concatenates a generic anchor href to section with the same name as the link with a view-content that just injects separate html.
        }
    };
    */

    function handleNewHash(){
    var location = window.location.hash.replace(/^#\/?|\/$/g, '').split('/');

        $('#view-contents').hide();  //for initial page load
        $('#nav-header').hide();
        $('#form-contents').hide();
        $('#page-heading').hide();
        


        var sectionLoc = location[0];
        var itemLoc = location[1];
        var scrollLoc = location[2];

        
        function scrollHandler(){
            if (scrollLoc) {
                var scrollSelector = $('#'+scrollLoc+'');
                scrollPageTo(scrollSelector, 10);    
            } else {}
        };

        console.log('sec '+sectionLoc+', item '+itemLoc);
        var containerSelector = $('#' + sectionLoc + '-container');
        var itemLinkSelector = $('#' + itemLoc + '');
        var sectionLinkSelector = $('#'+sectionLoc + '-link');
        var innerTarget = $('div#inner-contents', containerSelector);
        
        

        

        var getIntent = function(item, section) {
            if (item) {
                return 'page';
            } else if (section) {
                if (section === 'contact') {

                    return 'contact'
                } else {
                return 'section';
            } } else {
                return 'home';
            }
        };
        var intent = getIntent(itemLoc, sectionLoc);
        console.log(intent);

            if ($(".content-container").css("position") == "absolute" ){
                console.log('big screen');
                pageSize = 'large';
                $('#image-footer').hide();
                switch (intent) {
            case 'page':
                //console.log('hit the page switch'); 
                $('.link-item').removeClass('selected');
                $(itemLinkSelector).addClass('selected');   
                
                if ($(containerSelector).is(':visible')) {
                    $('#image-footer').hide();
                    $('#image-header').show();
                    $('#footer-links').show();
                    $('#contact-footer').show();

                    $('#view-contents').load('./pages/' + sectionLoc + '/' + itemLoc + '.html', function(){
                        $('#view-contents a[href^="http"]').attr('target','_blank');
                        scrollHandler();
                    });
                    $('#view-contents').appendTo($(innerTarget));
                    $('#view-contents').show();
                    scrollPageTo(containerSelector, 50);
                    
                    
                } else {
                    $('#image-footer').hide();
                $('#image-header').show();
                $('#footer-links').show();
                $('#contact-footer').show();
                    $('.content-container').hide();
                    $(containerSelector).show();    
                    $('#view-contents').appendTo($(innerTarget));
                    $('#view-contents').load('./pages/' + sectionLoc + '/' + itemLoc + '.html', function(){
                        $('#view-contents a[href^="http"]').attr('target','_blank');
                        scrollHandler();
                    });
                    $('#view-contents').show();
                    

                }
                break;
            case 'section':

                if ($(containerSelector).is(':visible')) {
                    $('#image-footer').hide();
                $('#image-header').show();
                $('#footer-links').show();
                $('#contact-footer').show();
                $(containerSelector).show();
                    $('#view-contents').load('./pages/'+sectionLoc+'/section.html');
                    $('#view-contents').appendTo($(innerTarget));
                    $('#view-contents').show();
                    $('.link-item').removeClass('selected');
                    scrollPageTo(containerSelector, 50);
                        
                } else {
                    $('#image-footer').hide();
                $('#image-header').show();
                $('#footer-links').show();
                $('#contact-footer').show();

                    $('.link-item').removeClass('selected');
                    $('.content-container').hide();
                    $(containerSelector).show();  
                    $('#view-contents').appendTo($(innerTarget));
                    $('#view-contents').load('./pages/'+sectionLoc+'/section.html');
                    $('#view-contents').show();
                    $('.outer-link').removeClass('selected');
                    $(sectionLinkSelector).addClass('selected');
                    scrollPageTo(containerSelector, 50);
                    
                }
                break;
            case 'home':
                $('.content-container').hide();
                $('#nav-header').hide();
                $('#view-contents').hide();
                $('#image-footer').hide();
                $('#image-header').show();
                $('#footer-links').show();
                $('#contact-footer').show();
                $('.outer-link').removeClass('selected');
                $('#nav-header').css({display: 'none'});
                break;
            case 'contact':
                $('.outer-link').removeClass('selected');
                $('#image-footer').hide();
                $('#image-header').show();
                $('#footer-links').show();
                $('#contact-footer').show();
                $('.content-container').hide();
                $(containerSelector).show();
                $('#form-contents').load('./pages/contact.html');
                $('#form-contents').appendTo($('#contact-container'));
                $('#form-contents').show();
                break;
                
                
        }

        // your code here
    } else {
        console.log('small screen');
        pageSize = 'small';

        switch (intent) {
            case 'page':
                    $('#image-header').hide();
                    $('#footer-links').hide();
                    
                    $('.content-container').hide();
                    $('#nav-header').show();

                    $('#view-contents').appendTo($('#view-container'));
                    $('#view-contents').load('./pages/' + sectionLoc + '/' + itemLoc + '.html', function(){
                        $('#view-contents a[href^="http"]').attr('target','_blank');
                        scrollHandler();
                    });
                    $('#view-contents').show();
                    
                    $('#nav-header').html('<a href="#/'+sectionLoc+'"><div><span class="glyphicon glyphicon-arrow-left"></span> Back to '+sectionLoc[0].toUpperCase()+sectionLoc.slice(1)+'</div></a>');
                    $('#image-footer').show();
                    $('#contact-footer').show();
                    $('.link-item').removeClass('selected');
                    $(itemLinkSelector).addClass('selected');
                    break;
            case 'section':

                    $('#image-header').hide();
                    $('#view-contents').hide();
                    $('#footer-links').hide();
                    $('#contact-footer').hide();
                    $('#nav-header').show();
                    $(containerSelector).show();
                    $('#nav-header').html('<a href="#/"><div><span class="glyphicon glyphicon-arrow-left"></span> Back to Home</div></a>');
                    $('#image-footer').show();
                    $('#contact-footer').show();
                    $('.link-item').removeClass('selected');
                    
                break;
            case 'home':
                $('.outer-link').removeClass('selected');
                $('.content-container').hide();
                $('#nav-header').hide();
                $('#view-contents').hide();
                $('#image-footer').hide();
                $('#image-header').show();
                $('#footer-links').show();
                $('#contact-footer').show();
                break;
            case 'contact':
                $('.outer-link').removeClass('selected');
                $('#image-header').hide();
                $('#footer-links').hide();    
                $('.content-container').hide();
                $('#nav-header').show();
                $('#nav-header').html('<a href="#/"><div><span class="glyphicon glyphicon-arrow-left"></span> Back to Home</div></a>');
                $('#form-contents').appendTo($('#view-container'));
                $('#image-footer').show();
                $('#form-contents').load('./pages/contact.html');
                $('#form-contents').show();

                
                
        }
    }



        
};

function handleResize() {
    var newSize = '';

    if ($(".content-container").css("position") == "absolute" ) {
        newSize = 'large';
    } else { newSize = 'small'}
    console.log(newSize);
    if (newSize !== pageSize ) {
        handleNewHash();
    } else {}
};

    ReactDOM.render(React.createElement(ContentWindow, { section: data.sections[0] }), document.getElementById('music-container'));
    ReactDOM.render(React.createElement(ContentWindow, { section: data.sections[1] }), document.getElementById('writing-container'));
    ReactDOM.render(React.createElement(ContentWindow, { section: data.sections[2] }), document.getElementById('film-container'));
    ReactDOM.render(React.createElement(ContentWindow, { section: data.sections[3] }), document.getElementById('co-ops-container'));
    ReactDOM.render(React.createElement(ContentWindow, { section: data.sections[4] }), document.getElementById('self-container'));

    handleNewHash();
    window.addEventListener('hashchange', handleNewHash, false);
    window.addEventListener('resize', handleResize, false);

});