<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://static.tumblr.com/p0knose/Uvepp99oy/modified_photosets.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fitvids/1.2.0/jquery.fitvids.min.js"></script>
 
<script>
$(document).ready(function(){
    var color = '#111';
    $('.soundcloud_audio_player').each(function(){
        $(this).attr({ src: $(this).attr('src').split('&')[0] + '&amp;liking=false&amp;sharing=false&amp;auto_play=false&amp;show_comments=false&amp;continuous_play=false&amp;buying=false&amp;show_playcount=false&amp;show_artwork=true&amp;origin=tumblr&amp;color=' + color.split('#')[1], height: 20, width: '100%' });
    });
    $('iframe.tumblr_audio_player').load(function(){
        $(this).contents().find("head").append("<style type='text/css'> .audio-player {background:transparent!important;} .icon {color:#111!important;} </style>");
    });
    initPhotosets();
    $(".posts").fitVids({customSelector:"iframe[src*='www.tumblr.com/video']"});
    $('.photolight').click(function(e){
        var lbArray = [];
        var arrayContents = {"width":$(this).data('width'), "height":$(this).data('height'), "low_res":$(this).data("lowres"), "high_res":$(this).data('highres')};
        lbArray.push(arrayContents);
        Tumblr.Lightbox.init(lbArray,1);
        $('body').toggleClass('tumblr_lightbox_active');
        e.preventDefault();
    });
});
</script>
