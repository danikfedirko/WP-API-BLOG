import React from 'react'
import createReactClass from 'create-react-class'

const SocialShare = createReactClass({
  buttons(){
    (function(w,doc) {
    if (!w.__utlWdgt ) {
        w.__utlWdgt = true;
        var d = doc, s = d.createElement('script'), g = 'getElementsByTagName';
        s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
        s.src = ('https:' == w.location.protocol ? 'https' : 'http')  + '://w.uptolike.com/widgets/v1/uptolike.js';
        var h=d[g]('body')[0];
        h.appendChild(s);
    }})(window,document);
  },
  render () {
    return (
      <div>

      <script type="text/javascript">
          {this.buttons()}
      </script>
      <div data-background-alpha="0.0" data-buttons-color="#ffffff" data-counter-background-color="#ffffff" data-share-counter-size="12" data-top-button="false" data-share-counter-type="disable" data-share-style="11" data-mode="share" data-like-text-enable="false" data-mobile-view="true" data-icon-color="#ffffff" data-orientation="horizontal" data-text-color="#000000" data-share-shape="round" data-sn-ids="fb.vk.tw.tm." data-share-size="30" data-background-color="#ffffff" data-preview-mobile="false" data-mobile-sn-ids="fb.vk.tw.ok.wh.vb.tm." data-pid="1693001" data-counter-background-alpha="1.0" data-following-enable="false" data-exclude-show-more="false" data-selection-enable="true" className="uptolike-buttons" ></div>
  </div>
    )
  }
})

export default SocialShare
