import s from '../scss/components/_about.module.scss';
import BlockContent from '@sanity/block-content-to-react';
import client from '../client';

const About = ({ content }) => {
  const { title = '', body = [] } = content;
  // const serializers = {
  //   types: {
  //     block(props) {
  //       switch (props.node.style) {
  //         case 'h2':
  //           return <h2>{props.children}</h2>;

  //         default:
  //           return <p>{props.children}</p>;
  //       }
  //     },
  //   },
  //   marks: {
  //     inlineicon(props) {
  //       switch (props.mark._type) {
  //         case 'inlineicon':
  //           if (props.mark.asset) {
  //             return (
  //               <InlineIcon
  //                 src={props.mark.asset.url || ''}
  //                 alt={props.children[0]}
  //               />
  //             );
  //           } else {
  //             return null;
  //           }
  //       }
  //     },
  //   },
  // };
  return (
    <div className={s['about']} id='about'>
      <div className={s['about-bottom']}>
        <div className={s['about-profile-img']}>
          <img src='/media/blue-dusty.png' alt='my face' />
        </div>
        <div className={s['about-bottom-title']}>{title}</div>
        <div className={s['about-bottom-body']}>
          <div className={s['about-bottom-bullets']}>
            <BlockContent
              blocks={body}
              // serializers={serializers}
              // className={s['about-bottom-bullets']}
              // imageOptions={{ w: 320, h: 240, fit: 'max', margin: 'auto' }}
              {...client.config()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
