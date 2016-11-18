import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Icon, Button } from 'react-lu-design';
import QueueAnim from 'rc-queue-anim';

const clientHeight = document.documentElement.clientHeight;
function onScrollEvent(e) {
  const header = document.getElementById('header');
  if (e.pageY >= clientHeight) {
    if (header.className.indexOf('home-nav-bottom') < 0) {
      header.className += ' home-nav-bottom';
    }
  } else if (header.className.indexOf('home-nav-bottom') >= 0) {
    header.className = header.className.replace(/home-nav-bottom/ig, '');
  }
}

export default function Banner({ location }) {
  return (
    <ScrollOverPack id="banner" className="content-wrapper page"
      playScale={1} replay scrollEvent={onScrollEvent}
      hideProps={{ image: { reverse: true } }}
    >
      <TweenOne key="image" className="image1 image-wrapper"
        animation={{ x: 0, opacity: 1, ease: 'easeOutQuad' }}
        style={{ transform: 'translateX(-100px)', opacity: 0 }}
      />
      <QueueAnim className="text-wrapper" key="text" leaveReverse>
        <h2 key="h2">LuDesign</h2>
        <p key="p" style={{ maxWidth: 310 }}>逐鹿X中后台设计语言及其React实现</p>
        <div key="button">
          <Link to={{ query: location.query, pathname: '/docs/spec/introduce' }}>
            <Button type="primary" size="large">
              <FormattedMessage id="app.home.learn-more" />
              <Icon type="right" />
            </Button>
          </Link>
        </div>
      </QueueAnim>
    </ScrollOverPack>
  );
}
